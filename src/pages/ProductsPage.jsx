//react
import { useState } from "react";

///assets
import setting from "assets/images/setting.svg";

//components
import ProductsList from "components/ProductsList";
import SearchBox from "components/SearchBox";
import AddProduct from "components/AddProduct";
import DeleteProducts from "components/DeleteProducts";
import DeleteProduct from "components/DeleteProduct";

//services
import { useFetchProductsData } from "services/queries";

//styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const [page, setPage] = useState(0);
  const [checkBox, setCheckBox] = useState(false);
  const [id, setId] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [multipleDeleteModal, setMultipleDeleteModal] = useState(false);
  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useFetchProductsData(page);

  const deleteMultipleHandler = () => {
    setMultipleDeleteModal(true);
  };

  return (
    <div className={styles.productsPage}>
      <SearchBox />
      <div className={styles.management}>
        <div>
          <img src={setting} />
          <p>مدیریت کالا</p>
        </div>
        {checkBox ? (
          <div>
            <button onClick={deleteMultipleHandler}>حذف محصولات</button>
            <button onClick={() => setCheckBox(false)}>انصراف</button>
          </div>
        ) : (
          <div>
            <button onClick={() => setAddModal(true)}>افزودن محصول</button>
            <button onClick={() => setCheckBox(true)}>انتخاب محصول</button>
          </div>
        )}
      </div>
      <ProductsList
        data={data}
        isPending={isPending}
        error={error}
        isError={isError}
        checkBox={checkBox}
        setSelectedIds={setSelectedIds}
        setDeleteModal={setDeleteModal}
        setId={setId}
      />
      {addModal && <AddProduct setAddModal={setAddModal} />}
      {deleteModal && (
        <DeleteProduct setDeleteModal={setDeleteModal} id={id} setId={setId} />
      )}
      {multipleDeleteModal && (
        <DeleteProducts
          setMultipleDeleteModal={setMultipleDeleteModal}
          selectedIds={selectedIds}
        />
      )}
    </div>
  );
}

export default ProductsPage;
