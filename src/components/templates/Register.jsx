//react-hook-form
import { useForm } from "react-hook-form";

//services
import { registerUser } from "services/auth";

//images
import logo from "assets/images/logo.svg";

//styles
import styles from "./form.module.css";

function Register({ setIsRegistered }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const username = watch("username");

  const onSubmit = async () => {
    await registerUser(username, password);

    await setIsRegistered(true);
  };

  return (
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
      <span onClick={() => setIsRegistered(true)}>حساب کاربری دارید؟</span>
    </div>
  );
}

export default Register;
