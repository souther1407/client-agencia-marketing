import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Input from "../../../../components/atoms/Input/Input";
import Icon from "../../../../components/atoms/Icon/Icon";

const MAX_FORMS = 4;
const DownloadForm = ({ modalOpened }) => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    workInOffice: "",
    phoneNumber: "",
    url: "",
  });

  const [currentForm, setCurrentForm] = useState(1);

  const handleNextForm = () => {
    setCurrentForm((prev) => prev + 1);
  };

  const handleChange = (id, value) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleAntForm = () => {
    setCurrentForm((prev) => prev - 1);
  };

  const resetData = () => {
    setCurrentForm(1);
  };
  useEffect(() => {
    if (!modalOpened) {
      resetData();
    }
  }, [modalOpened]);

  return (
    <div className={styles.downloadForm}>
      <header className={styles.header}>
        <div
          className={`${styles.progress} ${currentForm == 1 && styles.hide}`}
        >
          <div className={styles.progressLine}></div>
          <ul className={styles.indicators}>
            <li
              className={`${styles.indicator} ${
                currentForm > 1 && styles.success
              }`}
            >
              {currentForm > 1 ? (
                <Icon type={"check"} color="var(--white)" size={"1rem"} />
              ) : (
                <Text color="light">1</Text>
              )}
            </li>
            <li
              className={`${styles.indicator} ${
                currentForm > 2 && styles.success
              }`}
            >
              {currentForm > 2 ? (
                <Icon type={"check"} color="var(--white)" size={"1rem"} />
              ) : (
                <Text color="light">2</Text>
              )}
            </li>
            <li
              className={`${styles.indicator} ${
                currentForm > 3 && styles.success
              }`}
            >
              {currentForm > 3 ? (
                <Icon type={"check"} color="var(--white)" size={"1rem"} />
              ) : (
                <Text color="light">3</Text>
              )}
            </li>
            <li className={styles.indicator}>
              {currentForm > 4 ? (
                <Icon type={"check"} color="var(--white)" size={"1rem"} />
              ) : (
                <Text color="light">4</Text>
              )}
            </li>
          </ul>
        </div>
      </header>
      <main>
        {currentForm == 1 && (
          <div className={styles.content}>
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
              value={form.email}
              onChange={handleChange}
              onError={(id, error) => {}}
              label="Correo electronico de trabajo"
            />
          </div>
        )}
        {currentForm == 2 && (
          <div className={styles.content}>
            <div className={styles.desc}>
              <Text bold type="title">
                Descarga el Ebook Gratuito
              </Text>
              <Text size="ty" textAlign="center">
                todos los campos son obligatorios
              </Text>
            </div>
            <div className={styles.inputs}>
              <Input
                variant="secondary"
                id={"firstName"}
                value={form.firstName}
                onChange={handleChange}
                onError={(id, error) => {}}
                label="Nombre"
              />
              <Input
                variant="secondary"
                id={"lastName"}
                value={form.lastName}
                onChange={handleChange}
                onError={(id, error) => {}}
                label="Apellido"
              />
            </div>
          </div>
        )}
        {currentForm == 3 && (
          <div className={styles.content}>
            <div className={styles.desc}>
              <Text bold type="title">
                Descarga el Ebook Gratuito
              </Text>
              <Text size="ty" textAlign="center">
                todos los campos son obligatorios
              </Text>
            </div>
            <div className={styles.inputs}>
              <Input
                variant="secondary"
                id={"workInOffice"}
                value={form.workInOffice}
                onChange={handleChange}
                onError={(id, error) => {}}
                label="¿Trabajas en un Consultorio?"
              />
              <Input
                variant="secondary"
                id={"phoneNumber"}
                value={form.phoneNumber}
                onChange={handleChange}
                onError={(id, error) => {}}
                label="Numero de Telefono"
              />
            </div>
          </div>
        )}
        {currentForm == 4 && (
          <div className={styles.content}>
            <div className={styles.desc}>
              <Text bold type="title">
                Descarga el Ebook Gratuito
              </Text>
              <Text size="ty" textAlign="center">
                todos los campos son obligatorios
              </Text>
            </div>
            <div>
              <Input
                variant="secondary"
                id={"url"}
                value={form.url}
                onChange={handleChange}
                onError={(id, error) => {}}
                label="URL del sitio web"
              />
            </div>
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        <div className={currentForm == 1 && styles.hide}>
          <IconTextButton onClick={handleAntForm} variant="bordered">
            Anterior
          </IconTextButton>
        </div>
        <div className={currentForm == MAX_FORMS && styles.hide}>
          <IconTextButton onClick={handleNextForm}>Siguiente</IconTextButton>
        </div>
      </footer>
    </div>
  );
};

export default DownloadForm;