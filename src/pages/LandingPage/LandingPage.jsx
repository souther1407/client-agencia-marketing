import { useState } from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import NeneArio from "@assets/Nene Ario Landing.svg";
import NeneArioMobile from "@assets/NeneArioMobile.svg";
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

import PreFooter from "../../components/organisms/PreFooter/PreFooter";
import Mark from "../../components/atoms/Mark/Mark";
import FacebookAds from "@assets/Facebook Ads.svg";
import Hubspot from "@assets/Hubspot.svg";
import MailChimp from "@assets/MailChimp.svg";
import Zapier from "@assets/Zapier.svg";
import ImgBanner from "@assets/ImgBanner.svg";

import AntesDespues from "@assets/antes despues.svg";
import Subrayado from "@assets/imagen subrayado.svg";
import ImagenEbook1 from "@assets/Imagen ebook 1.svg";
import ImagenEbookWp from "@assets/imagen ebook de whatsapp.svg";

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
                color="black"
              >
                Tu Mejor Opción en <Mark color="mark">Marketing Dental.</Mark>
              </Text>
              <Text size="sm" bold="font-light" color="black">
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
            <img className={styles.banner__img} src={ImgBanner} />
            {/* <ImgBanner /> */}
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
          <Text color="black" type="bigtitle">
            ¿Quienes Somos?
          </Text>
          <Text color="black" bold="font-light">
            Puedes ponerte en contacto con nosotros por correo electrónico a
            jaka@ .design y te responderemos en un plazo de 24 horas.
          </Text>
          <Text color="black" bold="font-light">
            No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
            ponerte en contacto con nosotros por correo electrónico a jaka@
            .design y te responderemos en un plazo de 24 horas.
          </Text>
          <img className={styles.neneArio} src={NeneArio} alt="Nene ario" />
          <img
            className={`${styles.neneArio} ${styles.mobile}`}
            src={NeneArioMobile}
            alt="Nene ario"
          />
          <hr className={styles.separator} />
          <Text color="black" size="xxlg" bold="bold">
            ¿Qué nos <Mark color="primary-underline">diferencia</Mark> de otras
            agencias?
          </Text>
          <div className={styles.listDiferences}>
            <div className={styles.line}>
              <Icon type={"check"} color="var(--primary)" size={"1rem"} />
              <Text color="black" bold="font-light">
                Enfocamos TODO nuestro tiempo al Marketing de Clínicas Dentales.
              </Text>
            </div>
            <div className={styles.line}>
              <Icon type={"check"} color="var(--primary)" size={"1rem"} />
              <Text color="black" bold="font-light">
                Trabajamos con un numero limitado de consultorio.
              </Text>
            </div>
            <div className={styles.line}>
              <Icon type={"check"} color="var(--primary)" size={"1rem"} />
              <Text color="black" bold="font-light">
                Traemos pacientes de tus tratamientos más rentables.
              </Text>
            </div>
            <div className={styles.line}>
              <Icon type={"check"} color="var(--primary)" size={"1rem"} />
              <Text color="black" bold="font-light">
                Trabajamos con un numero limitado de consultorio.
              </Text>
            </div>
            <div className={styles.line}>
              <Icon type={"check"} color="var(--primary)" size={"1rem"} />
              <Text color="black" bold="font-light">
                Traemos pacientes de tus tratamientos más rentables.
              </Text>
            </div>
          </div>
          <Text color="black" bold="bold" size="lg">
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
              ¿Por qué nuevos pacientes{" "}
              <span className={styles.subrayado}>
                no eligen <img src={Subrayado} />
              </span>{" "}
              tu clínica dental?
            </Text>

            <div className={styles.quieroHacerCrecerBtn}>
              <IconTextButton
                colorVariant="primary"
                size="100%"
                textProps={{ bold: "font-light" }}
              >
                Quiero crecer mi Consultorio {">"}
              </IconTextButton>
            </div>
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
      <section className={styles.spainLocation}>
        <Text type="bigtitle" textAlign="center" color="black" bold="bold">
          ¿Necesitas una Agencia especializada en Marketing Dental?
        </Text>
        <div className={styles.spainLocation__desc}>
          <Text color="black" bold="font-light">
            Puedes ponerte en contacto con nosotros por correo electrónico a
            jaka@ .design y te responderemos en un plazo de 24 horas.
          </Text>
          <Text color="black" bold="font-light">
            No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
            ponerte en contacto con nosotros por correo electrónico a jaka@
            .design.
          </Text>
        </div>
        <div className={styles.spainLocation__card}>
          <div className={styles.spainLocation__card__elements}>
            <Text size="big" color="dark" bold="semibold">
              Si tu consultorio dental:
            </Text>
            <hr className={styles.spainLocation__card__separator} />
            <div className={styles.spainLocation__items}>
              <div className={styles.spainLocation__items__item}>
                <Icon
                  type={"rightArrow"}
                  size={"2rem"}
                  color="var(--primary)"
                />
                <Text size="lg" color="dark">
                  Está ubicado en España.
                </Text>
              </div>
              <div className={styles.spainLocation__items__item}>
                <Icon
                  type={"rightArrow"}
                  size={"2rem"}
                  color="var(--primary)"
                />
                <Text size="lg" color="dark">
                  Factura 10,000 euros o más al mes
                </Text>
              </div>
              <div className={styles.spainLocation__items__item}>
                <Icon
                  type={"rightArrow"}
                  size={"2rem"}
                  color="var(--primary)"
                />
                <Text size="lg" color="dark">
                  Quiere crecer rápidamente en el 2025.
                </Text>
              </div>
            </div>
            <div className={styles.spainLocation__btn}>
              <IconTextButton colorVariant="primary" size="100%">
                Solicita una reunión
              </IconTextButton>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mainContent}>
        <Text type="bigtitle" textAlign="center" color="black" bold="bold">
          ¿Quieres descubrir como crecer tu consultorio? Revisa nuestros{" "}
          <Mark color="primary-bg">ebooks gratuitos</Mark>
        </Text>
        <div className={styles.mainContent__desc}>
          <Text color="black" bold="font-light" textAlign="center">
            Si tienes una práctica dental que factura más de $10,000 euros al
            mes y quieres llevarla al siguiente nivel, no dudes en contactarnos.
            Somos expertos en Marketing Dental.
          </Text>
        </div>

        <div className={styles.mainContent__cards}>
          <div className={styles.mainContent__card}>
            <div className={styles.mainContent__card__desc}>
              <Text bold="semibold">2024</Text>
              <Text type="title" bold="bold" color="black">
                7 Secretos del Marketing Dental
              </Text>
              <Text size="sm">
                Save thousands of engineering hours by using the NexHealth
                Synchronizer API.
              </Text>
              <div className={styles.mainContent__card__btn}>
                <IconTextButton colorVariant="blue" size="100%">
                  Descargar Ahora
                </IconTextButton>
              </div>
            </div>
            <img src={ImagenEbook1} />
          </div>
          {/*  <div className={styles.mainContent__card}>
            <div className={styles.mainContent__card__desc}>
              <Text bold="semibold" color="primary">
                2024
              </Text>
              <Text type="title" bold="bold" color="black">
                WhatsApp para Clinicas Dentales
              </Text>
              <Text size="sm">
                Save thousands of engineering hours by using the NexHealth
                Synchronizer API.
              </Text>
              <div className={styles.mainContent__card__btn}>
                <IconTextButton colorVariant="primary-rounded" size="100%">
                  Descargar Ahora
                </IconTextButton>
              </div>
            </div>
            <img src={ImagenEbookWp} />
          </div> */}
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
