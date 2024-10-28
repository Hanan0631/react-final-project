//react-router-dom
import { Link } from "react-router-dom";

//assets
import logo from "assets/images/logo.svg";
import admin from "assets/images/admin.svg";
import login from "assets/images/login.svg";
import cart from "assets/images/cart.svg";
import searchBtn from "assets/images/search.svg";

//utils
import { getCookie } from "utils/cookie";

//styles
import styles from "./StoreHeader.module.css";

function StoreHeader({ search, searchHandler }) {
  const token = getCookie("token");

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} />
        <div>
          <img src={searchBtn} />
          <input
            type="text"
            placeholder="جستجو"
            value={search}
            onChange={searchHandler}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Link className={styles.cart}>
          <img src={cart} />
        </Link>
        {token ? (
          <Link to="/admin">
            <img src={admin} />
          </Link>
        ) : (
          <Link to="/login">
            <img src={login} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default StoreHeader;
