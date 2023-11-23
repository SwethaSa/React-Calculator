import React, { useState, useEffect } from "react";
import styles from "./top.module.css";

export default function TopRow({ result, setResult, input, setInput }) {
  console.log(typeof input);
  let handleClear = () => {
    setInput("");
  };

  let handleBackSpace = () => {
    let value = input.slice(0, -1);
    setInput(value);
  };

  useEffect(() => {
    let percentage = () => {
      if (input.includes("%")) {
        let parts = input.split("%");
        let operand1 = parseFloat(parts[0]);
        let operand2 = parseFloat(parts[1]);

        if (
          !isNaN(operand1) &&
          !isNaN(operand2) &&
          operand1 != 0 &&
          operand2 != 0
        ) {
          let percent = (operand1 * operand2) / 100;
          setResult(percent.toString());
        }
      }
    };

    percentage();

    let divide = () => {
      if (input.includes("÷")) {
        let parts = input.split("÷");
        let operand1 = parseFloat(parts[0]);
        let operand2 = parseFloat(parts[1]);

        if (
          !isNaN(operand1) &&
          !isNaN(operand2) &&
          operand1 != 0 &&
          operand2 != 0
        ) {
          let percent = operand1 / operand2;
          setResult(percent.toString());
        }
      }
    };

    divide();
  }, [input, setInput]);

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
