//tanstack
import { useQueryClient } from "@tanstack/react-query";

//assets
import deleteImg from "assets/images/deleteImg.svg";

//services
import { useDeleteMultipleProducts } from "services/mutations";

//utils
import { errorToast, successToast } from "utils/toast";

//styles
import styles from "./DeleteProduct.module.css";

function DeleteProducts({ setMultipleDeleteModal, selectedIds, setCheckBox }) {
  const { mutate } = useDeleteMultipleProducts();
  const queryClient = useQueryClient();

  const deleteHandler = (data) => {
    mutate(
      { data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("useFetchProductsData");
          setMultipleDeleteModal(false);
          setCheckBox(false);
          successToast("محصولات با موفقیت حذف شدند");
        },
        onError: (error) => {
          if (error.status === 401)
            errorToast("برای حذف محصولات وارد حساب کاربری خود شوید");
        },
      }
    );
    console.log(data);
  };

  return (
    <div className={styles.delete}>
      <div className={styles.box}>
        <img src={deleteImg} />
        <p>آیا از حذف این محصولات مطمئنید؟</p>
        <div className={styles.buttons}>
          <button onClick={() => deleteHandler({ ids: selectedIds })}>
            حذف
          </button>
          <button onClick={() => setMultipleDeleteModal(false)}>لغو</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProducts;
