import React from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import Link from "../../atoms/Link/Link";
import Logo from "../../atoms/Logo/Logo";
import Icon from "../../atoms/Icon/Icon";
import {
  CONTACT_FORM,
  OUR_PROGRAM,
  LANDING_EBOOKS,
} from "../../../constants/routes";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__desc}>
        <header className={styles.header}>
          <section className={styles.section}>
            <div className={styles.logo}>
              <Logo />
            </div>
          </section>
          <div className={styles.linkSection}>
            <section className={styles.section}>
              <Text color="black" type="subtitle" fontFamily="font-terciary">
                Contacta a un Representante
              </Text>
              <Text bold="font-light" size="sm" s={{ paddingBottom: "12px" }}>
                Te responderemos en menos de 24 horas
              </Text>
              <Link to={CONTACT_FORM}>
                <div
                  style={{ display: "flex", gap: "8px", alignItems: "center" }}
                >
                  <Icon size={"1.2rem"} type={"form"} />
                  <Text color="black">Forma de Contacto</Text>
                </div>
              </Link>
              <Link to={"/"}>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    padding: "12px 0",
                  }}
                >
                  <Icon size={"1.2rem"} type={"email"} />
                  <Text color="black">info@inkadentist.com</Text>
                </div>
              </Link>
              <Link to={"/"}>
                <div
                  style={{ display: "flex", gap: "8px", alignItems: "center" }}
                >
                  <Icon size={"1.2rem"} type={"wp"} />
                  <Text color="black">Whatsapp</Text>
                </div>
              </Link>
            </section>
          </div>
        </header>
        <div className={styles.separator} style={{ marginTop: "32px" }}></div>
        <div className={styles.copy}>
          <Text color="black" bold="font-light" size="sm">
            Copyright © {new Date().getFullYear()}, hackdental.com
          </Text>
          <div className={styles.links}>
            <Link>
              <Text color="black" bold="font-light" size="ty">
                Politica de Privacidad
              </Text>
            </Link>
            <div className={styles.vbar}></div>
            <Link>
              <Text color="black" bold="font-light" size="ty">
                Manejo de Cookies
              </Text>
            </Link>
            <div className={styles.vbar}></div>
            <Link>
              <Text color="black" bold="font-light" size="ty">
                Cosas Legales
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
