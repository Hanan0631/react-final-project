//styles
import styles from "./DeleteProduct.module.css";

function DeleteProduct({ setDeleteModal }) {
  return (
    <div className={styles.delete}>
      <div className={styles.box}>
        <img src={deleteImg} />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.buttons}>
          <button>حذف</button>
          <button onClick={() => setDeleteModal(false)}>لغو</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
