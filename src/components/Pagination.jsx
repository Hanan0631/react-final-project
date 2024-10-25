//tanstack
import { useQueryClient } from "@tanstack/react-query";

//utils
import { e2p } from "utils/replaceNumber";

//styles
import styles from "./Pagination.module.css";

function Pagination({ page, setPage, data }) {
  console.log(data?.data.totalPages);
  console.log(page);
  const queryClient = useQueryClient();

  const nextHandler = () => {
    if (data?.data.totalPages > page) {
      setPage((prevPage) => prevPage + 1);
      queryClient.invalidateQueries(["products-list", page]);
    }
  };

  const previousHandler = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      queryClient.invalidateQueries(["products-list", page]);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.previous}
        onClick={previousHandler}
        disabled={page === 1}
      >
        صفحه قبل
      </button>
      <div>
        <span>{e2p(page)}</span>
      </div>
      <button
        className={styles.next}
        onClick={nextHandler}
        disabled={data?.data.totalPages <= page}
      >
        صفحه بعد
      </button>
    </div>
  );
}

export default Pagination;
