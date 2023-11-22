import React from "react";
import styles from "./top.module.css";

export default function ThirdRow({ input, setInput }) {
  let handleSubtract = () => {
    setInput(input + "-");
  };
  return (
    <>
      <div className={styles.top}>
        <button
          onClick={() => {
            setInput(input + 4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setInput(input + 5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setInput(input + 6);
          }}
        >
          6
        </button>
        <button className={styles.minus} onClick={handleSubtract}>
          -
        </button>
      </div>
    </>
  );
}
