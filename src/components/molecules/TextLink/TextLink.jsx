import React from "react";
import Link from "../../atoms/Link/Link";
import Text from "../../atoms/Text/Text";
import styles from "./styles.module.css";
const TextLink = ({ to, extern, textProps, children }) => {
  return (
    <Link to={to} extern={extern}>
      <div className={styles.textLink}>
        <Text {...textProps} style={{ display: "inline" }}>
          {children}
        </Text>
      </div>
    </Link>
  );
};

export default TextLink;
