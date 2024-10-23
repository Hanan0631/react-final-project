//tanstack
import { keepPreviousData, useQuery } from "@tanstack/react-query";

//configs
import api from "configs/api";

const useFetchProductsData = (page) => {
  console.log(page);
  const queryKey = ["products-list", page];
  const queryFn = () => api.get(`products?page=${page}`);
  return useQuery({ queryKey, queryFn, placeholderData: keepPreviousData });
};

export { useFetchProductsData };
