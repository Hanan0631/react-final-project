//react-loader-spinner
import Loader from "./Loader";

//components
import TableData from "./TableData";

//utils
import { errorToast } from "utils/toast";

function ProductsList({ data, isPending, isError, error }) {
  return (
    <div>
      {isPending ? (
        <Loader />
      ) : isError ? (
        errorToast("مشکلی پیش آمده لطفا دوباره تلاش کنید")
      ) : (
        <TableData data={data} />
      )}
    </div>
  );
}

export default ProductsList;
