//react-loader-spinner
import Loader from "../modules/Loader";

//templates
import TableData from "./TableData";

//hooks
import { useProductsData } from "hooks/queries";

function ProductsList() {
  const { data, isLoading } = useProductsData();
  console.log(data, isLoading);
  return <div>{isLoading ? <Loader /> : <TableData data={data} />}</div>;
}

export default ProductsList;
