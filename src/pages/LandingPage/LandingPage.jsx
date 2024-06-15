import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import BannerImg from "@assets/banner.svg";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import EbookImg from "@assets/Foto Prueba.svg";
import Link from "../../components/atoms/Link/Link";
const LandingPage = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <section className={styles.banner}>
        <div className={styles.banner__content}>
          <Text size="ty" bold="bold">
            AGENCIA DE MARKETING DENTAL
          </Text>
          <Text type="title" bold="bold">
            INVIERTE EN EL CRECIMIENTO DE TU CLÍNICA DENTAL
          </Text>
          <Text size="sm">
            Somos una agencia de marketing que trabaja mano a mano con Clinicas
            Dentales en Espana y Latinoamerica para llevar sus ingresos al
            siguiente nivel.
          </Text>

          <div className={styles.banner__btns}>
            <IconTextButton>Solicitar Plan de Marketing</IconTextButton>
            <div className={styles.videoBtn}>
              <div className={styles.videoBtn__desc}>
                <Text bold>¿Qué es Inkadentist?</Text>
                <Text color="soft" size="sm">
                  Mirar video introductorio
                </Text>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.bannerImg} src={BannerImg} />
      </section>
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
    </div>
  );
};

export default LandingPage;
