import React from "react";
import styles from "./top.module.css";

export default function LastRow({ input, setInput }) {
  return (
    <>
      <div className={styles.top}>
        <button
          onClick={() => {
            setInput(input + 0);
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setInput(input + "00");
          }}
        >
          00
        </button>
        <button
          className={styles.icon}
          onClick={() => {
            setInput(input + ".");
          }}
        >
          .
        </button>
        <button
          className={styles.equal}
          onClick={(e) => {
            setInput(eval(input));
          }}
        >
          =
        </button>
      </div>
    </>
  );
}
