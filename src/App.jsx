import React, { useState } from "react";
import Input from "./Components/Input";
import "./App.css";
import "./index.css";
import useLocalStorage from "use-local-storage";

export function App() {
  let [isDark, setIsDark] = useLocalStorage("dark");
  let handleLight = () => {
    setIsDark("light");
  };
  let handleDark = () => {
    setIsDark("dark");
  };
  return (
    <>
      <div data-theme={isDark}>
        <div className="mode">
          <div onClick={handleLight}>☀</div>
          <div onClick={handleDark}>☾</div>
        </div>
        <h1 className="calci">Calculator</h1>
        <Input />
      </div>
    </>
  );
}
