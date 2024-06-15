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
const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowMobileMenu(false);
    });
    return () => window.removeEventListener("resize", window);
  }, []);
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Logo />
        <TextLink>Guias</TextLink>
        <TextLink>Servicios</TextLink>
      </div>
      <div className={styles.right}>
        <TextLink>Contacto</TextLink>
        <div className={styles.btnContact}>
          <IconButtonText icon="wp" variant="full">
            Contáctanos
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
