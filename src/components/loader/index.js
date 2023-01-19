import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className={styles.cube}>
        <div className={styles.topD} />
        <div>
          <span style={{ "--i": "0" }} />
          <span style={{ "--i": "1" }} />
          <span style={{ "--i": "2" }} />
          <span style={{ "--i": "3" }} />
        </div>
        <div className={styles.cube2}>
          <div>
            <span style={{ "--i": "0" }} />
            <span style={{ "--i": "1" }} />
            <span style={{ "--i": "2" }} />
            <span style={{ "--i": "3" }} />
          </div>
          <div className={styles.cube3}>
            <div className={styles.top3} />
            <div>
              <span style={{ "--i": "0" }} />
              <span style={{ "--i": "1" }} />
              <span style={{ "--i": "2" }} />
              <span style={{ "--i": "3" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
