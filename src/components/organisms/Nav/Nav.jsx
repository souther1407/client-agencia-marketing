import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import IconButtonText from "../../molecules/IconTextButton/IconTextButton";
import Link from "../../atoms/Link/Link";
import Logo from "../../atoms/Logo/Logo";
import IconButton from "../../molecules/IconButton/IconButton";
import Drawer from "../../molecules/Drawer/Drawer";
import Icon from "../../atoms/Icon/Icon";
import TextLink from "../../molecules/TextLink/TextLink";
import { DOWNLOAD_EBOOK, LANDING_EBOOKS } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";
import IconTextButton from "../../molecules/IconTextButton/IconTextButton";
const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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

  const handleShowResources = () => {
    setShowResources((prev) => !prev);
    setShowContact(false);
  };

  const handleShowContact = () => {
    setShowResources(false);
    setShowContact((prev) => !prev);
  };

  const handleDropMobileElements = (name) => {
    setDropElements((prev) => ({ ...prev, [name]: !dropElements[name] }));
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.elements}>
        <div className={styles.topMenu}>
          <Icon type={"warning"} size={"2rem"} color="var(--primary)" />
          <Text bold="bold" color="light" textAlign="center">
            ¿QUIERES LLENAR TU CLÍNICA DE PACIENTES?
          </Text>
          <IconTextButton textProps={{ size: "ty" }}>
            Si, Quiero más pacientes
          </IconTextButton>
          <IconTextButton
            variant="bordered-primary"
            textProps={{ size: "ty" }}
            onClick={() => navigate(LANDING_EBOOKS)}
          >
            No, No quiero crecer
          </IconTextButton>
        </div>
        <div className={styles.bottomMenu}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Logo />
            </div>
          </div>
          <div className={styles.right}>
            <TextLink
              textProps={{ color: "soft", bold: "font-light", size: "ty" }}
            >
              ¿Que somos?
            </TextLink>
            <div onClick={handleShowResources}>
              <TextLink
                textProps={{ color: "soft", bold: "font-light", size: "ty" }}
              >
                Recursos gratis
              </TextLink>
            </div>
            <div onClick={handleShowContact}>
              <TextLink
                textProps={{ color: "soft", bold: "font-light", size: "ty" }}
              >
                Contacto
              </TextLink>
            </div>
            <div className={styles.separator}></div>
            <TextLink
              textProps={{ color: "soft", bold: "font-light", size: "ty" }}
            >
              Cuentanos de tu Clinica{" >"}
            </TextLink>
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
            <div className={styles.dropMenuBtn}>
              <Text type="subtitle">¿Que somos?</Text>
            </div>
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
                <Text size="sm">ver todas las guias</Text>
              </div>
              <div className={styles.mobileCard}>
                <img
                  src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg"
                  className={styles.mobileImg}
                />
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
              <div className={styles.mobileCard}>
                <img
                  src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg"
                  className={styles.mobileImg}
                />
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
              <div className={styles.mobileCard}>
                <img
                  src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg"
                  className={styles.mobileImg}
                />
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
            <div className={styles.dropMenuBtn}>
              <Text type="subtitle">Cuentanos de tu Clinica {">"}</Text>
            </div>
          </div>
        </div>
      </Drawer>
      <div
        className={`${styles.resoursesDropDown} ${
          (showResources || showContact) && styles.show
        }`}
      >
        {showResources && (
          <div className={styles.cardsBanner}>
            <div className={styles.content}>
              <Text size="sm">ver todas las guias</Text>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <img
                    src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg"
                    className={styles.cardImg}
                  />
                  <Text size="ty" bold="font-light">
                    Ebook
                  </Text>
                  <Text size="sm">Marketing Dental: La Guia Definitiva</Text>
                  <Text size="ty" bold="font-light">
                    23 Paginas
                  </Text>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.card}>
                  <img
                    src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg"
                    className={styles.cardImg}
                  />
                  <Text size="ty" bold="font-light">
                    Ebook
                  </Text>
                  <Text size="sm">Marketing Dental: La Guia Definitiva</Text>
                  <Text size="ty" bold="font-light">
                    23 Paginas
                  </Text>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.card}>
                  <img
                    src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg"
                    className={styles.cardImg}
                  />
                  <Text size="ty" bold="font-light">
                    Ebook
                  </Text>
                  <Text size="sm">Marketing Dental: La Guia Definitiva</Text>
                  <Text size="ty" bold="font-light">
                    23 Paginas
                  </Text>
                </div>
              </div>
              <Text bold="font-light" size="ty" textAlign="center">
                Pagina Web Desarrrollada por el equipo de HackDental
              </Text>
            </div>
          </div>
        )}
        {showContact && (
          <div className={styles.contactBanner}>
            <Text>Forma de contacto</Text>
            <Text>info@inkadentist.com</Text>
            <Text>657302731</Text>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
