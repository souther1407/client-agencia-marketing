import React from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
const EBookCard = ({ img, title, desc }) => {
  return (
    <div className={styles.ebook}>
      <img className={styles.img} src={img} alt={title} />
      <div className={styles.descBook}>
        <Text bold type="subtitle" textAlign="center">
          {title}
        </Text>
        <Text size={"ty"} textAlign="center">
          {desc}
        </Text>
        <Text size={"ty"}>Ebook</Text>
      </div>
    </div>
  );
};

export default EBookCard;
