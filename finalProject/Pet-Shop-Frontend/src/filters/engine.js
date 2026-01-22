import { SORT, DEFAULT_FILTERS } from "./model";

function getEffectivePrice(p) {
  if (!p || typeof p.price !== "number") return null;

  const dp = p.discont_price;
  const hasValidDiscount = typeof dp === "number" && dp < p.price;

  return hasValidDiscount ? dp : p.price;
}

export function applyProductFilters(products, filters) {
  const f = filters ?? DEFAULT_FILTERS;
  let result = Array.isArray(products) ? [...products] : [];

  // discount-only
  if (f.discount) {
    result = result.filter((p) => {
      if (!p || typeof p.price !== "number") return false;
      return typeof p.discont_price === "number" && p.discont_price < p.price;
    });
  }

  // price range (use effective price)
  if (typeof f.min === "number") {
    result = result.filter((p) => {
      const ep = getEffectivePrice(p);
      return ep !== null && ep >= f.min;
    });
  }

  if (typeof f.max === "number") {
    result = result.filter((p) => {
      const ep = getEffectivePrice(p);
      return ep !== null && ep <= f.max;
    });
  }

  // sort (use effective price for price sorts)
  switch (f.sort) {
    case SORT.NEWEST:
      result.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;

    case SORT.PRICE_HIGH_LOW:
      result.sort((a, b) => (getEffectivePrice(b) ?? 0) - (getEffectivePrice(a) ?? 0));
      break;

    case SORT.PRICE_LOW_HIGH:
      result.sort((a, b) => (getEffectivePrice(a) ?? 0) - (getEffectivePrice(b) ?? 0));
      break;

    case SORT.DEFAULT:
    default:
      // keep API order
      break;
  }

  return result;
}
