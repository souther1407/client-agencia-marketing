import React, { useState } from "react";
import styles from "./styles.module.css";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
const Dropdown = ({ children, title }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div className={styles.header} onClick={() => setShow((prev) => !prev)}>
        <Text bold="font-bold">{title}</Text>
        <Icon color="var(--black)" type={"arrowDown"} size={"2rem"} />
      </div>
      {show && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Dropdown;
