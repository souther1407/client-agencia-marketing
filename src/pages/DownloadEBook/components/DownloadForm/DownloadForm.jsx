import React, { useState } from "react";
import styles from "./styles.module.css";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Input from "../../../../components/atoms/Input/Input";
import Icon from "../../../../components/atoms/Icon/Icon";
const DownloadForm = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    workInOffice: "",
    phoneNumber: "",
  });
  const [currentInput, setCurrentInput] = useState(0);
  return (
    <div className={styles.downloadForm}>
      <header className={styles.header}>
        <div className={styles.progress}>
          <div className={styles.progressLine}></div>
          <ul className={styles.indicators}>
            <li className={styles.indicator}>
              <Text color="light">1</Text>
            </li>
            <li className={styles.indicator}>
              <Icon size={"1rem"} type={"check"} color="var(--white)" />
            </li>
            <li className={styles.indicator}>
              <Icon size={"1rem"} type={"check"} color="var(--white)" />
            </li>
            <li className={styles.indicator}>
              <Icon size={"1rem"} type={"check"} color="var(--white)" />
            </li>
          </ul>
        </div>
      </header>
      <main className={styles.content}>
        <div className={styles.desc}>
          <Text bold type="title">
            Descarga el Ebook Gratuito
          </Text>
          <Text size="ty" textAlign="center">
            todos los campos son obligatorios
          </Text>
        </div>
        <Input
          variant="secondary"
          id={"email"}
          onChange={(id, value) => {}}
          onError={(id, error) => {}}
          label="Correo electronico de trabajo"
        />
      </main>
      <footer className={styles.footer}>
        <IconTextButton variant="bordered">Anterior</IconTextButton>
        <IconTextButton>Siguiente</IconTextButton>
      </footer>
    </div>
  );
};

export default DownloadForm;
