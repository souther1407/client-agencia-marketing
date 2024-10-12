import React from "react";
import styles from "./mark.module.css";
const Mark = ({ children, color = "dark" }) => {
  return <span className={`${styles.mark} ${styles[color]}`}>{children}</span>;
};

export default Mark;
