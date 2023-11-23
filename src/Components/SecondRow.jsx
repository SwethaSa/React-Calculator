import React, { useEffect } from "react";
import styles from "./top.module.css";

export default function SecondRow({ audio1, audio2, input, setInput }) {
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
            setInput(input + 7);
            audio2.play();
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setInput(input + 8);
            audio2.play();
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setInput(input + 9);
            audio2.play();
          }}
        >
          9
        </button>
        <button
          className={styles.x}
          onClick={() => {
            handleOperator("*");
          }}
        >
          *
        </button>
      </div>
    </>
  );
}
