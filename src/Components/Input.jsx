import React, { useEffect, useState } from "react";
import TopRow from "./TopRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import LastRow from "./lastRow";
import styles from "./input.module.css";

export default function Input() {
  let [input, setInput] = useState("");
  let [result, setResult] = useState(0);
  let handleChange = (e) => {
    setInput(e.target.value);
  };

  let audio1 = new Audio("src/assets/Music1.mp3");
  let audio2 = new Audio("src/assets/Music2.mp3");
  let evaluateCalculation = () => {
    if (!input) return;
    let regExp = /([*+%÷-])/;
    let parting = input.split(regExp);
    let result = parseFloat(parting[0]);

    if (regExp.test(input[0])) {
      alert("Please enter Numbers First");
      setInput(0);
    }

    for (let i = 1; i < parting.length; i += 2) {
      let operator = parting[i];
      let operand = parseFloat(parting[i + 1]);

      if (operator === "÷") {
        result /= operand;
      } else if (operator === "*") {
        result *= operand;
      } else if (operator === "+") {
        result += operand;
      } else if (operator === "-") {
        result -= operand;
      } else if (operator === "%") {
        result = (result * operand) / 100;
      } else {
        alert(
          "Please Ensure the the entered value is only numbers and these *+%÷- operators only. "
        );
        return;
      }
    }
    setResult(result);
  };

  useEffect(() => {
    evaluateCalculation();
  }, [input]);

  return (
    <>
      <div className={styles.mains}>
        <div className={styles.main}>
          <div className={styles.sub}>
            <div className={styles.result}>
              <h1>{isNaN(result) ? input : result}</h1>
            </div>
            <input
              placeholder="0"
              className={styles.input}
              onChange={handleChange}
              type="text"
              value={input}
            />
            <TopRow
              audio1={audio1}
              audio2={audio2}
              input={input}
              setInput={setInput}
              setResult={setResult}
            />
            <SecondRow
              audio1={audio1}
              audio2={audio2}
              input={input}
              setInput={setInput}
            />
            <ThirdRow
              audio1={audio1}
              audio2={audio2}
              setResult={setResult}
              input={input}
              setInput={setInput}
            />
            <FourthRow
              audio1={audio1}
              audio2={audio2}
              input={input}
              setInput={setInput}
            />
            <LastRow
              audio1={audio1}
              audio2={audio2}
              evaluateCalculation={evaluateCalculation}
              input={input}
              setInput={setInput}
            />
          </div>
        </div>
      </div>
    </>
  );
}
