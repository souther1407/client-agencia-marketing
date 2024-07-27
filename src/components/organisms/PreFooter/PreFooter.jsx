import React from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import PreFooterImg from "@assets/preFooterImg.svg";
const PreFooter = () => {
  return (
    <section className={styles.preFooter}>
      <div className={styles.desc}>
        <Text type="smalltitle" color="light">
          Impulsemos tu Clínica Dental Juntos
        </Text>
        <IconTextButton>Solicita una reunión</IconTextButton>
      </div>
      <img className={styles.preFooterImg} src={PreFooterImg} />
    </section>
  );
};

export default PreFooter;
