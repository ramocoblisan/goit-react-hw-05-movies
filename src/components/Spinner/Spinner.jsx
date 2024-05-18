import React from "react";
import styles from "./Spinner.module.css";
import { Circles } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <div className={styles.spinnerContainer}>
        <Circles
        height="80"
        width="80"
        color="#ffa505"
        ariaLabel="circles-loading"
        visible={true}
        />
      </div>
    </>
  )
}
export default Spinner;