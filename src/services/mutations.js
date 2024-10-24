//tanstack
import { useMutation } from "@tanstack/react-query";

//configs
import api from "configs/api";

const useRegister = () => {
  const mutationFn = (data) => api.post("auth/register", data);

  return useMutation({ mutationFn });
};

const useLogin = () => {
  const mutationFn = (data) => api.post("auth/login", data);

  return useMutation({ mutationFn });
};

const useAddProduct = () => {
  const mutationFn = (data) => api.post("products", data);

  return useMutation({ mutationFn });
};

const useDeleteMultipleProducts = () => {
  const mutationFn = (data) => api.delete("products", data);

  return useMutation({ mutationFn });
};

const useDeleteProductById = () => {
  const mutationFn = (id) => api.delete(`products/${id}`);

  return useMutation({ mutationFn });
};

export {
  useRegister,
  useLogin,
  useAddProduct,
  useDeleteMultipleProducts,
  useDeleteProductById,
};
