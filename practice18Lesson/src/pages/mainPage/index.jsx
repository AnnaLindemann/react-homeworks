import { useEffect } from "react";
import { connect } from "react-redux";
import {setProducts} from "../../actions"
import Banner from "../../components/banner";
import axios from "axios";
import styles from "./styles.module.css";
import ProductList from "../../components/products/productList";

function MainPage({products,getProducts}){
  useEffect(() => {
    getProducts();
  },[getProducts])

  return (
    <>
    <Banner/>

    <section className={styles.productSection}>
      <h2 className={styles.productTitle}>Products</h2>
      <ProductList products={products}/>
    </section>
   </>
  )
}
const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => {
    axios
      .get("/data.json")
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        console.error("Error loading products:", error);
      });
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)