//react-hook-form
import { useForm } from "react-hook-form";

//tanstack
import { useQueryClient } from "@tanstack/react-query";

//services
import { useAddProduct } from "services/mutations";

//utils
import { errorToast, successToast } from "utils/toast";

//styles
import styles from "./AddProduct.module.css";

function AddProduct({ setAddModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate } = useAddProduct();

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries("useFetchProductsData");
        setAddModal(false);
        successToast("محصول جدید با موفقیت اضافه شد");
      },
      onError: (error) => {
        if (error.status === 401)
          errorToast("برای ایجاد محصول جدید وارد حساب کاربری خود شوید");
      },
    });
  };

  return (
    <div className={styles.addProduct}>
      <div className={styles.form}>
        <h3>ایجاد محصول جدید</h3>
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
          <div className={styles.buttons}>
            <button type="submit">ایجاد</button>
            <button onClick={() => setAddModal(false)}>انصراف</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
