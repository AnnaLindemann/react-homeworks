import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import BreadCrumbs from "../../components/breadCrumbs";
import { API_URL } from "../../api/api";
import { productsGet } from "../../redux/slices/productsSlice";
import {
  addToCart,
  increaseQty,
  decreaseQty,
  selectCartQtyById,
  selectIsInCartById,
} from "../../redux/slices/cartSlice";

import styles from "./styles.module.css";
import { getDiscountPercent } from "../../components/productCard";

export const BREADCRUMBS = {
  categories: [
    { label: "Main page", to: "/" },
    { label: "Categories", to: "/categories" },
  ],
};

export default function Product() {
  const dispatch = useDispatch();
  const { id: paramId } = useParams();

  const { status, error } = useSelector((state) => state.products);
  const products = useSelector((state) => state.products.items);
  const categories = useSelector((state) => state.categories.items);

  const productId = Number(paramId);
  const safeProductId = Number.isFinite(productId) ? productId : null;

  useEffect(() => {
    if (status === "idle") {
      dispatch(productsGet());
    }
  }, [status, dispatch]);

  const product = useMemo(() => {
    if (!safeProductId) return undefined;
    return products.find((p) => Number(p.id) === safeProductId);
  }, [products, safeProductId]);

  const categoryId =
    status === "succeeded" && product ? Number(product.categoryId) : null;

  const category = useMemo(() => {
    if (!categoryId) return undefined;
    return categories.find((c) => Number(c.id) === categoryId);
  }, [categories, categoryId]);

  const categoryTitle = category?.title ?? "Category";
  const productTitle = product?.title ?? "Product";

  const crumbs = useMemo(() => {
    const base = [...BREADCRUMBS.categories];

    if (categoryId) {
      base.push({ label: categoryTitle, to: `/categories/${categoryId}` });
    } else {
      base.push({ label: categoryTitle });
    }

    base.push({ label: productTitle });
    return base;
  }, [categoryId, categoryTitle, productTitle]);

  const inCart = useSelector((state) =>
    safeProductId ? selectIsInCartById(state, safeProductId) : false
  );
  const cartQty = useSelector((state) =>
    safeProductId ? selectCartQtyById(state, safeProductId) : 0
  );

  const displayQty = inCart ? cartQty : 1;
  const canDecrease = inCart && cartQty > 1;

  const onAdd = () => {
    if (!product) return;

    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        discont_price: product.discont_price,
        image: product.image,
      })
    );
  };

  const onIncrease = () => {
    if (!safeProductId || !product) return;

    if (!inCart) {
      onAdd();
      return;
    }

    dispatch(increaseQty(safeProductId));
  };

  const onDecrease = () => {
    if (!safeProductId) return;
    if (!canDecrease) return;

    dispatch(decreaseQty(safeProductId));
  };

  const price = Number(product?.price);
const discountPrice =
  product?.discont_price === null ? null : Number(product?.discont_price);

const hasDiscount =
  Number.isFinite(price) &&
  discountPrice !== null &&
  Number.isFinite(discountPrice) &&
  discountPrice > 0 &&
  discountPrice < price;

  const percent = hasDiscount && product ? getDiscountPercent(product) : null;

  const [isExpanded, setIsExpanded] = useState(false);
  const SHORT_LIMIT = 180;

  const descriptionRaw = product?.description ?? "";
  const isLong = descriptionRaw.length > SHORT_LIMIT;
  const shouldShowToggle = isLong && descriptionRaw.length > 0;

  const shortText = descriptionRaw.slice(0, SHORT_LIMIT).trimEnd();
  const needsEllipsis = isLong && !isExpanded;

  const descriptionText = isExpanded
    ? descriptionRaw
    : `${shortText}${needsEllipsis ? "..." : ""}`;

  let content = null;

  if (status === "loading") {
    content = <div className={styles.skeletonCard} />;
  } else if (status === "failed") {
    content = (
      <div className={styles.errorBox}>
        <p className={styles.errorText}>{error}</p>
        <button
          className={styles.retryBtn}
          type="button"
          onClick={() => dispatch(productsGet())}
        >
          Retry
        </button>
      </div>
    );
  } else if (status === "succeeded" && (!safeProductId || !product)) {
    content = (
      <div>
        <p>Product not found</p>
        <Link className={styles.allBtn} to="/products">
          All products
        </Link>
      </div>
    );
  } else if (status === "succeeded" && product) {
    content = (
      <section className={styles.product}>
        <div className={styles.leftCol}>
          <div className={styles.imageWrap}>
            <img
              className={styles.productImg}
              src={`${API_URL}${product.image}`}
              alt={product.title}
            />
          </div>
        </div>

        <div className={styles.rightCol}>
          <h2 className={styles.title}>{productTitle}</h2>

          <div className={styles.priceRow}>
            {hasDiscount ? (
              <span className={styles.priceNew}>${discountPrice}</span>
            ) : null}

            <span className={hasDiscount ? styles.priceOldLine : styles.priceOld}>
              ${price}
            </span>

            {typeof percent === "number" && percent > 0 ? (
              <span className={styles.badge}>-{percent}%</span>
            ) : null}
          </div>

          <div className={styles.purchaseSlot}>
            <div className={styles.stepper} role="group" aria-label="Quantity">
              <button
                className={styles.stepperBtn}
                type="button"
                onClick={onDecrease}
                disabled={!canDecrease}
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span className={styles.stepperValue} aria-label="Quantity value">
                {displayQty}
              </span>

              <button
                className={styles.stepperBtn}
                type="button"
                onClick={onIncrease}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              className={styles.addToCartBtn}
              type="button"
              onClick={onAdd}
              disabled={!product}
            >
              Add to cart
            </button>
          </div>

          <div className={styles.description}>
            <h3 className={styles.descTitle}>Description</h3>
            <p className={styles.descText}>{descriptionText}</p>

            {shouldShowToggle ? (
              <button
                className={styles.readMoreBtn}
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className={styles.page}>
      <BreadCrumbs items={crumbs} />
      <div>{content}</div>
    </div>
  );
}
