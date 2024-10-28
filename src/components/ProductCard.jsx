//assets
import cart from "assets/images/cart.svg";

//utils
import { sp } from "utils/replaceNumber";

//styles
import styles from "./ProductCard.module.css";


function ProductCard({ item }) {
  return (
    <div className={styles.cardContainer}>
      <h3>{item.name}</h3>
      <p>{sp(item.price)} تومان</p>
      <div>
        <button>
          <img src={cart} />
        </button>
        {/* <button>
          <img src={plus} />
        </button>
        <button>
          <img src={minus} />
        </button>
        <button>
          <img src={deleteBtn} />
        </button> */}
      </div>
    </div>
  );
}

export default ProductCard;
