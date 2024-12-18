import { useEffect, useState } from "react";
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
import Subrayado from "@assets/imagen subrayado verde.svg";
import imgPublicidadCard from "@assets/La publicidad de tu consultorio es genérica.svg";
import imgDiseñoCard from "@assets/El diseño de tu Sitio Web Dental es ineficiente.svg";
import imgEstrategiaCard from "@assets/Tu estrategia de redes sociales es pobre.svg";
import imgReseñasCard from "@assets/Te faltan reseñas positivas online.svg";
import imgRecordatorioCard from "@assets/Tienes un mal sistema de recordatorio de citas.svg";
import ImagenEbook1 from "@assets/Imagen ebook 1.svg";
import ImagenEbookWp from "@assets/imagen ebook de whatsapp.svg";
import imagenDentista from "@assets/foto dentista.svg";

import PartnersCarousel from "../../components/organisms/PartnersCarousel/PartnersCarousel";
const LandingPage = () => {
  const navigate = useNavigate();
  const [showWSMsg, setShowWSMsg] = useState(true);

  /* const [showModalVideo, setShowModalVideo] = useState(false); */
  const [showPopup, setShowPopup] = useState(false);
  /* const handleHideModalVideo = (e) => {
    if (e.target.id == "bg-video-modal") {
      setShowModalVideo(false);
    }
  }; */
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 10 * 1000);
  }, []);
  return (
    <div className={styles.page}>
      {showPopup && (
        <div className={styles.popupContainer}>
          <div className={styles.popupcard}>
            <span
              className={styles.popupMobileCloseBtn}
              onClick={() => setShowPopup(false)}
            >
              <Icon size={"2rem"} type={"close"} color="var(--white)" />
            </span>
            <div className={styles.popImg}>
              <Text color="light" type="title" textAlign="center">
                1O CUPOS
              </Text>
              <img src={imagenDentista} />
            </div>
            <div className={styles.popupDesc}>
              <span
                className={styles.popupCloseBtn}
                onClick={() => setShowPopup(false)}
              >
                <Icon size={"2rem"} type={"close"} color="var(--gray)" />
              </span>

              <Text color="primary">¡SOLO POR ENERO!</Text>
              <Text
                color="black"
                type="subtitle"
                bold="semibold"
                textAlign="center"
              >
                10 cupos para el programa “Consultorio Exitoso”
              </Text>
              <Text size="ty" textAlign="center">
                Transformamos tu consultorio en tan solo 6 meses con nuestro
                método “Consultorio Exitoso” .
              </Text>
              <div className={styles.popupBtns}>
                <IconTextButton
                  size="100%"
                  textProps={{ size: "ty" }}
                  onClick={() => navigate(OUR_PROGRAM)}
                >
                  Ver programa
                </IconTextButton>
                <IconTextButton
                  size="100%"
                  variant="bordered"
                  textProps={{ size: "ty" }}
                  onClick={() => setShowPopup(false)}
                >
                  No gracias
                </IconTextButton>
              </div>
            </div>
          </div>
        </div>
      )}
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
                bold="semibold"
                fontFamily="font-secondary"
                color="black"
              >
                Tu Mejor Opción en Marketing{" "}
                <Mark color="mark" bold="bold">
                  Dental.
                </Mark>
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
              <Text size="sm" bold="font-light" color="black">
                *Solo trabajamos con clínicas que ofrecen implantes.
              </Text>
            </div>
            <img className={styles.banner__img} src={ImgBanner} />
            {/* <ImgBanner /> */}
          </div>
          {/* <div className={styles.partners}>
            <img src={FacebookAds} />
            <img src={Hubspot} />
            <img src={MailChimp} />
            <img src={Zapier} />
          </div> */}
        </section>
      </header>
      <section className={styles.whoAreWe}>
        <div className={styles.partners}>
          <Text textAlign="center">
            En HackDental utilizamos las mejores herramientas de Marketing
          </Text>
          <PartnersCarousel />
        </div>
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
            <Text type="bigtitle" color="black" bold="semibold">
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
              <img className={styles.detail__img} src={imgPublicidadCard} />
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detail__header}>
              <div className={styles.number}>
                <Text bold="semibold" size={"sm"} color="light">
                  2
                </Text>
              </div>
              <Text type="subtitle" bold="semibold" color="black">
                El diseño de tu Sitio Web Dental es ineficiente
              </Text>
            </div>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                Aprende más sobre nuestro programa de 180 días y cómo puede
                cambiar tu práctica dental
              </Text>
              <img className={styles.detail__img} src={imgDiseñoCard} />
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detail__header}>
              <div className={styles.number}>
                <Text bold="semibold" size={"sm"} color="light">
                  3
                </Text>
              </div>
              <Text type="subtitle" bold="semibold" color="black">
                Tu estrategia de redes sociales es pobre
              </Text>
            </div>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                Aprende más sobre nuestro programa de 180 días y cómo puede
                cambiar tu práctica dental
              </Text>
              <img className={styles.detail__img} src={imgEstrategiaCard} />
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detail__header}>
              <div className={styles.number}>
                <Text bold="semibold" size={"sm"} color="light">
                  4
                </Text>
              </div>
              <Text type="subtitle" bold="semibold" color="black">
                Te faltan reseñas positivas online
              </Text>
            </div>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                Aprende más sobre nuestro programa de 180 días y cómo puede
                cambiar tu práctica dental
              </Text>
              <img className={styles.detail__img} src={imgReseñasCard} />
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.detail__header}>
              <div className={styles.number}>
                <Text bold="semibold" size={"sm"} color="light">
                  5
                </Text>
              </div>
              <Text type="subtitle" bold="semibold" color="black">
                Tienes un mal sistema de recordatorio de citas
              </Text>
            </div>
            <hr />
            <div className={styles.desc}>
              <Text size="sm" color="black" bold="font-light">
                Aprende más sobre nuestro programa de 180 días y cómo puede
                cambiar tu práctica dental
              </Text>
              <img className={styles.detail__img} src={imgRecordatorioCard} />
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
        <Text type="bigtitle" textAlign="center" color="black" bold="semibold">
          ¿Quieres descubrir como crecer tu consultorio? Revisa nuestros{" "}
          <Mark color="primary-bg" bold="bold">
            ebooks gratuitos
          </Mark>
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
          <div className={styles.mainContent__card}>
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
          </div>
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
