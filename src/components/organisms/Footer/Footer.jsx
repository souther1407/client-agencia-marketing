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
            <div className={styles.logo}>
              <Logo />
            </div>
          </section>
          <div className={styles.linkSection}>
            <section className={styles.section}>
              <Text color="light" size="ty">
                Recursos Gratis
              </Text>
              <Link>
                <Text color="soft" size="xty" bold="font-light">
                  Nuestro Programa
                </Text>
              </Link>
              <Link>
                <Text color="soft" size="xty" bold="font-light">
                  Aplica a el programa
                </Text>
              </Link>
            </section>
            <section className={styles.section}>
              <Text color="light" size="ty">
                Recursos Gratis
              </Text>
              <Link>
                <Text color="soft" size="xty" bold="font-light">
                  Biblioteca de Marketing Dental
                </Text>
              </Link>
            </section>
            <section className={styles.section}>
              <Text color="light" size="ty">
                Contáctanos
              </Text>

              <Text color="soft" bold="font-light" size="xty">
                info@inkadentist.com
              </Text>

              {/* <div className={styles.socialMedia}>
              <Icon type={"wp"} size={"1rem"} color="var(--dark-white)" />
              <Icon type={"facebook"} size={"1rem"} color="var(--dark-white)" />
              <Icon
                type={"instagram"}
                size={"1rem"}
                color="var(--dark-white)"
              />
              <Icon type={"linkedin"} size={"1rem"} color="var(--dark-white)" />
            </div> */}
            </section>
          </div>
        </header>
        <div className={styles.separator}></div>
        <div className={styles.copy}>
          <Text color="soft" bold="font-light" size="sm">
            Copyright © {new Date().getFullYear()}, hackdental.com
          </Text>
          <div className={styles.links}>
            <Link>
              <Text color="soft" bold="font-light" size="ty">
                Politica de Privacidad
              </Text>
            </Link>
            <div className={styles.vbar}></div>
            <Link>
              <Text color="soft" bold="font-light" size="ty">
                Manejo de Cookies
              </Text>
            </Link>
            <div className={styles.vbar}></div>
            <Link>
              <Text color="soft" bold="font-light" size="ty">
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
