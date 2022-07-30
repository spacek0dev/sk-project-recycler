import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
const SkInput = ({value,title,onChangeText,disabled,type}) => {
  const [onFocus, setOnFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <div
      className={
        !onFocus
          ? `${styles.skInputContainer}`
          : `${styles.skInputFocused}`
      }
    >
      <div
        style={{ fontWeight: onFocus ? "400" : "300" }}
        className={`${styles.skInputTitle}`}
      >
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
