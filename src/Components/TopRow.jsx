import React, { useState, useEffect } from "react";
import styles from "./top.module.css";

export default function TopRow({ setResult, input, setInput, audio1 }) {
  let handleClear = () => {
    audio1.play();
    setInput("");
    setResult("0");
  };

  let handleBackSpace = () => {
    audio1.play();
    let value = input.slice(0, -1);
    setInput(value);
    if (input.length === 1) {
      setResult("0");
    }
  };

  let handleOperator = (value) => {
    audio1.play();
    let lastChar = input.slice(-1);
    if (!isNaN(lastChar) || lastChar === ".") {
      setInput(input + value);
    } else if (lastChar === value) {
      alert("Please enter only one Operator after and before");
    }
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
            handleOperator("%");
          }}
        >
          %
        </button>
        <button
          className={styles.divide}
          onClick={() => {
            handleOperator("÷");
          }}
        >
          ÷
        </button>
      </div>
    </>
  );
}
