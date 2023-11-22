import React from "react";
import styles from "./top.module.css";

export default function FourthRow({ input, setInput }) {
  let handleAdd = () => {
    setInput(input + "+");
  };
  return (
    <>
      <div className={styles.top}>
        <button
          onClick={() => {
            setInput(input + 1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setInput(input + 2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setInput(input + 3);
          }}
        >
          3
        </button>
        <button className={styles.plus} onClick={handleAdd}>
          +
        </button>
      </div>
    </>
  );
}
