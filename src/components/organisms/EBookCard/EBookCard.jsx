import React from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import { DOWNLOAD_EBOOK } from "../../../constants/routes";
import Link from "../../atoms/Link/Link";
import TextLink from "../../molecules/TextLink/TextLink";
import Icon from "../../atoms/Icon/Icon";
const EBookCard = ({ img, title, desc }) => {
  return (
    <Link to={DOWNLOAD_EBOOK} target="_blank">
      <div className={styles.ebook}>
        <img className={styles.img} src={img} alt={title} />

        <div className={styles.descBook}>
          <Text bold type="smallsubtitle">
            {title}
          </Text>
          <Text size={"ty"}>{desc}</Text>

          <TextLink
            marked
            textProps={{ size: "ty" }}
            variant="secondary"
            to={DOWNLOAD_EBOOK}
          >
            Descargar la Guia <Icon type={"arrowSquare"} size={"1rem"} />
          </TextLink>
        </div>
      </div>
    </Link>
  );
};

export default EBookCard;
