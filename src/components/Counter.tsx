import { useState } from "react";

import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h3>{count}</h3>
      <button className={styles.button} onClick={increment}>
        прибавить
      </button>
    </>
  );
};

export default Counter;
