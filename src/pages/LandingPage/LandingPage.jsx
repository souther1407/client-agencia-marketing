import { useState } from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import NeneArio from "@assets/Nene Ario Landing.svg";
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
import AntesDespues from "@assets/antes despues.svg";

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
      <section className={styles.whoAreWe}>
        <div className={styles.whoAreWe__contents}>
          <Text color="light" type="bigtitle">
            ¿Quienes Somos?
          </Text>
          <Text color="light" bold="font-light">
            Puedes ponerte en contacto con nosotros por correo electrónico a
            jaka@ .design y te responderemos en un plazo de 24 horas.
          </Text>
          <Text color="light" bold="font-light">
            No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
            ponerte en contacto con nosotros por correo electrónico a jaka@
            .design y te responderemos en un plazo de 24 horas.
          </Text>
          <img className={styles.neneArio} src={NeneArio} alt="Nene ario" />

          <hr className={styles.separator} />
          <Text color="light" size="xxlg" bold="bold">
            ¿Qué nos <Mark color="primary-underline">diferencia</Mark> de otras
            agencias?
          </Text>
          <div className={styles.listDiferences}>
            <div className={styles.line}>
              <Icon type={"check"} color="var(--primary)" size={"1rem"} />
              <Text color="light" bold="font-light">
                Enfocamos TODO nuestro tiempo al Marketing de Clínicas Dentales.
              </Text>
            </div>
            <div className={styles.line}>
              <Icon type={"check"} color="var(--primary)" size={"1rem"} />
              <Text color="light" bold="font-light">
                Trabajamos con un numero limitado de consultorio.
              </Text>
            </div>
            <div className={styles.line}>
              <Icon type={"check"} color="var(--primary)" size={"1rem"} />
              <Text color="light" bold="font-light">
                Traemos pacientes de tus tratamientos más rentables.
              </Text>
            </div>
            <div className={styles.line}>
              <Icon type={"check"} color="var(--primary)" size={"1rem"} />
              <Text color="light" bold="font-light">
                Trabajamos con un numero limitado de consultorio.
              </Text>
            </div>
            <div className={styles.line}>
              <Icon type={"check"} color="var(--primary)" size={"1rem"} />
              <Text color="light" bold="font-light">
                Traemos pacientes de tus tratamientos más rentables.
              </Text>
            </div>
          </div>
          <Text color="light" bold="bold" size="lg">
            Puedes ponerte en contacto con nosotros por{" "}
            <Mark color="primary" bold="bold">
              correo electrónico a jaka@ .design
            </Mark>{" "}
            y te responderemos en un plazo de 24 horas.
          </Text>
        </div>
      </section>
      <section className={styles.contactBannerSection}>
        <div className={styles.desc}>
          <div className={styles.stickyContainer}>
            <Text type="bigtitle" color="black" bold="bold">
              ¿Por qué nuevos pacientes no eligen tu clínica dental?
            </Text>
            <IconTextButton
              colorVariant="blue"
              size="fit-content"
              textProps={{ bold: "font-light" }}
            >
              Quiero crecer mi Consultorio {">"}
            </IconTextButton>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <div className={styles.detail__header}>
              <div className={styles.number}>
                <Text bold="semibold" size={"sm"} color="light">
                  1
                </Text>
              </div>
              <Text type="subtitle" bold="semibold" color="black">
                La publicidad de tu consultorio es genérica
              </Text>
            </div>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                Aprende más sobre nuestro programa de 180 días y cómo puede
                cambiar tu práctica dental
              </Text>
              <img className={styles.detail__img} src={AntesDespues} />
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detail__header}>
              <div className={styles.number}>
                <Text bold="semibold" size={"sm"} color="light">
                  1
                </Text>
              </div>
              <Text type="subtitle" bold="semibold" color="black">
                La publicidad de tu consultorio es genérica
              </Text>
            </div>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                Aprende más sobre nuestro programa de 180 días y cómo puede
                cambiar tu práctica dental
              </Text>
              <img className={styles.detail__img} src={AntesDespues} />
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detail__header}>
              <div className={styles.number}>
                <Text bold="semibold" size={"sm"} color="light">
                  1
                </Text>
              </div>
              <Text type="subtitle" bold="semibold" color="black">
                La publicidad de tu consultorio es genérica
              </Text>
            </div>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                Aprende más sobre nuestro programa de 180 días y cómo puede
                cambiar tu práctica dental
              </Text>
              <img className={styles.detail__img} src={AntesDespues} />
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detail__header}>
              <div className={styles.number}>
                <Text bold="semibold" size={"sm"} color="light">
                  1
                </Text>
              </div>
              <Text type="subtitle" bold="semibold" color="black">
                La publicidad de tu consultorio es genérica
              </Text>
            </div>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                Aprende más sobre nuestro programa de 180 días y cómo puede
                cambiar tu práctica dental
              </Text>
              <img className={styles.detail__img} src={AntesDespues} />
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detail__header}>
              <div className={styles.number}>
                <Text bold="semibold" size={"sm"} color="light">
                  1
                </Text>
              </div>
              <Text type="subtitle" bold="semibold" color="black">
                La publicidad de tu consultorio es genérica
              </Text>
            </div>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                Aprende más sobre nuestro programa de 180 días y cómo puede
                cambiar tu práctica dental
              </Text>
              <img className={styles.detail__img} src={AntesDespues} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.spainBanner}>
        <img className={styles.spainBannerImg} src={spainBanner} />
        <div className={styles.desc}>
          <Text type="smalltitle" color="light" bold="bold">
            Trabajamos con clínicas en toda España.
          </Text>
          <Text size="sm" bold="font-light" color="soft">
            Nuestras estrategias están diseñadas para ser efectivas con
            pacientes locales.
          </Text>
        </div>
      </section>
      <section className={styles.mainContent}>
        <div className={styles.desc}>
          <Text type="title" color="black">
            Aprende sobre Marketing Dental
          </Text>
          <Text bold="font-light" size="sm">
            ¡Disfruta de nuestros ebooks gratuitos!
          </Text>
          <TextLink textProps={{ size: "sm" }} to={OUR_PROGRAM} variant="black">
            Ver Programa {">"}
          </TextLink>
          <div className={styles.cardJoinUs}>
            <img src={Medicos} />
            <div className={styles.desc}>
              <Text size="ty" color="black">
                Únete a Andrés, Luis, y los muchos dentistas
              </Text>
              <Text size="ty" bold="font-light">
                que aprenden con nuestros ebooks gratuito
              </Text>
            </div>
          </div>
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
      <section className={styles.prefooter}>
        <PreFooter />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
