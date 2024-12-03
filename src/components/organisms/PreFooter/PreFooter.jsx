import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";

import { useNavigate } from "react-router-dom";
import { CONTACT_FORM } from "../../../constants/routes";
const PreFooter = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.preFooter}>
      <div className={styles.desc}>
        <Text size="big" color="light" bold="bold">
          Impulsemos tu Clínica Dental, Juntos
        </Text>
        <Text color="light" bold="font-light">
          Pide una auditoría para tu consultorio dental, es 100% gratis
        </Text>
        <IconTextButton onClick={() => navigate(CONTACT_FORM)}>
          Solicita una reunión
        </IconTextButton>
      </div>
      {/*  <img className={styles.preFooterImg} src={PreFooterImg} /> */}
    </section>
  );
};

export default PreFooter;
