import React from "react";
import styles from "./text.module.css";

const getSize = (size) => {
  switch (size) {
    case "md":
      return "1rem";
    case "sm":
      return "0.8889rem";
    case "ty":
      return "0.7778rem";
    default:
      return "1rem";
  }
};

const Text = ({
  type = "text",
  bold,
  color = "standard",
  children,
  size = "md",
  textAlign = "start",
  ...otherProps
}) => {
  if (type === "title") {
    return (
      <h1
        className={`${styles.title} ${styles[color]} ${bold && styles.bold}`}
        style={{ textAlign }}
        {...otherProps}
      >
        {children}
      </h1>
    );
  } else if (type === "subtitle") {
    return (
      <h3
        className={`${styles.subtitle} ${styles[color]} ${bold && styles.bold}`}
        style={{ textAlign }}
        {...otherProps}
      >
        {children}
      </h3>
    );
  }
  return (
    <p
      className={`${styles.text} ${styles[color]} ${bold && styles.bold}`}
      style={{ textAlign, fontSize: getSize(size) ?? "" }}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Text;
