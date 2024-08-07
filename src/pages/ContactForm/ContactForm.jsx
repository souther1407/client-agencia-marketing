import React from "react";
import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import TextLink from "../../components/molecules/TextLink/TextLink";
import Nav from "../../components/organisms/Nav/Nav";
import Input from "../../components/atoms/Input/Input";
import Select from "../../components/atoms/Select/Select";
import TextArea from "../../components/atoms/Textarea/Textarea";
import Footer from "../../components/organisms/Footer/Footer";
const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <Nav hideTopMenu />
      <main className={styles.content}>
        <div className={styles.content_sections}>
          <section className={styles.desc}>
            <Text size="big" bold="bold">
              Contactanos
            </Text>
            <Text size="sm" bold="font-light">
              Solo tenemos <strong>10 cupos</strong> para{" "}
              <strong>nuestro programa anual 2024 de marketing dental.</strong>{" "}
              Completa la forma para recibir más información. En HackDental nos
              enorgullecemos de ser:
            </Text>
            <div className={styles.benefits}>
              <div className={styles.line}>
                <Icon
                  type={"check"}
                  color="var(--primary-dark)"
                  size={"1.2rem"}
                />
                <Text size="ty" bold="font-light">
                  Autoridad en marketing dental
                </Text>
              </div>
              <div className={styles.line}>
                <Icon
                  type={"check"}
                  color="var(--primary-dark)"
                  size={"1.2rem"}
                />
                <Text size="ty" bold="font-light">
                  Expertos en Publicidad de Tratamientos
                </Text>
              </div>
              <div className={styles.line}>
                <Icon
                  type={"check"}
                  color="var(--primary-dark)"
                  size={"1.2rem"}
                />
                <Text size="ty" bold="font-light">
                  Expertos en Desarrollo Web
                </Text>
              </div>
              <div className={styles.line}>
                <Icon
                  type={"check"}
                  color="var(--primary-dark)"
                  size={"1.2rem"}
                />
                <Text size="ty" bold="font-light">
                  Expertos en Google Ads
                </Text>
              </div>
            </div>
            <div className={styles.infoBtn}>
              <IconTextButton icon={"wp"} colorVariant="secondary-dark">
                Whatsapp
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
          <section className={styles.form}>
            <Text size="xlg">
              Completa esta forma para aplicar a nuestro programa.
            </Text>
            <div className={styles.input_line}>
              <Input
                variant="secondary"
                id={"firstName"}
                label="Nombre*"
                onChange={() => {}}
                onError={() => {}}
                placeholder="Nombre"
              />
              <Input
                variant="secondary"
                id={"lastName"}
                label="Apellido*"
                onChange={() => {}}
                onError={() => {}}
                placeholder="Apellido"
              />
            </div>
            <div className={styles.input_line}>
              <Input
                variant="secondary"
                id={"email"}
                label="Email*"
                onChange={() => {}}
                onError={() => {}}
                placeholder="Email"
              />
              <Input
                variant="secondary"
                id={"phone"}
                label="Teléfono*"
                onChange={() => {}}
                onError={() => {}}
                placeholder="Teléfono"
              />
            </div>
            <div className={styles.input_line}>
              <Input
                variant="secondary"
                id={"clinicName"}
                label="Nombre de la Clinica Dental*"
                onChange={() => {}}
                onError={() => {}}
                placeholder="Nombre de la Clinica Dental"
              />
              <Input
                variant="secondary"
                id={"website"}
                label="Sitio Web*"
                onChange={() => {}}
                onError={() => {}}
                placeholder="Sitio Web*"
              />
            </div>
            <div className={styles.input_line}>
              <Select
                variant="secondary"
                elements={["safasf", "eee"]}
                id={"location"}
                onChange={() => {}}
                onError={() => {}}
                placeholder="Porfavor seleccione"
                label="Ubicación de la clínica*"
                icon={"arrow"}
              />
              <Select
                variant="secondary"
                elements={["safasf", "eee"]}
                id={"location"}
                onChange={() => {}}
                onError={() => {}}
                placeholder="Porfavor seleccione"
                label="Ingresos Anuales*"
                icon={"arrow"}
              />
            </div>
            <TextArea
              variant="secondary"
              label="Comentarios (opcional)"
              id={"comments"}
              onChange={() => {}}
            />
            <Text size="sm">
              Nos comunicaremos con usted por correo electrónico en menos de 24
              horas.
            </Text>
            <div className={styles.sendBtn}>
              <IconTextButton colorVariant="primary-dark">
                Quiero Ser Contactado {">"}
              </IconTextButton>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactForm;
