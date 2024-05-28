import React from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import { useNavigate } from "react-router-dom";
import { DOWNLOAD_EBOOK } from "../../../constants/routes";
const EBookCard = ({ img, title, desc }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(DOWNLOAD_EBOOK);
  };
  return (
    <div className={styles.ebook} onClick={handleNavigate}>
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
