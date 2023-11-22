import React, { useState } from "react";
import TopRow from "./TopRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import LastRow from "./lastRow";
import styles from "./input.module.css";

export default function Input() {
  let [input, setInput] = useState("");
  let handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className={styles.mains}>
        <div className={styles.main}>
          <div className={styles.sub}>
            <div className={styles.result}>
              <h1>0</h1>
            </div>
            <input
              placeholder="0"
              className={styles.input}
              onChange={handleChange}
              type="text"
              value={input}
            />
            <TopRow input={input} setInput={setInput} />
            <SecondRow input={input} setInput={setInput} />
            <ThirdRow input={input} setInput={setInput} />
            <FourthRow input={input} setInput={setInput} />
            <LastRow input={input} setInput={setInput} />
          </div>
        </div>
      </div>
    </>
  );
}
