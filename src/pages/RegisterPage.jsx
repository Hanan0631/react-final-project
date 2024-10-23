//react-hook-form
import { useForm } from "react-hook-form";

//react-router-dom
import { useNavigate } from "react-router-dom";

//assets
import logo from "assets/images/logo.svg";

//services
import { useRegister } from "services/mutations";

//utils
import { errorToast, successToast } from "utils/toast";

//styles
import styles from "./form.module.css";

function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const username = watch("username");

  const { mutate } = useRegister();

  const onSubmit = () => {
    mutate(
      { username, password },
      {
        onSuccess: () => {
          successToast("ثبت نام شما با موفقیت انجام شد");
          navigate("/login");
        },
        onError: (error) => {
          console.log(error);
          if (error.status === 400) errorToast("شما قبلا ثبت نام کرده اید");
        },
      }
    );
  };

  return (
    <div className={styles.formContainer}>
      <h1>بوت کمپ بوتواستارت</h1>
      <div className={styles.form}>
        <img src={logo} />
        <h3>فرم ثبت نام</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              placeholder="نام کاربری"
              {...register("username", {
                required: "نام کاربری خود را وارد کنید.",
              })}
            />
            <p>{errors.username?.message}</p>
          </div>

          <div>
            <input
              placeholder="رمز عبور"
              type="password"
              {...register("password", {
                required: "رمز عبور خود را وارد کنید.",
                minLength: {
                  value: 6,
                  message: "رمز عبور نباید کمتر از شش کاراکتر باشد.",
                },
              })}
            />
            <p>{errors.password?.message}</p>
          </div>

          <div>
            <input
              placeholder="تکرار رمز عبور"
              type="password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "رمز عبور به درستی وارد نشده است.",
              })}
            />
            <p>{errors.confirmPassword?.message}</p>
          </div>

          <button type="submit">ثبت نام</button>
        </form>
        <span onClick={() => navigate("/login")}>حساب کاربری دارید؟</span>
      </div>
    </div>
  );
}

export default RegisterPage;
