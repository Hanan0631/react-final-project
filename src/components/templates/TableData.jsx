//assets
import deleteButton from "assets/images/delete.svg";
import editButton from "assets/images/edit.svg";

//utils
import { e2p } from "utils/e2p";

//styles
import styles from "./TableData.module.css";

function TableData({ data }) {
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
        {data.data.map((item) => (
          <div className={styles.row} key={item.id}>
            <span>{item.name}</span>
            <span>{e2p(item.quantity)}</span>
            <span>{e2p(item.price)} میلیون تومان</span>
            <span>{item.id}</span>
            <span className={styles.images}>
              <img src={editButton} />
              <img src={deleteButton} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableData;
