import styles from "./styles.module.css";
import { connect } from "react-redux";
import { addToCart } from "../../../actions";
import addIcon from "../../../assets/icons/btnaddToCart.svg"

function ProductCart({product,addToCart}){

const handleAddToCart = () => {
  addToCart(product);
}

  return(
    <article className={styles.productCard}>
<img src={product.image} alt={product.name} className={styles.productImage}/>
<h3 className={styles.productName}>{product.name}</h3>
<div className={styles.bottomRow}>
<div className={styles.productPrice}>{product.price} €</div>
 <button
          type="button"
          className={styles.addButton}
          onClick={handleAddToCart}
        >
          <img
            src={addIcon}
            alt="Add to cart"
            className={styles.addButtonIcon}
          />
        </button>
</div>
</article>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product))
})

export default connect(null,mapDispatchToProps)(ProductCart)