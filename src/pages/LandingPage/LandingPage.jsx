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
  LANDING_EBOOKS,
  CONTACT_FORM,
} from "../../constants/routes";
import ImgBanner from "./components/BannerImg/BannerImg";
import PreFooter from "../../components/organisms/PreFooter/PreFooter";

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
                <Text size="sm">NUESTRA AGENCIA</Text>
              </div>
              <Text
                type="bigtitle"
                bold="extra-bold"
                fontFamily="font-secondary"
              >
                Tu Mejor Opción en Marketing Dental.
              </Text>
              <Text size="sm" bold="font-light">
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
            <Text size="sm" color="soft" bold="font-light">
              NUESTRO PROGRAMA DE MARKETING
            </Text>
          </div>
          <Text type="title" size="sm" color="light">
            Transformamos tu clínica en 6 meses
          </Text>
          <Text size="sm" color="soft" bold="font-light">
            Aprende más sobre nuestro programa de 6 meses y cómo puede cambiar
            tu práctica dental.
          </Text>
          {/* <div className={styles.line}>
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
 */}
          <div className={styles.btns}>
            <IconTextButton>Ver Programa</IconTextButton>
          </div>
          {/*   <Text size="ty" color="soft" bold="font-light">
            *El programa solo tiene cupos para 10 dueños de clínicas dentales.
          </Text> */}
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <div className={styles.line}>
              <img className={styles.iconBenefit} src={iconBenefit} />
              <Text color="light" size="lg">
                Programa Exclusivo (Solo 10 cupos)
              </Text>
            </div>
            <Text size="sm" bold="font-light" color="soft">
              ¿Buscas una agencia que brinde resultados a largo plazo? Aprende
              más sobre nuestro programa de 180 días y cómo puede cambiar tu
              práctica dental.
            </Text>
          </div>
          <div className={styles.detail}>
            <div className={styles.line}>
              <img className={styles.iconBenefit} src={iconBenefit} />
              <Text color="light" size="lg">
                Factura con pacientes premium
              </Text>
            </div>
            <Text size="sm" bold="font-light" color="soft">
              ¿Buscas una agencia que brinde resultados a largo plazo? Aprende
              más sobre nuestro programa de 180 días y cómo puede cambiar tu
              práctica dental.
            </Text>
          </div>
          <div className={styles.detail}>
            <div className={styles.line}>
              <img className={styles.iconBenefit} src={iconBenefit} />
              <Text color="light" size="lg">
                Crece sin esfuerzo
              </Text>
            </div>
            <Text size="sm" bold="font-light" color="soft">
              ¿Buscas una agencia que brinde resultados a largo plazo? Aprende
              más sobre nuestro programa de 180 días y cómo puede cambiar tu
              práctica dental.
            </Text>
          </div>
          <div className={styles.detail}>
            <div className={styles.line}>
              <img className={styles.iconBenefit} src={iconBenefit} />
              <Text color="light" size="lg">
                Reuniones Semanales
              </Text>
            </div>
            <Text size="sm" bold="font-light" color="soft">
              ¿Buscas una agencia que brinde resultados a largo plazo? Aprende
              más sobre nuestro programa de 180 días y cómo puede cambiar tu
              práctica dental.
            </Text>
          </div>
          <div className={styles.detail}>
            <div className={styles.line}>
              <img className={styles.iconBenefit} src={iconBenefit} />
              <Text color="light" size="lg">
                Programa Exclusivo (Solo 10 cupos)
              </Text>
            </div>
            <Text size="sm" bold="font-light" color="soft">
              ¿Buscas una agencia que brinde resultados a largo plazo? Aprende
              más sobre nuestro programa de 180 días y cómo puede cambiar tu
              práctica dental.
            </Text>
          </div>
          <div className={styles.detail}>
            <div className={styles.line}>
              <img className={styles.iconBenefit} src={iconBenefit} />
              <Text color="light" size="lg">
                Programa Exclusivo (Solo 10 cupos)
              </Text>
            </div>
            <Text size="sm" bold="font-light" color="soft">
              ¿Buscas una agencia que brinde resultados a largo plazo? Aprende
              más sobre nuestro programa de 180 días y cómo puede cambiar tu
              práctica dental.
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.spainBanner}>
        <img className={styles.spainBannerImg} src={spainBanner} />
        <div className={styles.desc}>
          <div className={styles.line}>
            <span className={styles.markLine} />
            <Text size="ty">NUESTRA UBICACION</Text>
          </div>
          <Text type="title">Trabajamos con clínicas en toda España.</Text>
          <Text size="sm" bold="font-light">
            Nuestras estrategias están diseñadas para ser efectivas con
            pacientes locales.
          </Text>
          <div className={styles.seeMore}>
            <IconTextButton size="100%" colorVariant="yellow">
              Ver Programa
            </IconTextButton>
          </div>
        </div>
      </div>
      <section className={styles.mainContent}>
        <div className={styles.desc}>
          <div className={styles.line}>
            <span className={styles.markLine} />
            <Text size="sm">NUESTRO CONOCIMIENTO</Text>
          </div>
          <Text type="title">Aprende sobre Marketing Dental</Text>
          <Text bold="font-light">¡Disfruta de nuestros ebooks gratuitos!</Text>
          <TextLink>Ver todas las guias</TextLink>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImg} src={EbookImg} />
          <Text color="soft" size="ty">
            EBOOK
          </Text>
          <Text color="light" size="lg">
            Email Marketing
          </Text>
          <Text color="soft" bold="font-light" size="sm">
            Transforma tu clínica dental con nuestros ebooks
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
      </section>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default LandingPage;
