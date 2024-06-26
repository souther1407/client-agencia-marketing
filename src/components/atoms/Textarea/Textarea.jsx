import React from "react";
import styles from "./textarea.module.css";
import Text from "../Text/Text";
const Textarea = ({
  id,
  onChange,
  variant = "primary",
  label = "",
  size = "100%",
  errorValue,
  ...otherProps
}) => {
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };
  return (
    <div
      className={`${styles[variant]} ${styles.container} ${
        errorValue ? styles.error : ""
      }`}
    >
      {label && <Text size={"0.77rem"}>{label}</Text>}
      <textarea
        style={{ width: size }}
        id={id}
        className={styles.input}
        onChange={handleChange}
        {...otherProps}
      ></textarea>
    </div>
  );
};

export default Textarea;
