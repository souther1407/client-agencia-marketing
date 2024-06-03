import React, { useState } from "react";
import styles from "./styles.module.css";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import TextArea from "../../components/atoms/Textarea/Textarea";
import Input from "../../components/atoms/Input/Input";
const AdminDashboard = () => {
  const [currentForm, setCurrentForm] = useState(0);
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <IconTextButton>Atrás</IconTextButton>
        <IconTextButton>Siguiente</IconTextButton>
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
      </main>
    </div>
  );
};

export default AdminDashboard;
