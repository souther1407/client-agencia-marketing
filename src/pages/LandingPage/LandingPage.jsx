import React, { useState } from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import BannerImg from "@assets/banner.svg";
import imgSubBanner from "@assets/imgSubBanner.svg";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import EbookImg from "@assets/Foto Prueba.svg";
import IconButton from "../../components/molecules/IconButton/IconButton";
import Input from "../../components/atoms/Input/Input";
import Footer from "../../components/organisms/Footer/Footer";
import Icon from "../../components/atoms/Icon/Icon";
import Mark from "../../components/atoms/Mark/Mark";
import TextLink from "../../components/molecules/TextLink/TextLink";
import { useNavigate } from "react-router-dom";
import {
  DOWNLOAD_EBOOK,
  LANDING_EBOOKS,
  CONTACT_FORM,
} from "../../constants/routes";
import ImgBanner from "./components/BannerImg/BannerImg";
import PreFooter from "../../components/organisms/PreFooter/PreFooter";
import imgVideo from "@assets/imgVideo.svg";
const LandingPage = () => {
  const navigate = useNavigate();
  const [showWSMsg, setShowWSMsg] = useState(true);
  const [showModalVideo, setShowModalVideo] = useState(false);

  const handleHideModalVideo = (e) => {
    if (e.target.id == "bg-video-modal") {
      setShowModalVideo(false);
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.help}>
        {showWSMsg && (
          <div className={styles.notification}>
            <Text bold="font-light" size="ty">
              👋 Tienes alguna duda sobre nuestros servicios de marketing?
              Consultanos por WhatsApp
            </Text>
            <div className={styles.closeBtn}>
              <IconButton
                icon="close"
                variant="secondary"
                onClick={() => setShowWSMsg(false)}
              />
            </div>
          </div>
        )}
        <div className={styles.wsBtn}>
          <Icon size={"2.5rem"} type={"wp"} color="var(--primary)" />
        </div>
      </div>
      <header className={styles.header}>
        <Nav />
        <section className={styles.banner}>
          <div className={styles.contents}>
            <div className={styles.banner__content}>
              <div className={styles.line}>
                <span className={styles.markLine} />
                <Text size="sm">¿QUIENES SOMOS?</Text>
              </div>
              <Text
                type="bigtitle"
                bold="extra-bold"
                fontFamily="font-secondary"
              >
                Una agencia diferente de Marketing Dental
              </Text>
              <Text size="sm" bold="font-light">
                Posicionamos a tu clínica dental como autoridad en tu mercado
                local.
              </Text>

              <div className={styles.banner__btns}>
                <IconTextButton
                  size="100%"
                  onClick={() => navigate(CONTACT_FORM)}
                >
                  Quiero saber más
                </IconTextButton>
              </div>
              <Text size="sm" bold="font-light">
                *Solo trabajamos con clínicas que ofrecen implantes.
              </Text>
            </div>

            <ImgBanner />
          </div>
        </section>
      </header>
      <div className={styles.contactBannerSection}>
        <div className={styles.desc}>
          <div className={styles.line}>
            <span className={`${styles.markLine} ${styles.primary}`} />
            <Text size="sm" color="light" bold="font-light">
              PROGRAMA EXCLUSIVO PARA CLÍNICAS DENTALES
            </Text>
          </div>
          <Text type="title" size="sm" color="light">
            Transformamos el marketing de tu clínica en 6 meses
          </Text>
          <Text size="sm" color="soft" bold="font-light">
            ¿Buscas una agencia que garantice resultados a largo plazo?.
            Descubre cómo nuestro programa de 180 días puede transformar tu
            práctica dental:
          </Text>
          <div className={styles.line}>
            <Icon type={"check"} color="var(--primary)" size={"1.2rem"} />
            <Text size="ty" color="soft" bold="font-light">
              Nuevos pacientes asegurados cada mes
            </Text>
          </div>
          <div className={styles.line}>
            <Icon type={"check"} color="var(--primary)" size={"1.2rem"} />
            <Text size="ty" color="soft" bold="font-light">
              Reducción de cancelaciones de citas.
            </Text>
          </div>
          <div className={styles.line}>
            <Icon type={"check"} color="var(--primary)" size={"1.2rem"} />
            <Text size="ty" color="soft" bold="font-light">
              Enfoque en pacientes de tratamientos de alto valor.
            </Text>
          </div>
          <div className={styles.line}>
            <Icon type={"check"} color="var(--primary)" size={"1.2rem"} />
            <Text size="ty" color="soft" bold="font-light">
              Asesoramiento personal semanal por Zoom.
            </Text>
          </div>

          <div className={styles.btns}>
            <IconTextButton>Quiero saber más</IconTextButton>
            <IconTextButton colorVariant="secondary">
              Aplicar Ahora
            </IconTextButton>
          </div>
          <Text size="ty" color="soft" bold="font-light">
            *El programa solo tiene cupos para 10 dueños de clínicas dentales.
          </Text>
        </div>
        <img className={styles.imgSubBanner} src={imgSubBanner} />
      </div>
      <section className={styles.mainContent}>
        <section className={styles.videoSection}>
          <div className={styles.videoSection__desc}>
            <div className={styles.line}>
              <span className={styles.markLine} />
              <Text size="sm">NUESTRO METODO</Text>
              <span className={styles.markLine} />
            </div>
            <Text bold="bold" type="smalltitle" textAlign="center">
              ¿Es posible aumentar las ganancias de una clínica en menos de un
              año?
            </Text>
            <Text bold="font-light" textAlign="center">
              <Mark>Por supuesto que si.</Mark> Nuestro equipo sabe lo que
              funciona, y ha diseñado estrategias de marketing para clinicas
              como la tuya.
            </Text>
            <div className={styles.videoDrawer}>
              <img className={styles.videoImg} src={imgVideo} />
              <button
                className={styles.videoPlayBtn}
                onClick={() => setShowModalVideo(true)}
              >
                <Icon size={"1.5rem"} color="var(--white)" type={"play"} />
              </button>
              <div
                id="bg-video-modal"
                className={`${styles.modalVideo} ${
                  showModalVideo && styles.show
                }`}
                onClick={handleHideModalVideo}
              >
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/Fu4GHmyvDk8?si=-ugwjpi28KLqfGSM?controls=0&showinfo=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className={styles.btns}>
              <IconTextButton
                onClick={() => navigate(CONTACT_FORM)}
                size="300px"
              >
                Solicita una reunión
              </IconTextButton>
              <IconTextButton colorVariant="secondary-dark">
                Ver más {">"}
              </IconTextButton>
            </div>
          </div>
        </section>

        <div
          className={styles.mainEBook__card}
          onClick={() => navigate(DOWNLOAD_EBOOK)}
        >
          <div className={styles.mainEBook__desc}>
            <Text color="primary" size="sm">
              EBOOK GRATUITO
            </Text>
            <Text type="subtitle" bold="bold" color="very-light">
              Marketing Dental: a Guia Definitiva
            </Text>
            <TextLink
              marked
              textProps={{ size: "ty" }}
              variant="white"
              to={DOWNLOAD_EBOOK}
            >
              Descargar la Guia <Icon type={"arrowSquare"} size={"1rem"} />
            </TextLink>
          </div>
          <img src={EbookImg} className={styles.mainEBook__img} />
        </div>
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default LandingPage;
