import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import Link from "../../atoms/Link/Link";
import Logo from "../../atoms/Logo/Logo";
import IconButton from "../../molecules/IconButton/IconButton";
import Drawer from "../../molecules/Drawer/Drawer";
import Icon from "../../atoms/Icon/Icon";
import TextLink from "../../molecules/TextLink/TextLink";
import Mark from "../../atoms/Mark/Mark";
import {
  DOWNLOAD_EBOOK,
  LANDING_EBOOKS,
  LANDING_PAGE,
  CONTACT_FORM,
  OUR_PROGRAM,
} from "../../../constants/routes";
import { useNavigate } from "react-router-dom";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
import imgEbookPrueba from "@assets/ImgCardsNav.svg";
import { ES } from "country-flag-icons/react/3x2";
import { parseNumberToMonthName } from "../../../utils/parsing";

const Nav = ({ hideTopMenu = false, hideBottomMenu = false }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileContacMenu, setShowMobileContacMenu] = useState(false);
  const [showMobileEbooksMenu, setShowMobileEbooksMenu] = useState(false);
  const [isTopMenuHidden] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowMobileMenu(false);
    });
    return () => window.removeEventListener("resize", window);
  }, []);

  const [showResources, setShowResources] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [dropElements, setDropElements] = useState({
    recursosGratis: false,
    contacto: false,
  });

  const handleShowResources = (e) => {
    if (e.type != "mouseenter" || (e.type === "mouseenter" && !showResources)) {
      setShowResources((prev) => !prev);
      setShowContact(false);
    }
  };

  const handleShowContact = (e) => {
    if (e.type != "mouseenter" || (e.type === "mouseenter" && !showContact)) {
      setShowResources(false);
      setShowContact((prev) => !prev);
    }
  };
  const handleHideDropElements = (e) => {
    if (e.target.id == "shadow-zone") {
      setShowResources(false);
      setShowContact(false);
    }
  };

  const handleDropMobileElements = (name) => {
    setDropElements((prev) => ({ ...prev, [name]: !dropElements[name] }));
  };

  return (
    <nav className={`${styles.nav} ${hideTopMenu && styles.ajust}`}>
      <div
        id="shadow-zone"
        className={`${styles.resoursesDropDown} ${
          (showResources || showContact) && styles.show
        }`}
        onClick={handleHideDropElements}
      >
        <div
          className={`${styles.cardsBanner} ${showResources && styles.show}`}
        >
          <div className={styles.content}>
            <div className={styles.header}>
              <div
                className={styles.seeEbooksBtn}
                onClick={() => navigate(LANDING_EBOOKS)}
              >
                <Text bold="bold" type="subtitle" color="black">
                  Ebooks Gratuitos
                </Text>
                <Icon color="black" size={"1.2rem"} type={"arrow"} />
              </div>
              <Text bold="font-light" size="sm">
                Aprende sobre Marketing dental con nuestros recursos 100%
                Gratuitos
              </Text>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardImgContainer}>
                  <img src={imgEbookPrueba} className={styles.cardImg} />
                </div>
                <Text size="ty" bold="font-light">
                  2024
                </Text>
                <Text size="ty" bold="bold">
                  Marketing Dental: La Guia Definitiva
                </Text>
                <Text size="ty" bold="font-light">
                  Descargar Gratis
                </Text>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.card}>
                <div className={styles.cardImgContainer}>
                  <img src={imgEbookPrueba} className={styles.cardImg} />
                </div>
                <Text size="ty" bold="font-light">
                  2024
                </Text>
                <Text size="ty" bold="bold">
                  Marketing Dental: La Guia Definitiva
                </Text>
                <Text size="ty" bold="font-light">
                  Descargar Gratis
                </Text>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.card}>
                <div className={styles.cardImgContainer}>
                  <img src={imgEbookPrueba} className={styles.cardImg} />
                </div>
                <Text size="ty" bold="font-light">
                  2024
                </Text>
                <Text size="ty" bold="bold">
                  Marketing Dental: La Guia Definitiva
                </Text>
                <Text size="ty" bold="font-light">
                  Descargar Gratis
                </Text>
              </div>
            </div>
            <div
              className={styles.developText}
              onClick={() => navigate(LANDING_EBOOKS)}
            >
              <Text bold="font-light" size="ty" textAlign="center">
                Ir a la bilbioteca de ebooks
              </Text>
              <Icon size={"1rem"} type={"arrow"} />
            </div>
          </div>
        </div>

        <div
          className={`${styles.contactBanner} ${showContact && styles.show}`}
        >
          <div className={styles.content}>
            <Text color="black" type="subtitle" bold="semibold">
              Contacta a un Representante
            </Text>
            <div className={styles.contactBtn}>
              <Text color="black">Forma de contacto</Text>
              <Icon color="black" size={"1rem"} type={"arrow"} />
            </div>
            <div className={styles.contactBtn}>
              <Text color="black">info@inkadentist.com</Text>
              <Icon color="black" size={"1rem"} type={"arrow"} />
            </div>
            <div className={styles.contactBtn}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Icon color="black" size={"1rem"} type={"wp"} />
                <Text color="black"> 657302731</Text>
              </div>
              <Icon color="black" size={"1rem"} type={"arrow"} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.elements}>
        {hideTopMenu || isTopMenuHidden || (
          <div className={styles.topMenu} onClick={() => navigate(OUR_PROGRAM)}>
            <Text size="sm" color="light" bold="font-light">
              ¡Solo Valido para {parseNumberToMonthName(new Date().getMonth())}!
              Aceptamos 10 nuevas clínicas en España &nbsp;
              <span className={styles.country}>
                <ES width={"1.4rem"} />
              </span>
            </Text>
          </div>
        )}
        {hideBottomMenu || (
          <div
            className={`${styles.bottomMenu} ${
              (showContact || showResources) && styles.changeColor
            }`}
          >
            <div className={styles.left}>
              <div
                className={styles.logo}
                onClick={() => navigate(LANDING_PAGE)}
              >
                <Logo />
              </div>
            </div>
            <div className={styles.right}>
              <div
                onMouseEnter={handleShowResources}
                onClick={handleShowResources}
                className={styles.linkContainer}
              >
                <div className={styles.newTag}>
                  <Text size="xxty" color="light">
                    NUEVO
                  </Text>
                </div>
                <TextLink
                  marked={showResources}
                  variant="primary"
                  textProps={{ color: "black", bold: "font-light", size: "ty" }}
                >
                  Recursos gratis
                </TextLink>
              </div>
              <div className={styles.linkContainer}>
                <div className={styles.newTag}>
                  <Text size="xxty" color="light">
                    NUEVO
                  </Text>
                </div>
                <TextLink
                  variant="primary"
                  to={OUR_PROGRAM}
                  textProps={{ color: "black", bold: "font-light", size: "ty" }}
                >
                  Nuestro Programa
                </TextLink>
              </div>

              <div onMouseEnter={handleShowContact} onClick={handleShowContact}>
                <TextLink
                  variant="primary"
                  marked={showContact}
                  textProps={{ color: "black", bold: "font-light", size: "ty" }}
                >
                  Contacto
                </TextLink>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.formBtn}>
                <Link to={CONTACT_FORM} target="_blank">
                  <IconTextButton
                    colorVariant="primary"
                    textProps={{ size: "ty" }}
                  >
                    Solicita una reunión
                  </IconTextButton>
                </Link>
              </div>

              <div className={styles.btnDropdown}>
                <IconButton
                  icon="bars"
                  size="2rem"
                  variant="secondary"
                  onClick={() => setShowMobileMenu(true)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Drawer show={showMobileMenu} onClose={() => setShowMobileMenu(false)}>
        <div className={styles.mobileMenu}>
          <div>
            <div className={styles.dropdownMenu}>
              <Link to={OUR_PROGRAM} target="_blank">
                <div className={styles.dropMenuBtn}>
                  <div className={styles.dropdownTitleDesc}>
                    <div className={styles.dropdownTitle}>
                      <Text type="subtitle" color="black">
                        Nuestro Programa
                      </Text>
                      <Icon color="black" type={"arrow"} size={"2rem"} />
                    </div>
                    <Text>Transforma tu Consultorio en 6 meses.</Text>
                  </div>
                  <Text size="xxlg">
                    <Mark color="primary-bg">Nuevo</Mark>
                  </Text>
                </div>
              </Link>
            </div>
            <div className={styles.dropdownMenu}>
              <div
                className={`${styles.dropMenuBtn} ${
                  dropElements.recursosGratis && styles.focus
                }`}
                onClick={() => setShowMobileEbooksMenu(true)}
              >
                <div className={styles.dropdownTitleDesc}>
                  <div className={styles.dropdownTitle}>
                    <Text type="subtitle" color="black">
                      Recursos Gratis
                    </Text>
                    <Icon color="black" type={"arrow"} size={"2rem"} />
                  </div>
                  <Text>Aprende sobre Marketing dental.</Text>
                </div>
                <Text size="xxlg">
                  <Mark color="primary-bg">Nuevo</Mark>
                </Text>
              </div>
            </div>
            <div className={styles.dropdownMenu}>
              <div
                className={`${styles.dropMenuBtn} ${
                  dropElements.contacto && styles.focus
                }`}
                onClick={() => setShowMobileContacMenu(true)}
              >
                <div className={styles.dropdownTitleDesc}>
                  <div className={styles.dropdownTitle}>
                    <Text type="subtitle" color="black">
                      Contacto
                    </Text>
                    <Icon color="black" type={"arrow"} size={"2rem"} />
                  </div>
                  <Text>Haznos cualquier consulta.</Text>
                </div>
                <Text size="xxlg"></Text>
              </div>
              <div
                className={`${styles.dropElements} ${
                  dropElements.contacto && styles.show
                }`}
              ></div>
            </div>
            {/*   <div className={styles.dropdownMenu}>
              <Link to={CONTACT_FORM} target="_blank">
                <div className={styles.dropMenuBtn}>
                  <Text type="subtitle">Cuentanos de tu Clinica {">"}</Text>
                </div>
              </Link>
            </div> */}
          </div>

          <div className={styles.btns}>
            <IconTextButton size="100%">Solicita una reunion</IconTextButton>
            <IconTextButton
              colorVariant="secondary-dark"
              size="100%"
              icon={"wp"}
            >
              Solicita una reunion
            </IconTextButton>
          </div>
          <Drawer
            show={showMobileEbooksMenu}
            onClose={() => setShowMobileEbooksMenu(false)}
          >
            <div className={`${styles.dropElements} ${styles.show}`}>
              <div className={styles.recursosDesc}>
                <Text type="subtitle" color="black">
                  Ebooks Gratuitos
                </Text>
                <Text size="sm" bold="font-light">
                  Aprende sobre Marketing dental con nuestros recursos 100%
                  Gratuitos
                </Text>
              </div>
              <Link to={DOWNLOAD_EBOOK} target="_blank">
                <div className={styles.mobileCard}>
                  <div className={styles.mobileCardContainer}>
                    <img src={imgEbookPrueba} className={styles.mobileImg} />
                  </div>
                  <div className={styles.mobileDesc}>
                    <Text bold="font-light" size="ty">
                      {new Date().getFullYear()}
                    </Text>
                    <Text color="dark">
                      Marketing Dental: La Guia Definitiva
                    </Text>
                    <Text size="sm">Descargar Gratis</Text>
                  </div>
                </div>
              </Link>
              <Link to={DOWNLOAD_EBOOK} target="_blank">
                <div className={styles.mobileCard}>
                  <div className={styles.mobileCardContainer}>
                    <img src={imgEbookPrueba} className={styles.mobileImg} />
                  </div>

                  <div className={styles.mobileDesc}>
                    <Text bold="font-light" size="ty">
                      {new Date().getFullYear()}
                    </Text>
                    <Text color="dark">
                      Marketing Dental: La Guia Definitiva
                    </Text>
                    <Text size="sm">Descargar Gratis</Text>
                  </div>
                </div>
              </Link>
              <Link to={DOWNLOAD_EBOOK} target="_blank">
                <div className={styles.mobileCard}>
                  <div className={styles.mobileCardContainer}>
                    <img src={imgEbookPrueba} className={styles.mobileImg} />
                  </div>
                  <div className={styles.mobileDesc}>
                    <Text bold="font-light" size="ty">
                      {new Date().getFullYear()}
                    </Text>
                    <Text color="dark">
                      Marketing Dental: La Guia Definitiva
                    </Text>
                    <Text size="sm">Descargar Gratis</Text>
                  </div>
                </div>
              </Link>
            </div>
          </Drawer>
          <Drawer
            show={showMobileContacMenu}
            onClose={() => setShowMobileContacMenu(false)}
          >
            <div className={styles.mobileContact}>
              <Text color="black" size="xxxlg" bold="bold">
                Contacta a un representante
              </Text>
              <Text size="xlg">
                Haznos cualquier consulta, te responderemos en menos de 24
                horas.
              </Text>
              <div className={styles.contactBtn}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Icon color="black" size={"2rem"} type={"form"} />
                  <Text color="black" size="xxlg">
                    {" "}
                    Forma de contacto
                  </Text>
                </div>
              </div>
              <div className={styles.contactBtn}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Icon color="black" size={"2rem"} type={"email"} />
                  <Text color="black" size="xxlg">
                    {" "}
                    info@inkadentist.com
                  </Text>
                </div>
              </div>
              <div className={styles.contactBtn}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Icon color="black" size={"2rem"} type={"wp"} />
                  <Text color="black" size="xxlg">
                    {" "}
                    WhatsApp
                  </Text>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </Drawer>
    </nav>
  );
};

export default Nav;
