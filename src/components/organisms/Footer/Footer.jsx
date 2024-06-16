import React from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import Link from "../../atoms/Link/Link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__desc}>
        <Text color="color-light" size="lg" textAlign="center">
          INKADENTIST.COM
        </Text>
        <Text color="soft-light" bold="light" textAlign="center">
          Copyright © {new Date().getFullYear()}, Inkadentist.com
        </Text>
        <div className={styles.links}>
          <Link>
            <Text>Cosas Legales</Text>
          </Link>
          <Link>
            <Text>Politica de Privacidad</Text>
          </Link>
          <Link>
            <Text>Manejo de Cookies</Text>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
