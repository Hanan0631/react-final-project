//assets
import deleteButton from "assets/images/delete.svg";
import editButton from "assets/images/edit.svg";

//utils
import { e2p } from "utils/replaceNumber";
import { sp } from "utils/replaceNumber";

//styles
import styles from "./TableData.module.css";

function TableData({ data, checkBox, setSelectedIds, setDeleteModal, setId }) {
  const checkHandler = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const deleteByIdHandler = (id) => {
    setId(id);
    setDeleteModal(true);
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
