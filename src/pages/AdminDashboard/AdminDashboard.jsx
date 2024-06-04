import React, { useState } from "react";
import styles from "./styles.module.css";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import TextArea from "../../components/atoms/Textarea/Textarea";
import Input from "../../components/atoms/Input/Input";
import Text from "../../components/atoms/Text/Text";
const AdminDashboard = () => {
  const [currentForm, setCurrentForm] = useState(0);
  const onNext = () => {
    if (currentForm == 1) return;
    setCurrentForm((prev) => prev + 1);
  };
  const onAnt = () => {
    if (currentForm == 0) return;
    setCurrentForm((prev) => prev - 1);
  };
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <IconTextButton onClick={onAnt}>Atrás</IconTextButton>
        <IconTextButton onClick={onNext}>Siguiente</IconTextButton>
      </header>
      <main className={styles.main}>
        <div className={`${styles.form} ${currentForm == 0 && styles.show}`}>
          <Input
            variant="secondary"
            id={"detailTitle"}
            label="Titulo Biblioteca"
            placeholder="Eg: Como Mejorar la Aceptación de Casos de tu Clinica"
            onChange={(id, value) => {}}
            onError={(id, value) => {}}
          />
          <TextArea
            id={"detailDescription"}
            placeholder="Eg: Transforma tu clínica dental con nuestros ebooks, redactados por líderes en marketing digital."
            label="Micro-Descripcion del ebook"
            onChange={(id, value) => {}}
          />
        </div>
        <div className={`${styles.form} ${currentForm == 1 && styles.show}`}>
          <Input
            variant="secondary"
            id={"cardTitle"}
            label="Titulo Landing Page"
            placeholder="Eg: Como Mejorar la Aceptación de Casos de tu Clinica"
            onChange={(id, value) => {}}
            onError={(id, value) => {}}
          />
          <TextArea
            id={"cardDetail"}
            placeholder="Eg: Transforma tu clínica dental con nuestros ebooks, redactados por líderes en marketing digital."
            label="Descripcion Landing Page"
            onChange={(id, value) => {}}
          />
          <div className={styles.upload}>
            <label>
              <div className={styles.uploadBtn}>
                <Text>Subir Imagen</Text>
              </div>
              <input
                accept="image/*"
                id="img"
                type="file"
                style={{ display: "none" }}
              />
            </label>
          </div>
          <div className={styles.upload}>
            <label>
              <div className={styles.uploadBtn}>
                <Text>Subir Pdf</Text>
              </div>
              <input
                id="pdf"
                accept="application/pdf"
                type="file"
                style={{ display: "none" }}
              />
            </label>
          </div>

          <div className={styles.createBook}>
            <IconTextButton>Crear EBook</IconTextButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
