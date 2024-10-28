//react
import { useEffect, useState } from "react";

//components
import StoreHeader from "components/StoreHeader";
import ProductCard from "components/ProductCard";
import Pagination from "components/Pagination";

//services
import { useFetchProductsData } from "services/queries";

//styles
import styles from "./Store.module.css";

function Store({ page, setPage }) {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState([]);

  const { data } = useFetchProductsData(page, search);

  // const searchHandler = (event) => {
  //   setSearch(event.target.value);
  //   const searchedProducts = data?.data.data.filter((item) =>
  //     item.name.includes(search)
  // );
  // setSearched(searchedProducts);
  // console.log(searchedProducts);
  // };

  useEffect(() => {
    const searchedProducts = data?.data.data.filter((item) =>
      item.name.includes(search)
    );
    setSearched(searchedProducts);
  }, [search]);

  return (
    <div className={styles.storeContainer}>
      <StoreHeader
        search={search}
        setSearch={setSearch}
      />
      <div className={styles.cardContainer}>
        {search
          ? searched?.map((item) => <ProductCard key={item.id} item={item} />)
          : data?.data.data.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
      </div>
      <Pagination page={page} setPage={setPage} data={data} />
    </div>
  );
}

export default Store;
