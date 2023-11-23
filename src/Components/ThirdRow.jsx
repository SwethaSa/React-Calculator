import React from "react";
import styles from "./top.module.css";

export default function ThirdRow({ audio1, audio2, input, setInput }) {
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
            setInput(input + 4);
            audio2.play();
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setInput(input + 5);
            audio2.play();
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setInput(input + 6);
            audio2.play();
          }}
        >
          6
        </button>
        <button
          className={styles.minus}
          onClick={() => {
            handleOperator("-");
          }}
        >
          -
        </button>
      </div>
    </>
  );
}
