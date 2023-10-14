import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGreeting } from "./redux/GreetingSlice";
import styles from "./css/Greeting.module.css";

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.data);
  const status = useSelector((state) => state.greeting.status);
  const error = useSelector((state) => state.greeting.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className={styles["greeting-container"]}>
      <h1 className={styles["greeting-title"]}>Random Greeting</h1>
      {status === "loading" && (
        <p className={styles["loading-message"]}>Loading...</p>
      )}
      {status === "succeeded" && (
        <p className={styles["greeting-text"]}>{greeting}</p>
      )}
      {status === "failed" && (
        <p className={styles["error-message"]}>Error: {error}</p>
      )}
    </div>
  );
};

export default Greeting;
