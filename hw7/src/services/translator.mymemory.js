import { MYMEMORY_ENDPOINT, SUPPORTED_LANGUAGES } from "../config/translator";

async function callMyMemory({ text, source, target }) {
  const params = new URLSearchParams({
    q: text,
    langpair: `${source}|${target}`,
  });
  const url = `${MYMEMORY_ENDPOINT}?${params.toString()}`;
  const response = await fetch(url, { method: "GET" });
  const json = await response.json().catch(() => ({}));
  return { response, json };
}

export async function translateMyMemory({ text, target, source = "auto" }) {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("Input text is empty. Please enter a string.");
  }
  const srcText = text.trim();
  const targetNorm = String(target).toLowerCase().trim();
  const sourceNormInitial = String(source || "auto")
    .toLowerCase()
    .trim();

  if (!SUPPORTED_LANGUAGES.includes(targetNorm)) {
    throw new Error(
      `Target language "${target}" is not supported. Allowed: ${SUPPORTED_LANGUAGES.join(
        ", "
      )}.`
    );
  }

  const trySources = [];
  if (sourceNormInitial) trySources.push(sourceNormInitial);

  const hasCyrillic = /[\u0400-\u04FF]/.test(srcText);
  const fallbacksBase = hasCyrillic ? ["ru", "en", "de"] : ["en", "de", "ru"];

  for (const s of fallbacksBase) {
    if (!trySources.includes(s) && s !== targetNorm) {
      trySources.push(s);
    }
  }

  for (let i = 0; i < trySources.length; i++) {
    const src = trySources[i];
    const isLast = i === trySources.length - 1;

    try {
      const { json } = await callMyMemory({
        text: srcText,
        source: src,
        target: targetNorm,
      });

      const status = json?.responseStatus;
      const translatedText = json?.responseData?.translatedText;

      if (status === 200 && typeof translatedText === "string") {
        if (
          translatedText.trim().toLowerCase() === srcText.toLowerCase() &&
          !isLast
        ) {
          continue;
        }
        return { translatedText };
      }

      const detail =
        json?.responseDetails || json?.message || "Unknown API error";

      if (/unsupported|language/i.test(detail) && !isLast) {
        continue;
      }

      let userMessage = detail;
      if (/quota|limit/i.test(detail)) {
        userMessage = "Rate limit exceeded. Please try again later.";
      } else if (/invalid|parameter/i.test(detail)) {
        userMessage = "Invalid request parameters.";
      }
      throw new Error(userMessage);
    } catch (err) {
      if (
        (err instanceof TypeError ||
          /NetworkError|Failed to fetch/i.test(String(err))) &&
        !isLast
      ) {
        continue;
      }
      if (err instanceof Error) throw err;
      throw new Error("Unexpected error during translation.");
    }
  }

  throw new Error("Unsupported language. Check source/target codes.");
}
