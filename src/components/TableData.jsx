//tanstack
import { useQueryClient } from "@tanstack/react-query";

//assets
import deleteButton from "assets/images/delete.svg";
import editButton from "assets/images/edit.svg";

//services
import { useDeleteProductById } from "services/mutations";

//utils
import { e2p } from "utils/replaceNumber";
import { sp } from "utils/replaceNumber";
import { errorToast, successToast } from "utils/toast";

//styles
import styles from "./TableData.module.css";

function TableData({ data, checkBox, setSelectedIds, setDeleteModal }) {
  const checkHandler = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const { mutate } = useDeleteProductById();
  const queryClient = useQueryClient();

  const deleteByIdHandler = (id) => {
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries("useFetchProductsData");
        setDeleteModal(false);
        successToast("محصول مورد نظر با موفقیت حذف شد");
      },
      onError: (error) => {
        if (error.status === 401)
          errorToast("برای حذف محصول وارد حساب کاربری خود شوید");
      },
    });
  };

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <span>نام کالا</span>
        <span>موجودی</span>
        <span>قیمت</span>
        <span>شناسه کالا</span>
        <span></span>
      </div>
      <div className={styles.body}>
        {data?.data.data.map((item) => (
          <div className={styles.row} key={item.id}>
            <span>{item.name}</span>
            <span>{e2p(item.quantity)}</span>
            <span>{sp(item.price)} تومان</span>
            <span>{item.id}</span>

            {checkBox ? (
              <input type="checkbox" onChange={() => checkHandler(item.id)} />
            ) : (
              <span className={styles.images}>
                <img src={editButton} />
                <img
                  src={deleteButton}
                  onClick={() => deleteByIdHandler(item.id)}
                />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableData;
