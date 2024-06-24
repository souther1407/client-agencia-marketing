import React from "react";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
import Link from "../../atoms/Link/Link";
import Logo from "../../atoms/Logo/Logo";
import Icon from "../../atoms/Icon/Icon";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__desc}>
        <header className={styles.header}>
          <section className={styles.section}>
            <Logo />
            <Link>
              <Text color="soft" bold="font-light">
                Marketing para Clinicas Dentales
              </Text>
            </Link>
          </section>
          <section className={styles.section}>
            <Text type="subtitle" color="light">
              Recursos Gratis
            </Text>
            <Link>
              <Text color="soft" bold="font-light">
                Biblioteca de Marketing Dental
              </Text>
            </Link>
            <Link>
              <Text color="soft" bold="font-light">
                Pide un Plan Marketing
              </Text>
            </Link>
          </section>
          <section className={styles.section}>
            <Text type="subtitle" color="light">
              Contáctanos
            </Text>

            <Text color="soft" bold="font-light">
              info@inkadentist.com
            </Text>

            <Text color="soft" bold="font-light">
              65730273
            </Text>

            <div className={styles.socialMedia}>
              <Icon type={"wp"} size={"1rem"} color="var(--dark-white)" />
              <Icon type={"facebook"} size={"1rem"} color="var(--dark-white)" />
              <Icon
                type={"instagram"}
                size={"1rem"}
                color="var(--dark-white)"
              />
              <Icon type={"linkedin"} size={"1rem"} color="var(--dark-white)" />
            </div>
          </section>
        </header>
        <div className={styles.separator}></div>
        <div className={styles.copy}>
          <Text color="soft" bold="font-light" size="sm">
            Copyright © {new Date().getFullYear()}, Inkadentist.com | Powered by
            Marketing Dental Club
          </Text>
          <div className={styles.links}>
            <Link>
              <Text color="soft" bold="font-light">
                Politica de Privacidad
              </Text>
            </Link>
            <div className={styles.vbar}></div>
            <Link>
              <Text color="soft" bold="font-light">
                Manejo de Cookies
              </Text>
            </Link>
            <div className={styles.vbar}></div>
            <Link>
              <Text color="soft" bold="font-light">
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
