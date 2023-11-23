import React from "react";
import styles from "./top.module.css";

export default function LastRow({
  audio1,
  audio2,
  input,
  setInput,
  evaluateCalculation,
}) {
  let handleEqual = () => {
    audio1.play();
    evaluateCalculation();
    setInput("");
  };
  return (
    <>
      <div className={styles.top}>
        <button
          onClick={() => {
            setInput(input + 0);
            audio2.play();
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setInput(input + "00");
            audio2.play();
          }}
        >
          00
        </button>
        <button
          className={styles.icon}
          onClick={() => {
            setInput(input + ".");
            audio2.play();
          }}
        >
          .
        </button>
        <button className={styles.equal} onClick={handleEqual}>
          =
        </button>
      </div>
    </>
  );
}
