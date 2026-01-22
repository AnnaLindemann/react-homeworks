import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { SORT } from "../model";

export default function FiltersPanel({
  value,
  onChange,
  onApplyPriceRange,
  showDiscount = true,
  discountLocked = false,
}) {
  const [draftMin, setDraftMin] = useState(value.min ?? "");
  const [draftMax, setDraftMax] = useState(value.max ?? "");


  useEffect(() => {
    setDraftMin(value.min ?? "");
    setDraftMax(value.max ?? "");
  }, [value.min, value.max]);

  function handleSortChange(e) {
    onChange({ ...value, sort: e.target.value });
  }

  function handleDiscountChange(e) {
    if (discountLocked) return;
    onChange({ ...value, discount: e.target.checked });
  }

  function parseDraftToNumber(draft) {
    if (draft === "") return undefined;
    const n = Number(draft);
    return Number.isFinite(n) ? n : undefined;
  }

  function applyPriceNow() {
    const min = parseDraftToNumber(draftMin);
    const max = parseDraftToNumber(draftMax);
    onApplyPriceRange({ min, max });
  }

  function handlePriceKeyDown(e) {
    if (e.key !== "Enter") return;
    e.preventDefault();
    applyPriceNow();
  }

  function handleMinBlur() {
    applyPriceNow();
  }

  function handleMaxBlur() {
    applyPriceNow();
  }

  return (
    <div className={styles.panel}>
      <div className={styles.row}>
        <div className={styles.priceGroup}>
          <span className={styles.label}>Price</span>

          <input
            className={styles.input}
            placeholder="from"
            value={draftMin}
            onChange={(e) => setDraftMin(e.target.value)}
            onKeyDown={handlePriceKeyDown}
            onBlur={handleMinBlur}
            inputMode="numeric"
          />

          <input
            className={styles.input}
            placeholder="to"
            value={draftMax}
            onChange={(e) => setDraftMax(e.target.value)}
            onKeyDown={handlePriceKeyDown}
            onBlur={handleMaxBlur}
            inputMode="numeric"
          />
        </div>

        {showDiscount ? (
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={value.discount}
              onChange={handleDiscountChange}
              disabled={discountLocked}
            />
            <span>Discounted items</span>
          </label>
        ) : null}

        <div className={styles.sortGroup}>
          <span className={styles.label}>Sorted</span>
          <select className={styles.select} value={value.sort} onChange={handleSortChange}>
            <option value={SORT.DEFAULT}>by default</option>
            <option value={SORT.NEWEST}>newest</option>
            <option value={SORT.PRICE_HIGH_LOW}>price: high-low</option>
            <option value={SORT.PRICE_LOW_HIGH}>price: low-high</option>
          </select>
        </div>
      </div>
    </div>
  );
}
