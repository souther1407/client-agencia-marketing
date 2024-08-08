import React, { useState } from "react";
import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import logo from "@assets/react.svg";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Modal from "../../components/molecules/Modal/Modal";
import DownloadForm from "./components/DownloadForm/DownloadForm";
import Logo from "../../components/atoms/Logo/Logo";
import EBookImg from "@assets/Foto Prueba.svg";
const DownloadEBook = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Logo />
      </nav>
      <main className={styles.main}>
        <div className={styles.banner}>
          <section className={styles.banner__desc}>
            <Text color="primary">Ebook Gratuito</Text>
            <Text color="light" type="title" bold>
              Como Mejorar la Aceptación de Casos de tu Clinica
            </Text>
            <div className={styles.desc}>
              <Text color="soft" bold="font-light">
                Save thousands of engineering hours by using the NexHealth
                Synchronizer API to sync bidirectionally with health record
                systems like Dentrix, Open Dental, eClinicalWorks, and more
              </Text>
            </div>
            <div className={styles.downloadEBook}>
              <IconTextButton size="100%" onClick={() => setModalOpened(true)}>
                Descargar Ahora
              </IconTextButton>
            </div>
          </section>
          <img className={styles.ebook} src={EBookImg} />
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.info}>
            <Text bold="bold" type="subtitle">
              Adentro aprenderás:
            </Text>
            <Text bold="font-light">
              Panorama de las ventas por chat para el 2023
            </Text>
            <Text bold="font-light">
              Cuáles son las industrias que más venden por chat aprendiendo a
              vender por medio de Facebook.
            </Text>
            <Text bold="font-light">
              Aprendiendo a vender por medio de WhatsApp, Telegram e Instagram
            </Text>
          </div>
        </div>
      </main>
      <Modal isOpen={modalOpened} onClose={() => setModalOpened(false)}>
        <DownloadForm modalOpened={modalOpened} />
      </Modal>
    </div>
  );
};

export default DownloadEBook;
