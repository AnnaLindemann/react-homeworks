import { DEFAULT_FILTERS, SORT } from "./model";

function toNumberOrUndefined(value) {
  if (value == null || value === "") return undefined;
  const n = Number(value);
  if (!Number.isFinite(n) || n < 0) return undefined;
  return n;
}

export function parseFiltersFromSearch(search) {
  const params = new URLSearchParams(search);

  const sortRaw = params.get("sort");
  const sort =
    sortRaw === SORT.NEWEST ||
    sortRaw === SORT.PRICE_HIGH_LOW ||
    sortRaw === SORT.PRICE_LOW_HIGH
      ? sortRaw
      : SORT.DEFAULT;

  const min = toNumberOrUndefined(params.get("min"));
  const max = toNumberOrUndefined(params.get("max"));

  const discount = params.get("discount") === "1";

  return {
    ...DEFAULT_FILTERS,
    sort,
    min,
    max,
    discount,
  };
}

export function buildSearchFromFilters(filters) {
  const f = filters ?? DEFAULT_FILTERS;
  const params = new URLSearchParams();

  if (f.sort && f.sort !== SORT.DEFAULT) params.set("sort", f.sort);

  if (typeof f.min === "number") params.set("min", String(f.min));
  if (typeof f.max === "number") params.set("max", String(f.max));

  if (f.discount) params.set("discount", "1");

  const s = params.toString();
  return s ? `?${s}` : "";
}

export function applySwapToRange(filters) {
  const min = filters.min;
  const max = filters.max;

  if (typeof min === "number" && typeof max === "number" && min > max) {
    return { ...filters, min: max, max: min };
  }

  return filters;
}

export function clearSearch() {
  return "";
}
