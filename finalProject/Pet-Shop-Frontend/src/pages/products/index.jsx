import BreadCrumbs from "../../components/breadCrumbs"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { useEffect,useMemo } from "react"
import { productsGet } from "../../redux/slices/productsSlice"
import { API_URL } from "../../api/api"
import styles from "./styles.module.css"
import { getDiscountPercent } from "../../components/home/SaleSection"
import FiltersPanel from "../../filters/filtersPanel"
import { applyProductFilters } from "../../filters/engine"
import { parseFiltersFromSearch, buildSearchFromFilters, applySwapToRange,clearSearch } from "../../filters/query"

export const BREADCRUMBS = {
    products: [
    { label: "Main page", to: "/" },
    { label: "All products" }
  ],  
}

export default function Products(){
const dispatch = useDispatch()
const {items, status, error} = useSelector((state) => state.products)
const location = useLocation()
const navigate = useNavigate()

const filters = useMemo(() => parseFiltersFromSearch(location.search),[location.search])

useEffect(()=> {
  if(status === "idle"){
    dispatch(productsGet())
  }
},[status,dispatch])

const visibleProducts = useMemo(
  () => applyProductFilters(items, filters),
  [items, filters]
);


function setFilters(next,{ replace = false } = {}){
  const search = buildSearchFromFilters(next);
  navigate({ pathname: "/products", search }, { replace });
}

 function applyPriceRange({ min, max }) {
   
    const nextRaw = {
      ...filters,
      min: typeof min === "number" && min >= 0 ? min : undefined,
      max: typeof max === "number" && max >= 0 ? max : undefined,
    };
    const next = applySwapToRange(nextRaw);
    setFilters(next, { replace: true });
  }

  function resetFilters() {
    navigate({ pathname: "/products", search: clearSearch() }, { replace: false });
  }



let content = null


if(status === "loading"){
  content = (
    <>
    <div className={styles.skeletonCard}/>
    <div className={styles.skeletonCard}/>
    <div className={styles.skeletonCard}/>
    <div className={styles.skeletonCard}/>
    </>
  )
} else if(status === "failed"){
  content = (
    <div className={styles.errorBox}>
      <p className={styles.errorText}>{error}</p>
      <button className={styles.retryBtn} type="button" onClick={() => dispatch(productsGet())}>Retry</button>
    </div>
  )
} else if (status === "succeeded"){
   if (items.length === 0) {
      content = <p className={styles.emptyText}>No products yet.</p>;
    } else if (visibleProducts.length === 0) {
      content = (
        <div className={styles.emptyBox}>
          <p className={styles.emptyText}>Nothing found. Try changing filters.</p>
        </div>
      );
    } else {
    content = visibleProducts.map((item) => {
      const percent = getDiscountPercent(item);

      return (
    <Link className={styles.card} key={item.id} to={`/products/${item.id}`}>
      <div className={styles.imageWrap}>
      <img className={styles.cardImg} src={`${API_URL}${item.image}`} alt={item.title} />
      {percent !== null ? <span className={styles.badge}>-{percent}%</span> : null}
      </div>
      <span className={styles.cardTitle}>{item.title}</span>
      <div className={styles.priceRow}>
      {item.discont_price ? <span className={styles.priceNew}>${item.discont_price}</span> : null}
      <span className={item.discont_price ? styles.priceOldLine: styles.priceOld} >${item.price}</span>
      </div>
    </Link>
    );
  
  })
    }
}

  return (
    <section className={styles.section}>
      <div>
        <BreadCrumbs items={BREADCRUMBS.products}/>
        <div className={styles.sectionHead}>
          <h2 className={styles.title}>All products</h2>
      </div >
      <div>
        <FiltersPanel value={filters} onChange={setFilters} onApplyPriceRange={applyPriceRange} showDiscount={true} discountLocked={false}/>
        </div>
    <div className={styles.grid}>
      {content}
    </div>
    </div>
    </section>
  ) 
  
}