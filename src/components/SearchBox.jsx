//assets
import searchButton from "assets/images/search.svg";
import adminPhoto from "assets/images/admin-photo.svg";

//styles
import styles from "./SearchBox.module.css";

function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <div className={styles.search}>
        <img src={searchButton} />
        <span>جستجو کالا</span>
      </div>
      <div className={styles.admin}>
        <img src={adminPhoto} />
        <div>
          <p>میلاد عظمی</p>
          <span>مدیر</span>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
