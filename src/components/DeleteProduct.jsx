//tanstack
import { useQueryClient } from "@tanstack/react-query";

//assets
import deleteImg from "assets/images/deleteImg.svg";

//services
import { useDeleteProductById } from "services/mutations";

//utils
import { errorToast, successToast } from "utils/toast";

//styles
import styles from "./DeleteProduct.module.css";

function DeleteProduct({ setDeleteModal, id, setId }) {
  const { mutate } = useDeleteProductById();
  const queryClient = useQueryClient();

  const deleteHandler = (id) => {
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
    setId("");
  };

  return (
    <div className={styles.delete}>
      <div className={styles.box}>
        <img src={deleteImg} />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.buttons}>
          <button onClick={() => deleteHandler(id)}>حذف</button>
          <button onClick={() => setDeleteModal(false)}>لغو</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
