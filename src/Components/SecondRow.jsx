import React from "react";
import styles from "./top.module.css";

export default function SecondRow({ input, setInput }) {
  let handleMultiply = () => {
    setInput(input + "x");
  };
  return (
    <>
      <div className={styles.top}>
        <button
          onClick={() => {
            setInput(input + 7);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setInput(input + 8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setInput(input + 9);
          }}
        >
          9
        </button>
        <button className={styles.x} onClick={handleMultiply}>
          x
        </button>
      </div>
    </>
  );
}
