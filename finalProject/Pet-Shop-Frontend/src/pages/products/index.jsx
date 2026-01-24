import BreadCrumbs from "../../components/breadCrumbs"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { useEffect,useMemo } from "react"
import { productsGet } from "../../redux/slices/productsSlice"
import styles from "./styles.module.css"
import FiltersPanel from "../../filters/filtersPanel"
import { applyProductFilters } from "../../filters/engine"
import { parseFiltersFromSearch, buildSearchFromFilters, applySwapToRange} from "../../filters/query"
import CardsGrid from "../../components/ui/cardsGrid"
import ProductCard from "../../components/productCard"


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
    content = visibleProducts.map((item) => <ProductCard key={item.id} item={item} />);
  
 
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
    <CardsGrid>
      {content}
    </CardsGrid>
    </div>
    </section>
  ) 
  
}