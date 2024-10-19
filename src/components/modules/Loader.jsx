//react-loader-spinner
import { MagnifyingGlass } from "react-loader-spinner";

//styles
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        margin="50%"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
}

export default Loader;
