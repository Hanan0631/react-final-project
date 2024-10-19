///assets
import setting from "assets/images/setting.svg";

//templates
import ProductsList from "components/templates/ProductsList";
import SearchBox from "components/templates/SearchBox";

//utils
import { e2p } from "utils/e2p";

//styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  return (
    <div className={styles.productsPage}>
      <SearchBox />
      <div className={styles.management}>
        <div>
          <img src={setting} />
          <p>مدیریت کالا</p>
        </div>
        <button>افزودن محصول</button>
      </div>
      <ProductsList />
      <div className={styles.pagination}>
        <span>{e2p(1)}</span>
        <span>{e2p(2)}</span>
        <span>{e2p(3)}</span>
      </div>
    </div>
  );
}

export default ProductsPage;
