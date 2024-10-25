//react-hook-form
import { useForm } from "react-hook-form";

//tanstack
import { useQueryClient } from "@tanstack/react-query";

//services
import { useEditProduct } from "src/services/mutations";

//utils
import { errorToast, successToast } from "utils/toast";

//styles
import styles from "./AddProduct.module.css";

function EditProduct({ setEditModal, id, setId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate } = useEditProduct();

  const onSubmit = (data) => {
    console.log(data);
    mutate(
      { id, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("useFetchProductsData");
          setEditModal(false);
          successToast("محصول مورد نظر با موفقیت ویرایش شد");
        },
        onError: (error) => {
          if (error.status === 401)
            errorToast("برای ویرایش محصولات وارد حساب کاربری خود شوید");
          if (error.status === 404) errorToast("محصول مورد نظر موجود نیست");
        },
      }
    );

    setId("");
  };

  return (
    <div className={styles.addProduct}>
      <div className={styles.form}>
        <h3>ویرایش اطلاعات</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <label htmlFor="name">نام کالا</label>
            <input
              placeholder="نام کالا"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && errors.name.type === "required" && (
              <span>لطفا نام کالا را وارد کنید</span>
            )}
          </div>

          <div className={styles.inputs}>
            <label htmlFor="price">قیمت</label>
            <input
              placeholder="قیمت"
              type="number"
              id="price"
              {...register("price", { required: true })}
            />
            {errors.price && errors.price.type === "required" && (
              <span>لطفا قیمت را وارد کنید</span>
            )}
          </div>

          <div className={styles.inputs}>
            <label htmlFor="quantity">تعداد موجودی</label>
            <input
              placeholder="تعداد"
              type="number"
              id="quantity"
              {...register("quantity", { required: true })}
            />
            {errors.quantity && errors.quantity.type === "required" && (
              <span>لطفا تعداد موجودی را وارد کنید</span>
            )}
          </div>

          <div className={styles.buttons}>
            <button type="submit">ثبت اطلاعات جدید</button>
            <button type="button" onClick={() => setEditModal(false)}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
