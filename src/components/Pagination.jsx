//tanstack
import { useQueryClient } from "@tanstack/react-query";

//utils
import { e2p } from "utils/replaceNumber";

//styles
import styles from "./Pagination.module.css";

function Pagination({ page, setPage, data }) {
  const queryClient = useQueryClient();

  const nextHandler = async () => {
    if (data?.data.totalPages > page) {
      setPage((prevPage) => prevPage + 1);
      await queryClient.invalidateQueries(["products-list", page]);
    }
  };

  const previousHandler = async () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      await queryClient.invalidateQueries(["products-list", page]);
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
