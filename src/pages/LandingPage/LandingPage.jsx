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
              <Text bold="bold">¿QUE SOMOS?</Text>

              <Text type="title" bold="extra-bold">
                Una Agencia Diferente de{" "}
                <span className={styles.underLine}>Marketing Dental</span>
              </Text>
              <Text size="sm" bold="font-light">
                Trabajamos con clinicas dentales en España y Latinoamerica que
                busquen crecer su negocio.
              </Text>

              <div className={styles.banner__btns}>
                <IconTextButton
                  size="100%"
                  onClick={() => navigate(CONTACT_FORM)}
                >
                  Cuentanos de tu clinica
                </IconTextButton>
              </div>
              <Text size="sm" bold="font-light">
                Solo para Clinicas Dentales que ofrezcan implantes
              </Text>
            </div>

            <ImgBanner />
          </div>
        </section>
      </header>
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
          <Text type="subtitle" size="sm" color="light">
            Marketing de{" "}
            <span className={styles.underLine2}>Tratamientos Premium</span>
          </Text>
          <Text size="sm" color="soft" bold="font-light">
            Estamos seleccionando solo a 10 dueños de clínicas dentales para
            llenarlas de pacientes dentales con tratamientos premium. El
            programa dura 6 meses. Algunos de los servicios que recibiran los
            elegidos son:
          </Text>
          <div className={styles.line}>
            <Icon type={"check"} color="var(--primary)" size={"1.2rem"} />
            <Text size="ty" color="soft" bold="font-light">
              Desarrollo Web para servicios dentales
            </Text>
          </div>
          <div className={styles.line}>
            <Icon type={"check"} color="var(--primary)" size={"1.2rem"} />
            <Text size="ty" color="soft" bold="font-light">
              Google Ads de Tratamientos Premium (Implantes).
            </Text>
          </div>
          <div className={styles.line}>
            <Icon type={"check"} color="var(--primary)" size={"1.2rem"} />
            <Text size="ty" color="soft" bold="font-light">
              Email Marketing Dental
            </Text>
          </div>
          <div className={styles.line}>
            <Icon type={"check"} color="var(--primary)" size={"1.2rem"} />
            <Text size="ty" color="soft" bold="font-light">
              Automatizaciones de Whatsapp para Clinicas Dentales
            </Text>
          </div>
          <div className={styles.line}>
            <Icon type={"check"} color="var(--primary)" size={"1.2rem"} />
            <Text size="ty" color="soft" bold="font-light">
              Creacion de Programas de Referidos para Clinicas
            </Text>
          </div>
          <div className={styles.btns}>
            <IconTextButton>Ver Mas {">"}</IconTextButton>
            <IconTextButton colorVariant="secondary" icon={"wp"}>
              ¿Tienes dudas?
            </IconTextButton>
          </div>
          <Text size="ty" color="soft" bold="font-light">
            Contáctanos y descubre si calificas.
          </Text>
        </div>
        <img className={styles.imgSubBanner} src={imgSubBanner} />
      </div>
      <section className={styles.mainContent}>
        <section className={styles.videoSection}>
          <div className={styles.videoSection__desc}>
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
        <div className={styles.mainEBook__card}>
          <div className={styles.mainEBook__desc}>
            <Text type="subtitle" bold="bold" color="very-light">
              Marketing Dental:{" "}
              <span className={styles.underLine2}>La Guia Definitiva</span>
            </Text>
            <Text size="sm" bold="font-light" color="soft">
              ransforma tu clínica dental con nuestros ebook.
            </Text>
            <div className={styles.btnDownload}>
              <IconTextButton>Descarga Gratis</IconTextButton>
            </div>
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
