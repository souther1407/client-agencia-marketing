import React from "react";
import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import TextLink from "../../components/molecules/TextLink/TextLink";
import Nav from "../../components/organisms/Nav/Nav";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <Nav hideTopMenu />
      <main className={styles.content}>
        <section className={styles.desc}>
          <Text type="subtitle" bold="bold">
            ¡QUEREMOS SER LA AGENCIA DE TU CLÍNICA!
          </Text>
          <Text size="sm">
            Estamos seleccionando solo a{" "}
            <strong>10 dueños de clínicas dentales</strong> para{" "}
            <strong>llenarlas de pacientes con tratamientos premium.</strong> El
            programa dura <strong>6 meses.</strong>
          </Text>
          <div className={styles.benefits}>
            <div className={styles.line}>
              <Icon
                type={"check"}
                color="var(--primary-dark)"
                size={"1.2rem"}
              />
              <Text size="ty" bold="font-light">
                Desarrollo Web para servicios dentales
              </Text>
            </div>
            <div className={styles.line}>
              <Icon
                type={"check"}
                color="var(--primary-dark)"
                size={"1.2rem"}
              />
              <Text size="ty" bold="font-light">
                Google Ads de Tratamientos Premium (Implantes).
              </Text>
            </div>
            <div className={styles.line}>
              <Icon
                type={"check"}
                color="var(--primary-dark)"
                size={"1.2rem"}
              />
              <Text size="ty" bold="font-light">
                Email Marketing Dental
              </Text>
            </div>
            <div className={styles.line}>
              <Icon
                type={"check"}
                color="var(--primary-dark)"
                size={"1.2rem"}
              />
              <Text size="ty" bold="font-light">
                Automatizaciones de Whatsapp para Clinicas Dentales
              </Text>
            </div>
            <div className={styles.line}>
              <Icon
                type={"check"}
                color="var(--primary-dark)"
                size={"1.2rem"}
              />
              <Text size="ty" bold="font-light">
                Creacion de Programas de Referidos para Clinicas
              </Text>
            </div>
          </div>
          <div>
            <IconTextButton icon={"wp"} colorVariant="secondary-dark">
              ¿Tienes dudas?
            </IconTextButton>
          </div>
          <hr className={styles.separator} />
          <Text>Links Utiles</Text>
          <div className={styles.usefullLinks}>
            <TextLink textProps={{ size: "sm" }}>¿Que somos? {">"}</TextLink>
            <TextLink textProps={{ size: "sm" }}>
              Recursos Gratis {">"}
            </TextLink>
          </div>
        </section>
        <section className={styles.form}></section>
      </main>
    </div>
  );
};

export default ContactForm;
