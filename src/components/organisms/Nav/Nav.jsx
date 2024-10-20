import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import Link from "../../atoms/Link/Link";
import Logo from "../../atoms/Logo/Logo";
import IconButton from "../../molecules/IconButton/IconButton";
import Drawer from "../../molecules/Drawer/Drawer";
import Icon from "../../atoms/Icon/Icon";
import TextLink from "../../molecules/TextLink/TextLink";
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

const Nav = ({ hideTopMenu = false }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isTopMenuHidden, setisTopMenuHidden] = useState(false);
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
            <TextLink
              to={LANDING_EBOOKS}
              variant="black"
              textProps={{ size: "sm" }}
            >
              ver todas las guias
            </TextLink>
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
            <div className={styles.developText}>
              <Text bold="font-light" size="ty" textAlign="center">
                Pagina Web Desarrrollada por el equipo de HackDental
              </Text>
            </div>
          </div>
        </div>

        <div
          className={`${styles.contactBanner} ${showContact && styles.show}`}
        >
          <Text color="black">Forma de contacto</Text>
          <Text color="black">info@inkadentist.com</Text>
          <Text color="black">657302731</Text>
        </div>
      </div>
      <div className={styles.elements}>
        {hideTopMenu || isTopMenuHidden || (
          <div className={styles.topMenu}>
            <Text size="sm" color="light" bold="font-light">
              ¡Solo Valido para Octubre! Aceptamos 10 nuevas clínicas en España{" "}
              &nbsp;
              <span className={styles.country}>
                <ES width={"1.4rem"} />
              </span>
            </Text>
          </div>
        )}
        <div className={styles.bottomMenu}>
          <div className={styles.left}>
            <div
              className={styles.logo}
              onhO
              onClick={() => navigate(LANDING_PAGE)}
            >
              <Logo />
            </div>
          </div>
          <div className={styles.right}>
            <div
              onMouseEnter={handleShowResources}
              onClick={handleShowResources}
            >
              <TextLink
                marked={showResources}
                variant="rounded"
                textProps={{ color: "soft", bold: "font-light", size: "ty" }}
              >
                Recursos gratis
              </TextLink>
            </div>
            <TextLink
              variant="rounded"
              to={OUR_PROGRAM}
              textProps={{ color: "soft", bold: "font-light", size: "ty" }}
            >
              Nuestro Programa
            </TextLink>
            <div onMouseEnter={handleShowContact} onClick={handleShowContact}>
              <TextLink
                variant="rounded"
                marked={showContact}
                textProps={{ color: "soft", bold: "font-light", size: "ty" }}
              >
                Contacto
              </TextLink>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.formBtn}>
              <IconTextButton
                colorVariant="primary-rounded"
                textProps={{ size: "ty" }}
                onClick={() => navigate(CONTACT_FORM)}
              >
                Solicita una reunión
              </IconTextButton>
            </div>

            <div className={styles.btnDropdown}>
              <IconButton
                icon="bars"
                size="2rem"
                variant="terciary"
                onClick={() => setShowMobileMenu(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <Drawer show={showMobileMenu} onClose={() => setShowMobileMenu(false)}>
        <div className={styles.mobileMenu}>
          <div className={styles.dropdownMenu}>
            <Link to={OUR_PROGRAM} target="_blank">
              <div className={styles.dropMenuBtn}>
                <Text type="subtitle">Nuestro Programa</Text>
              </div>
            </Link>
          </div>
          <div className={styles.dropdownMenu}>
            <div
              className={`${styles.dropMenuBtn} ${
                dropElements.recursosGratis && styles.focus
              }`}
              onClick={() => handleDropMobileElements("recursosGratis")}
            >
              <Text type="subtitle">Recursos gratis</Text>
            </div>
            <div
              className={`${styles.dropElements} ${
                dropElements.recursosGratis && styles.show
              }`}
            >
              <div className={styles.seeGuides}>
                <TextLink
                  to={LANDING_EBOOKS}
                  variant="black"
                  textProps={{ size: "sm" }}
                >
                  ver todas las guias
                </TextLink>
              </div>
              <Link to={DOWNLOAD_EBOOK} target="_blank">
                <div className={styles.mobileCard}>
                  <img src={imgEbookPrueba} className={styles.mobileImg} />
                  <div className={styles.mobileDesc}>
                    <Text bold="font-light" size="ty">
                      Ebook
                    </Text>
                    <Text color="primary">
                      Marketing Dental: La Guia Definitiva
                    </Text>
                    <Text size="sm">23 Paginas</Text>
                  </div>
                </div>
              </Link>
              <Link to={DOWNLOAD_EBOOK} target="_blank">
                <div className={styles.mobileCard}>
                  <img src={imgEbookPrueba} className={styles.mobileImg} />
                  <div className={styles.mobileDesc}>
                    <Text bold="font-light" size="ty">
                      Ebook
                    </Text>
                    <Text color="primary">
                      Marketing Dental: La Guia Definitiva
                    </Text>
                    <Text size="sm">23 Paginas</Text>
                  </div>
                </div>
              </Link>
              <Link to={DOWNLOAD_EBOOK} target="_blank">
                <div className={styles.mobileCard}>
                  <img src={imgEbookPrueba} className={styles.mobileImg} />
                  <div className={styles.mobileDesc}>
                    <Text bold="font-light" size="ty">
                      Ebook
                    </Text>
                    <Text color="primary">
                      Marketing Dental: La Guia Definitiva
                    </Text>
                    <Text size="sm">23 Paginas</Text>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.dropdownMenu}>
            <div
              className={`${styles.dropMenuBtn} ${
                dropElements.contacto && styles.focus
              }`}
              onClick={() => handleDropMobileElements("contacto")}
            >
              <Text type="subtitle">Contacto</Text>
            </div>
            <div
              className={`${styles.dropElements} ${
                dropElements.contacto && styles.show
              }`}
            >
              <div className={styles.mobileContact}>
                <Text>Forma de Contacto</Text>
                <Text>info@inkadentist.com</Text>
                <Text>657302731</Text>
              </div>
            </div>
          </div>
          <div className={styles.dropdownMenu}>
            <Link to={CONTACT_FORM} target="_blank">
              <div className={styles.dropMenuBtn}>
                <Text type="subtitle">Cuentanos de tu Clinica {">"}</Text>
              </div>
            </Link>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Nav;
