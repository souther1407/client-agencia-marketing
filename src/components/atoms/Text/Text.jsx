import React from "react";
import styles from "./text.module.css";

const getSize = (size) => {
  switch (size) {
    case "lg":
      return "1.2rem";
    case "md":
      return "1rem";
    case "sm":
      return "0.83rem";
    case "ty":
      return "0.7778rem";
    default:
      return "1rem";
  }
};

const Text = ({
  type = "text",
  bold = "normal",
  color = "standard",
  children,
  size = "md",
  textAlign = "start",
  ...otherProps
}) => {
  if (
    type === "title" ||
    type == "bigtitle" ||
    type == "smalltitle" ||
    type == "smallsubtitle"
  ) {
    return (
      <h1
        className={`${styles[type]} ${styles[color]} ${styles[bold]}`}
        style={{ textAlign }}
        {...otherProps}
      >
        {children}
      </h1>
    );
  } else if (type === "subtitle") {
    return (
      <h3
        className={`${styles.subtitle} ${styles[color]} ${styles[bold]}`}
        style={{ textAlign }}
        {...otherProps}
      >
        {children}
      </h3>
    );
  }
  return (
    <p
      className={`${styles.text} ${styles[color]} ${styles[bold]}`}
      style={{ textAlign, fontSize: getSize(size) ?? "" }}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default Text;
