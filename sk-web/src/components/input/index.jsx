import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
const SkInput = ({ value, title, onChangeText, disabled, type, margin }) => {
  const [onFocus, setOnFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <div
      style={{ margin: margin ?? "0px" }}
      className={
        !onFocus ? `${styles.skInputContainer}` : `${styles.skInputFocused}`
      }
    >
      <div style={{ fontWeight: "300" }} className={`${styles.skInputTitle}`}>
        {title ?? "Input"}
      </div>
      <input
        autoComplete="new-password"
        placeholder={title ?? "Text here .."}
        onChange={(text) => {
          onChangeText(text.target.value);
        }}
        value={inputValue}
        onBlur={() => {
          setOnFocus(false);
        }}
        disabled={disabled ?? false}
        onFocus={() => {
          setOnFocus(true);
        }}
        type={type ?? "search"}
      />
    </div>
  );
};

export default SkInput;
