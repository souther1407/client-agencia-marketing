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
        <div className={styles.left}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <TextLink textProps={{ color: "soft" }}>Guias</TextLink>
          <TextLink textProps={{ color: "soft" }}>Servicios</TextLink>
          <TextLink textProps={{ color: "soft" }}>Contacto</TextLink>
        </div>
        <div className={styles.right}>
          <div className={styles.wsBtn}>
            <IconButton icon="wp" size="2rem" />
          </div>
          <div className={styles.btnContact}>
            <IconButtonText
              icon="wp"
              variant="full"
              onClick={() => navigate(DOWNLOAD_EBOOK)}
            >
              Obten un plan gratis
            </IconButtonText>
          </div>
        </div>
        <div className={styles.btnDropdown}>
          <IconButton
            icon="bars"
            size="2rem"
            onClick={() => setShowMobileMenu(true)}
          />
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
