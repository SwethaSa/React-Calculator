import React, { useState } from "react";
import styles from "./top.module.css";

export default function TopRow({ input, setInput }) {
  let handleClear = () => {
    setInput("");
  };

  let handleBackSpace = () => {
    let value = input.slice(0, -1);
    setInput(value);
  };

  return (
    <>
      <div className={styles.top}>
        <button className={styles.allClear} onClick={handleClear}>
          AC
        </button>
        <button className={styles.backSpace} onClick={handleBackSpace}>
          ⌫
        </button>
        <button
          className={styles.percent}
          onClick={() => {
            setInput(input + "%");
          }}
        >
          %
        </button>
        <button
          className={styles.divide}
          onClick={() => {
            setInput(input + "÷");
          }}
        >
          ÷
        </button>
      </div>
    </>
  );
}
