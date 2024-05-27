import React from "react";
import styles from "./styles.module.css";
import logo from "@assets/react.svg";
import Text from "../../atoms/Text/Text";
import IconButtonText from "../../molecules/IconTextButton/IconTextButton";
import Link from "../../atoms/Link/Link";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="logo" className={styles.logo} />
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
      <IconButtonText icon="wp" variant="bordered">
        Contáctanos
      </IconButtonText>
    </nav>
  );
};

export default Nav;
