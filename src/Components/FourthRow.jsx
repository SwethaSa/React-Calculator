import React from "react";
import styles from "./top.module.css";

export default function FourthRow({ audio1, audio2, input, setInput }) {
  let handleOperator = (value) => {
    audio1.play();
    let lastChar = input.slice(-1);
    if (!isNaN(lastChar) || lastChar === ".") {
      setInput(input + value);
    } else if (lastChar === value && lastChar != "") {
      alert("Please enter only one Operator after and before");
    }
  };
  return (
    <>
      <div className={styles.top}>
        <button
          onClick={() => {
            setInput(input + 1);
            audio2.play();
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setInput(input + 2);
            audio2.play();
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setInput(input + 3);
            audio2.play();
          }}
        >
          3
        </button>
        <button
          className={styles.plus}
          onClick={() => {
            handleOperator("+");
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
