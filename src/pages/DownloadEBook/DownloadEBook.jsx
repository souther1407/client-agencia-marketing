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
            <Text>Ebook Gratuito</Text>
            <Text type="bigtitle" bold>
              Marketing Dental: Guia para Principiantes
            </Text>
            <div className={styles.desc}>
              <Text>
                Intro al Marketing Digital para Dueños de Clinicas sin
                experiencia
              </Text>
            </div>
            <div className={styles.downloadEBook}>
              <IconTextButton size="100%" onClick={() => setModalOpened(true)}>
                Descargar Gratis
              </IconTextButton>
            </div>
          </section>
          <img className={styles.ebook} src={EBookImg} />
        </div>
      </main>
      <Modal isOpen={modalOpened} onClose={() => setModalOpened(false)}>
        <DownloadForm modalOpened={modalOpened} />
      </Modal>
    </div>
  );
};

export default DownloadEBook;
