import React, { useState } from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import iconBenefit from "@assets/iconoBeneficio.svg";
import spainBanner from "@assets/spainBanner.svg";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import EbookImg from "@assets/imgEbookPrueba.svg";
import IconButton from "../../components/molecules/IconButton/IconButton";
import Footer from "../../components/organisms/Footer/Footer";
import Icon from "../../components/atoms/Icon/Icon";
import TextLink from "../../components/molecules/TextLink/TextLink";
import { useNavigate } from "react-router-dom";
import {
  DOWNLOAD_EBOOK,
  CONTACT_FORM,
  OUR_PROGRAM,
} from "../../constants/routes";
import ImgBanner from "./components/BannerImg/BannerImg";
import PreFooter from "../../components/organisms/PreFooter/PreFooter";
import Mark from "../../components/atoms/Mark/Mark";
import FacebookAds from "@assets/Facebook Ads.svg";
import Hubspot from "@assets/Hubspot.svg";
import MailChimp from "@assets/MailChimp.svg";
import Zapier from "@assets/Zapier.svg";
import Medicos from "@assets/Medicos.svg";

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
      <Nav />
      <header className={styles.header}>
        <section className={styles.banner}>
          <div className={styles.contents}>
            <div className={styles.banner__content}>
              <Text
                type="ultrabigtitle"
                bold="extra-bold"
                fontFamily="font-secondary"
                color="light"
              >
                Tu Mejor Opción en <Mark color="mark">Marketing Dental.</Mark>
              </Text>
              <Text size="sm" bold="font-light" color="light">
                Convertimos tu clínica en autoridad local
              </Text>

              <div className={styles.banner__btns}>
                <IconTextButton
                  size="100%"
                  onClick={() => navigate(CONTACT_FORM)}
                >
                  Quiero saber más
                </IconTextButton>
              </div>
              <Text size="sm" bold="font-light" color="soft">
                *Solo trabajamos con clínicas que ofrecen implantes.
              </Text>
            </div>

            <ImgBanner />
          </div>
          <div className={styles.partners}>
            <img src={FacebookAds} />
            <img src={Hubspot} />
            <img src={MailChimp} />
            <img src={Zapier} />
          </div>
        </section>
      </header>
      <div className={styles.contactBannerSection}>
        <div cassName={styles.desc}>
          <div className={styles.stickyContainer}>
            <Text type="title" size="sm" color="black" bold="bold">
              ¿Por qué los pacientes <Mark color="underline">no eligen</Mark> tu
              clínica dental?
            </Text>
            <Text size="sm" bold="font-light">
              Aprende más sobre nuestro programa de 6 meses
            </Text>

            <TextLink
              textProps={{ size: "sm" }}
              variant="black"
              to={DOWNLOAD_EBOOK}
            >
              Quiero Saber Mas {">"}
            </TextLink>
            <div className={styles.cardJoinUs}>
              <img src={Medicos} />
              <div className={styles.desc}>
                <Text size="ty" color="black">
                  Únete a los dentistas
                </Text>
                <Text size="ty" bold="font-light">
                  que han decidido transformar sus consultorios
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <Text type="subtitle" bold="bold" color="black">
              La publicidad de tu consultorio es{" "}
              <Mark color="submarked-blue">genérica</Mark>
            </Text>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                <Mark color="soft">Solucion:</Mark> ¿Buscas una agencia que
                brinde resultados a largo plazo? Aprende más sobre nuestro
                programa de 180 días y cómo puede cambiar tu práctica dental.
                <Mark color="submarked-yellow">
                  ¿Buscas una agencia que brinde resultados a largo plazo?
                </Mark>
              </Text>
              <Text size="sm" color="black" bold="font-light">
                <Mark color="submarked-blue">
                  ¿Buscas una agencia que brinde resultados a largo plazo?
                </Mark>{" "}
                Aprende más sobre nuestro programa de 180 días.
              </Text>
            </div>
          </div>
          <div className={styles.detail}>
            <Text type="subtitle" bold="bold" color="black">
              La publicidad de tu consultorio es{" "}
              <Mark color="submarked-blue">genérica</Mark>
            </Text>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                <Mark color="soft">Solucion:</Mark> ¿Buscas una agencia que
                brinde resultados a largo plazo? Aprende más sobre nuestro
                programa de 180 días y cómo puede cambiar tu práctica dental.
                <Mark color="submarked-yellow">
                  ¿Buscas una agencia que brinde resultados a largo plazo?
                </Mark>
              </Text>
              <Text size="sm" color="black" bold="font-light">
                <Mark color="submarked-blue">
                  ¿Buscas una agencia que brinde resultados a largo plazo?
                </Mark>{" "}
                Aprende más sobre nuestro programa de 180 días.
              </Text>
            </div>
          </div>
          <div className={styles.detail}>
            <Text type="subtitle" bold="bold" color="black">
              La publicidad de tu consultorio es{" "}
              <Mark color="submarked-blue">genérica</Mark>
            </Text>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                <Mark color="soft">Solucion:</Mark> ¿Buscas una agencia que
                brinde resultados a largo plazo? Aprende más sobre nuestro
                programa de 180 días y cómo puede cambiar tu práctica dental.
                <Mark color="submarked-yellow">
                  ¿Buscas una agencia que brinde resultados a largo plazo?
                </Mark>
              </Text>
              <Text size="sm" color="black" bold="font-light">
                <Mark color="submarked-blue">
                  ¿Buscas una agencia que brinde resultados a largo plazo?
                </Mark>{" "}
                Aprende más sobre nuestro programa de 180 días.
              </Text>
            </div>
          </div>
          <div className={styles.detail}>
            <Text type="subtitle" bold="bold" color="black">
              La publicidad de tu consultorio es{" "}
              <Mark color="submarked-blue">genérica</Mark>
            </Text>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                <Mark color="soft">Solucion:</Mark> ¿Buscas una agencia que
                brinde resultados a largo plazo? Aprende más sobre nuestro
                programa de 180 días y cómo puede cambiar tu práctica dental.
                <Mark color="submarked-yellow">
                  ¿Buscas una agencia que brinde resultados a largo plazo?
                </Mark>
              </Text>
              <Text size="sm" color="black" bold="font-light">
                <Mark color="submarked-blue">
                  ¿Buscas una agencia que brinde resultados a largo plazo?
                </Mark>{" "}
                Aprende más sobre nuestro programa de 180 días.
              </Text>
            </div>
          </div>
          <div className={styles.detail}>
            <Text type="subtitle" bold="bold" color="black">
              La publicidad de tu consultorio es{" "}
              <Mark color="submarked-blue">genérica</Mark>
            </Text>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                <Mark color="soft">Solucion:</Mark> ¿Buscas una agencia que
                brinde resultados a largo plazo? Aprende más sobre nuestro
                programa de 180 días y cómo puede cambiar tu práctica dental.
                <Mark color="submarked-yellow">
                  ¿Buscas una agencia que brinde resultados a largo plazo?
                </Mark>
              </Text>
              <Text size="sm" color="black" bold="font-light">
                <Mark color="submarked-blue">
                  ¿Buscas una agencia que brinde resultados a largo plazo?
                </Mark>{" "}
                Aprende más sobre nuestro programa de 180 días.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spainBanner}>
        <img className={styles.spainBannerImg} src={spainBanner} />
        <div className={styles.desc}>
          <div className={styles.line}>
            <span className={`${styles.markLine} ${styles.secondary}`} />
            <Text size="ty" color="soft" bold="regular">
              NUESTRA UBICACION
            </Text>
          </div>
          <Text type="smalltitle" color="light">
            Trabajamos con clínicas en toda España.
          </Text>
          <Text size="sm" bold="font-light" color="soft">
            Nuestras estrategias están diseñadas para ser efectivas con
            pacientes locales.
          </Text>
          <div className={styles.seeMore}>
            <IconTextButton
              size="100%"
              textProps={{ size: "sm" }}
              onClick={() => navigate(OUR_PROGRAM)}
              colorVariant="very-light-black"
            >
              Ver Programa
            </IconTextButton>
          </div>
        </div>
      </div>
      <section className={styles.mainContent}>
        <div className={styles.desc}>
          <div className={styles.line}>
            <span className={styles.markLine} />
            <Text size="ty" bold="regular">
              NUESTRO CONOCIMIENTO
            </Text>
          </div>
          <Text type="smalltitle">Aprende sobre Marketing Dental</Text>
          <Text bold="font-light" size="sm">
            ¡Disfruta de nuestros ebooks gratuitos!
          </Text>
          <TextLink textProps={{ size: "sm" }} to={OUR_PROGRAM} variant="black">
            Ver Programa {">"}
          </TextLink>
        </div>
        <div className={styles.card} onClick={() => navigate(DOWNLOAD_EBOOK)}>
          <img className={styles.cardImg} src={EbookImg} />
          <Text size="ty">EBOOK</Text>
          <Text size="lg">10 Secretos de Marketing Dental</Text>

          <TextLink
            marked
            textProps={{ size: "ty" }}
            variant="secondary"
            to={DOWNLOAD_EBOOK}
          >
            Descargar la Guia
          </TextLink>
        </div>
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default LandingPage;
