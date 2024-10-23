//react
import { useState } from "react";

///assets
import setting from "assets/images/setting.svg";

//components
import ProductsList from "components/ProductsList";
import SearchBox from "components/SearchBox";
import AddProduct from "components/AddProduct";

//services
import { useFetchProductsData } from "services/queries";

//styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const [page, setPage] = useState(0);
  const[addModal, setAddModal] = useState(false)

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useFetchProductsData(page);
  console.log(data);

  return (
    <div className={styles.productsPage}>
      <SearchBox />
      <div className={styles.management}>
        <div>
          <img src={setting} />
          <p>مدیریت کالا</p>
        </div>
        <button onClick={() => setAddModal(true)}>افزودن محصول</button>
      </div>
      <ProductsList
        data={data}
        isPending={isPending}
        error={error}
        isError={isError}
      />
      {addModal && <AddProduct setAddModal={setAddModal} />}
    </div>
  );
}

export default ProductsPage;
