import React, { useState } from "react";
import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import logo from "@assets/react.svg";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Modal from "../../components/molecules/Modal/Modal";
import DownloadForm from "./components/DownloadForm/DownloadForm";

const DownloadEBook = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" className={styles.logo} />
      </nav>
      <main className={styles.main}>
        <div className={styles.banner}>
          <section className={styles.banner__desc}>
            <Text>Ebook Gratuito</Text>
            <Text type="bigtitle" bold>
              Como Mejorar la Aceptación de Casos de tu Clinica
            </Text>
            <Text>
              Transforma tu clínica dental con nuestros ebooks, redactados por
              líderes en marketing digital.
            </Text>
            <div className={styles.downloadEBook}>
              <IconTextButton size="100%" onClick={() => setModalOpened(true)}>
                Descargar Gratis
              </IconTextButton>
            </div>
          </section>
          <img
            className={styles.ebook}
            src="https://imgs.search.brave.com/-10egBWXdGK9WNH6RcezG63NVV8M1p3Or7fKp38QaWs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L3doeS1kaWdpdGFs/LW1hcmtldGluZy1l/Ym9va18zLndlYnA_/d2lkdGg9NDUwJmhl/aWdodD01ODAmbmFt/ZT13aHktZGlnaXRh/bC1tYXJrZXRpbmct/ZWJvb2tfMy53ZWJw"
          />
        </div>
      </main>
      <Modal isOpen={modalOpened} onClose={() => setModalOpened(false)}>
        <DownloadForm modalOpened={modalOpened} />
      </Modal>
    </div>
  );
};

export default DownloadEBook;
