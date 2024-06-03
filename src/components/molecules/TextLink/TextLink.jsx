import React from "react";
import Link from "../../atoms/Link/Link";
import Text from "../../atoms/Text/Text";
import styles from "./styles.module.css";
const TextLink = ({ to, extern, children }) => {
  return (
    <Link to={to} extern={extern}>
      <Text style={{ display: "inline" }} color="link">
        {children}
      </Text>
    </Link>
  );
};

export default TextLink;
