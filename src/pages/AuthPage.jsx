//react
import { useState } from "react";

//templates
import Login from "components/templates/Login";
import Register from "components/templates/Register";

//styles
import styles from "./AuthPage.module.css";

function AuthPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div className={styles.authPage}>
      <h1>بوت کمپ بوتواستارت</h1>
      {isRegistered ? (
        <Login setIsRegistered={setIsRegistered} />
      ) : (
        <Register setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
}

export default AuthPage;
