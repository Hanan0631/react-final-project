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
import EditProduct from "components/EditProduct";
import Pagination from "components/Pagination";

//services
import { useFetchProductsData } from "src/services/queries";

//styles
import styles from "./AdminPage.module.css";
import { Link } from "react-router-dom";

function AdminPage({ page, setPage }) {
  const [checkBox, setCheckBox] = useState(false);
  const [id, setId] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [multipleDeleteModal, setMultipleDeleteModal] = useState(false);
  const { isPending, isError, error, data } = useFetchProductsData(page);

  const deleteMultipleHandler = () => {
    setMultipleDeleteModal(true);
  };

  return (
    <div className={styles.adminContainer}>
      <SearchBox />
      <div className={styles.management}>
        <div>
          <img src={setting} />
          <p>مدیریت کالا</p>
        </div>
        {checkBox ? (
          <div>
            <Link to="/">فروشگاه</Link>
            <button onClick={deleteMultipleHandler}>حذف محصولات</button>
            <button onClick={() => setCheckBox(false)}>انصراف</button>
          </div>
        ) : (
          <div>
            <Link to="/">فروشگاه</Link>
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
        setEditModal={setEditModal}
      />
      {addModal && <AddProduct setAddModal={setAddModal} />}
      {deleteModal && (
        <DeleteProduct setDeleteModal={setDeleteModal} id={id} setId={setId} />
      )}
      {editModal && (
        <EditProduct setEditModal={setEditModal} id={id} setId={setId} />
      )}
      {multipleDeleteModal && (
        <DeleteProducts
          setMultipleDeleteModal={setMultipleDeleteModal}
          selectedIds={selectedIds}
          setCheckBox={setCheckBox}
        />
      )}
      <Pagination page={page} setPage={setPage} data={data} />
    </div>
  );
}

export default AdminPage;
