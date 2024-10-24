//react-loader-spinner
import Loader from "./Loader";

//components
import TableData from "./TableData";

//utils
import { errorToast } from "utils/toast";

function ProductsList({
  data,
  isPending,
  isError,
  checkBox,
  setSelectedIds,
  setDeleteModal,
  setId,
}) {
  return (
    <div>
      {isPending ? (
        <Loader />
      ) : isError ? (
        errorToast("مشکلی پیش آمده لطفا دوباره تلاش کنید")
      ) : (
        <TableData
          data={data}
          checkBox={checkBox}
          setSelectedIds={setSelectedIds}
          setDeleteModal={setDeleteModal}
          setId={setId}
        />
      )}
    </div>
  );
}

export default ProductsList;
