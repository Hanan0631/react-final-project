//assets
import search from "assets/images/search.svg";
import admin from "assets/images/admin.svg";

//styles
import styles from "./SearchBox.module.css";

function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <div className={styles.search}>
        <img src={search} />
        <span>جستجو کالا</span>
      </div>
      <div className={styles.admin}>
        <img src={admin} />
        <div>
          <p>میلاد عظمی</p>
          <span>مدیر</span>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
