import React from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import PreFooterImg from "@assets/preFooterImg.svg";
import { useNavigate } from "react-router-dom";
import { CONTACT_FORM } from "../../../constants/routes";
const PreFooter = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.preFooter}>
      <div className={styles.desc}>
        <Text type="smalltitle" color="light" bold="bold">
          Impulsemos tu Clínica Dental Juntos
        </Text>
        <IconTextButton onClick={() => navigate(CONTACT_FORM)}>
          Solicita una reunión
        </IconTextButton>
      </div>
      <img className={styles.preFooterImg} src={PreFooterImg} />
    </section>
  );
};

export default PreFooter;
