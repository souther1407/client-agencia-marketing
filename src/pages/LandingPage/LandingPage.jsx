import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import BannerImg from "@assets/banner.svg";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import EbookImg from "@assets/Foto Prueba.svg";
import IconButton from "../../components/molecules/IconButton/IconButton";
import Input from "../../components/atoms/Input/Input";
import Footer from "../../components/organisms/Footer/Footer";
import Icon from "../../components/atoms/Icon/Icon";
import VideoImg from "@assets/Imagen Video.svg";
import Mark from "../../components/atoms/Mark/Mark";
import { useNavigate } from "react-router-dom";
import { DOWNLOAD_EBOOK, LANDING_EBOOKS } from "../../constants/routes";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div className={styles.help}>
        <div className={styles.notification}>
          <Text bold="font-light" size="ty">
            👋 Tienes alguna duda sobre nuestros servicios de marketing?
            Consultanos por WhatsApp
          </Text>
          <div className={styles.closeBtn}>
            <IconButton icon="close" variant="secondary" />
          </div>
        </div>
        <div className={styles.wsBtn}>
          <Icon size={"2.5rem"} type={"wp"} color="var(--primary)" />
        </div>
      </div>
      <header className={styles.header}>
        <Nav />
        <section className={styles.banner}>
          <div className={styles.contents}>
            <div className={styles.banner__content}>
              <Text bold="bold">¿QUE SOMOS?</Text>
              <Text type="title" bold="bold">
                Invierte en tu Clínica Dental con InkaDentist
              </Text>
              <Text size="sm" bold="font-light">
                Trabajamos con clinicas dentales en España y Latinoamerica que
                busquen crecer su negocio.
              </Text>

              <div className={styles.banner__btns}>
                <IconTextButton onClick={() => navigate(DOWNLOAD_EBOOK)}>
                  Solicitar Plan de Marketing
                </IconTextButton>
              </div>
              <Text size="sm" bold="font-light">
                Solo para Clinicas Dentales que ofrezcan implantes
              </Text>
            </div>
            <img className={styles.bannerImg} src={BannerImg} />
          </div>
        </section>
        <div className={styles.contactBannerSection}>
          <div className={styles.desc}>
            <div className={styles.links}>
              <Text color="primary" size="ty">
                Aceptamos Socios
              </Text>
              <div className={styles.separator}></div>
              <Text color="soft" size="ty">
                Contactanos
              </Text>
            </div>
            <Text size="sm" color="light">
              Programa de Marketing Dental de 6 meses
            </Text>
            <Text size="sm" color="soft" bold="font-light">
              Estamos seleccionando 10 clínicas dentales para un exclusivo
              programa de 6 meses que atrae pacientes de tratamientos premium.
              Contáctanos y descubre si calificas.
            </Text>
          </div>
          <div className={styles.contactWS}>
            <IconTextButton size="250px" icon={"wp"} variant="secondary">
              ¿Tienes dudas?
            </IconTextButton>
          </div>
        </div>
      </header>

      <section className={styles.videoSection}>
        <img src={VideoImg} alt="imagen video" className={styles.imgVideo} />
        <div className={styles.videoSection__desc}>
          <Text type="title" bold="bold">
            Nuestra Estrategia de Marketing Dental
          </Text>
          <Text bold="font-light">
            Somos una agencia de marketing especializada en generar pacientes
            leales para Clinicas Dentales ubicadas en España y Latinoamerica
          </Text>
          <div className={styles.btn}>
            <IconTextButton>Solicita una reunión gratis</IconTextButton>
            <Text bold="font-light" size="ty">
              Discutamos el crecimiento de tu práctica dental
            </Text>
          </div>
        </div>
      </section>
      <section className={styles.mainEBookSection}>
        <div className={styles.mainEBook__card}>
          <div className={styles.mainEBook__desc}>
            <Text type="subtitle" bold="bold" color="very-light">
              <Mark color="primary">Marketing Dental:</Mark> La Guia Definitiva
            </Text>
            <Text size="sm" bold="font-light" color="soft">
              Transforma tu clínica dental con nuestros ebook, redactados por
              nuestro director de Marketing.
            </Text>
            <div className={styles.btnDownload}>
              <IconTextButton>Descarga Gratis</IconTextButton>
            </div>
          </div>
          <img src={EbookImg} className={styles.mainEBook__img} />
        </div>
      </section>
      <section className={styles.form}>
        <div className={styles.form__desc}>
          <Text type="title">
            Pide una Propuesta de Marketing para tu Clinica Dental
          </Text>
          <Text>
            Aviso: No aplica para dueños de clinicas con servicio no dentales
          </Text>
        </div>
        <div className={styles.form__inputs}>
          <div className={styles.line}>
            <Input
              id={"firstName"}
              label="Nombre"
              variant="secondary"
              onChange={(id, value) => {}}
              onError={(id, value) => {}}
            />
            <Input
              id={"lastName"}
              label="Apellido"
              variant="secondary"
              onChange={(id, value) => {}}
              onError={(id, value) => {}}
            />
          </div>
          <Input
            id={"email"}
            label="Email"
            variant="secondary"
            onChange={(id, value) => {}}
            onError={(id, value) => {}}
            size="100%"
          />
          <IconTextButton variant="terciary">
            Quiero Ser Contactado
          </IconTextButton>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
