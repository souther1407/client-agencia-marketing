import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Input from "../../../../components/atoms/Input/Input";
import Icon from "../../../../components/atoms/Icon/Icon";
import TextLink from "../../../../components/molecules/TextLink/TextLink";
import Select from "../../../../components/atoms/Select/Select";
const MAX_FORMS = 2;
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
    <div
      className={styles.downloadForm}
      style={{
        height:
          window.innerWidth <= 600
            ? form.email.length > 0
              ? "100vh"
              : "75vh"
            : "",
      }}
    >
      <header className={styles.header}>
        <div
          className={`${styles.progress} ${currentForm == 1 && styles.none}`}
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
          </ul>
        </div>
      </header>
      <main className={styles.main}>
        {currentForm == 1 && (
          <div className={styles.content}>
            <div className={styles.desc}>
              <Text bold type="title" textAlign="center">
                Descarga el Ebook Gratuito
              </Text>
              <Text size="ty" textAlign="center">
                todos los campos son obligatorios
              </Text>
            </div>

            <Input
              variant="white"
              id={"email"}
              value={form.email}
              onChange={handleChange}
              onError={(id, error) => {}}
              label="Correo electronico de trabajo*"
            />
          </div>
        )}
        {currentForm == 2 && (
          <div className={styles.content}>
            <div className={styles.desc}>
              <Text bold type="title" textAlign="center">
                Descarga el Ebook Gratuito
              </Text>
              <Text size="ty" textAlign="center">
                todos los campos son obligatorios
              </Text>
            </div>
            <div className={styles.inputChecks}>
              <Input
                variant="white"
                id={"firstName"}
                value={form.firstName}
                onChange={handleChange}
                onError={(id, error) => {}}
                label="Nombre*"
              />
              <Input
                variant="white"
                id={"lastName"}
                value={form.lastName}
                onChange={handleChange}
                onError={(id, error) => {}}
                label="Apellidos*"
              />
              <Input
                variant="white"
                id={"phoneNumber"}
                value={form.phoneNumber}
                onChange={handleChange}
                onError={(id, error) => {}}
                label="Numero de Telefono*"
              />
              <Select
                icon={"arrowFoward"}
                variant="white"
                id={"howKnowAbout"}
                onChange={handleChange}
                label={"¿Como escuchaste de este ebook?*"}
                onError={() => {}}
                placeholder={"Porfavor Seleccione*"}
                elements={["Redes sociales", "Google"]}
              />
            </div>
            <div className={styles.privacy}>
              <Text bold="font-light">
                Tu privacidad es importante para nosotros. HackDental utiliza la
                información que proporcionas para ponerse en contacto contigo en
                relación con contenido, productos y servicios relevantes para
                ti. Puedes darte de baja para dejar de recibir este tipo de
                comunicaciones en cualquier momento. Si deseas obtener más
                información sobre la protección de tus datos en HackDental,
                consulta nuestra Política de Privacidad.
              </Text>
            </div>
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        <div className={currentForm === 1 && styles.hide}>
          <IconTextButton
            onClick={handleAntForm}
            variant="bordered"
            colorVariant="secondary-dark"
          >
            Anterior
          </IconTextButton>
        </div>
        <div className={currentForm === MAX_FORMS && styles.none}>
          <IconTextButton onClick={handleNextForm}>Siguiente</IconTextButton>
        </div>
        <div
          className={`${styles.downloadBtn} ${
            currentForm == MAX_FORMS && styles.show
          }`}
        >
          <IconTextButton disabled onClick={handleNextForm}>
            Descargar pdf
          </IconTextButton>
        </div>
      </footer>
    </div>
  );
};

export default DownloadForm;
