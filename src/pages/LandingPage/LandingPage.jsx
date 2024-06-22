import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import BannerImg from "@assets/banner.svg";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import EbookImg from "@assets/Foto Prueba.svg";
import Link from "../../components/atoms/Link/Link";
import Input from "../../components/atoms/Input/Input";
import Footer from "../../components/organisms/Footer/Footer";

const LandingPage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Nav />
        <section className={styles.banner}>
          <div className={styles.banner__content}>
            <Text size="ty" bold="bold" color="primary">
              AGENCIA DE MARKETING DENTAL
            </Text>
            <Text type="title" bold="bold" color="light">
              Invierte en tu Clínica Dental con InkaDentist
            </Text>
            <Text size="sm" color="soft" bold="font-light">
              Somos expertos en marketing dental. Nuestro objetivo es generar
              pacientes leales para Clinicas ubicadas en España y Latinoamerica
            </Text>

            <div className={styles.banner__btns}>
              <IconTextButton>Solicitar Plan de Marketing</IconTextButton>
            </div>
            <Text size="sm" color="soft" bold="font-light">
              Solo para Clinicas Dentales que ofrezcan implantes
            </Text>
          </div>
          <img className={styles.bannerImg} src={BannerImg} />
        </section>
        <div className={styles.contactBanner}>
          <div className={styles.desc}></div>
        </div>
      </header>
      <section className={styles.mainEBook}>
        <div className={styles.mainEBook__card}>
          <img src={EbookImg} className={styles.mainEBook__img} />
          <div className={styles.mainEBook__desc}>
            <Text type="title" bold="bold" textAlign="center">
              Marketing Dental: La Guia Definitiva
            </Text>
            <Text size="sm" bold="light" textAlign="center">
              Transforma tu clínica dental con nuestros ebooks, redactados por
              líderes en marketing digital. Transforma tu clínica dental con
              nuestros ebooks, redactados por líderes en marketing digital.
            </Text>
            <Link>
              <Text color="link">Descargar la Guia</Text>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.form}>
        <div className={styles.form__desc}>
          <Text type="title">
            Vea cómo InkaDentist puede ayudarle a hacer crecer su práctica
            dental.
          </Text>
          <Text>Aviso: Solo aplica para dueños de clinicas dentales</Text>
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
          <div className={styles.line}>
            <Input
              id={"phone"}
              label="Número de teléfono (Whatsapp)"
              variant="secondary"
              onChange={(id, value) => {}}
              onError={(id, value) => {}}
            />
            <Input
              id={"email"}
              label="Email"
              variant="secondary"
              onChange={(id, value) => {}}
              onError={(id, value) => {}}
            />
          </div>
          <Input
            id={"clinicName"}
            label="Nombre de tu clínica dental"
            variant="secondary"
            onChange={(id, value) => {}}
            onError={(id, value) => {}}
            size="100%"
          />
          <IconTextButton>Solicitar Plan de Marketing</IconTextButton>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
