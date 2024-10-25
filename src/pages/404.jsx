//react-router-dom
import { Link } from "react-router-dom";

//assets
import pageNotFound from "assets/images/pageNotFound.jpg";

//styles
import styles from "./404.module.css";

function PageNotFound() {
  return (
    <div className={styles.notFound}>
      <img src={pageNotFound} />
      <div>
        <p>صفحه مورد نظر پیدا نشد</p>
        <Link to="/">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
