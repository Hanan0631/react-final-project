//tanstack
import { useQuery } from "@tanstack/react-query";

//configs
import api from "configs/api";

const useProductsData = () => {
  const queryKey = ["products-list"];
  const queryFn = () => api.get("products");
  return useQuery({ queryKey, queryFn });
};

export { useProductsData };
