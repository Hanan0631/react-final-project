//react-toastify
import { toast } from "react-toastify";

//configs
import api from "configs/api.js";

//utils
import { setCookie } from "utils/cookie";

const registerUser = async (username, password) => {
  try {
    const response = await api.post("auth/register", { username, password });
    toast.success("ثبت نام شما با موفقیت انجام شد", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    return { response };
  } catch (error) {
    if (error.status === 400)
      toast.error("شما قبلا ثبت نام کرده اید", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    return { error };
  }
};

const loginUser = async (username, password) => {
  try {
    const response = await api.post("auth/login", { username, password });
    console.log(response.data.token);
    await setCookie(response.data.token);
    toast.success("ورود شما با موفقیت انجام شد", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    return { response };
  } catch (error) {
    if (error.status === 400)
      toast.error("نام کاربری یا رمز عبور اشتباه است", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    return { error };
  }
};

export { registerUser, loginUser };
