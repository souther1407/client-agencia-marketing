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
import { DOWNLOAD_EBOOK } from "../../../constants/routes";
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
          <IconTextButton variant="bordered-primary" textProps={{ size: "ty" }}>
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
              Recursos gratis
            </TextLink>
            <TextLink
              textProps={{ color: "soft", bold: "font-light", size: "ty" }}
            >
              Programa de socios
            </TextLink>
            <TextLink
              textProps={{ color: "soft", bold: "font-light", size: "ty" }}
            >
              Contacto
            </TextLink>
            <div className={styles.separator}></div>
            <TextLink
              textProps={{ color: "soft", bold: "font-light", size: "ty" }}
            >
              <div className={styles.iconWS}>
                <Icon size={"1rem"} color="var(--white)" type={"wp"} />{" "}
              </div>
              +51949503751
            </TextLink>
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
      </div>
      <Drawer show={showMobileMenu} onClose={() => setShowMobileMenu(false)}>
        <div className={styles.mobileMenu}>
          <Link to={"#"} extern>
            <div className={styles.element}>
              <Text>Inicio</Text>
              <Icon type="arrow" size={"1.5rem"} />
            </div>
          </Link>
          <Link to={"#"} extern>
            <div className={styles.element}>
              <Text>Ebooks</Text>
              <Icon type="arrow" size={"1.5rem"} />
            </div>
          </Link>
          <Link to={"#"} extern>
            <div className={styles.element}>
              <Text>Blog</Text>
              <Icon type="arrow" size={"1.5rem"} />
            </div>
          </Link>
          <IconButtonText icon={"wp"}>Contáctanos</IconButtonText>
        </div>
      </Drawer>
    </nav>
  );
};

export default Nav;
