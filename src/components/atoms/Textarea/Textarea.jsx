import React from "react";
import styles from "./textarea.module.css";
import Text from "../Text/Text";
const Textarea = ({
  id,
  onChange,
  variant = "primary",
  label = "",
  labelColor = "standard",
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
      {label && (
        <Text size={"ty"} bold="font-light" color={labelColor}>
          {label}
        </Text>
      )}
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
