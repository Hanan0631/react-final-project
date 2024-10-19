//react-hook-form
import { useForm } from "react-hook-form";

//react-router-dom
import { useNavigate } from "react-router-dom";

//services
import { loginUser } from "services/auth";

//images
import logo from "assets/images/logo.svg";

//styles
import styles from "./form.module.css";

function Login({ setIsRegistered }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const username = watch("username");

  const onSubmit = async () => {
    const { response } = await loginUser(username, password);
    if (response) navigate("/products");
  };
  return (
    <div className={styles.form}>
      <img src={logo} />
      <h3>فرم ورود</h3>
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

        <button type="submit">ورود</button>
      </form>
      <span onClick={() => setIsRegistered(false)}>ایجاد حساب کاربری!</span>
    </div>
  );
}

export default Login;
