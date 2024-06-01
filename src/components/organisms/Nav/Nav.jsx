import React from "react";
import styles from "./styles.module.css";
import logo from "@assets/react.svg";
import Text from "../../atoms/Text/Text";
import IconButtonText from "../../molecules/IconTextButton/IconTextButton";
import Link from "../../atoms/Link/Link";
import Logo from "../../atoms/Logo/Logo";
import IconButton from "../../molecules/IconButton/IconButton";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <section className={styles.sections}>
        <Link to={"#"} extern>
          <Text>Inicio</Text>
        </Link>
        <Link to={"#"} extern>
          <Text>Ebooks</Text>
        </Link>
        <Link to={"#"} extern>
          <Text>Blog</Text>
        </Link>
      </section>
      <div className={styles.btnContact}>
        <IconButtonText icon="wp" variant="bordered">
          Contáctanos
        </IconButtonText>
      </div>
      <div className={styles.btnDropdown}>
        <IconButton icon="bars" size="2rem" />
      </div>
    </nav>
  );
};

export default Nav;
