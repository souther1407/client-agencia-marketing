import React, { useEffect, useState } from "react";
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
import { sendContactForm } from "../../services/api/sendContactForm";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    clinic_name: "",
    website: "",
    location: "",
    anual_revenues: "",
    comments: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (id, value) => {
    setContactForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSendFormData = async () => {
    try {
      setLoading(true);
      await sendContactForm(contactForm);
      alert("Datos enviados!");
    } catch (error) {
      alert("hubo un error al enviar los datos, por favor intente nuevamente");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.contactForm}>
      <Nav hideTopMenu />
      {loading && <LoadingScreen />}
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
              <TextLink variant="black" textProps={{ size: "sm" }}>
                ¿Que somos? {">"}
              </TextLink>
              <TextLink variant="black" textProps={{ size: "sm" }}>
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
                id={"first_name"}
                label="Nombre*"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Nombre"
                value={contactForm.first_name}
              />
              <Input
                variant="secondary"
                id={"last_name"}
                label="Apellido*"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Apellido"
                value={contactForm.last_name}
              />
            </div>
            <div className={styles.input_line}>
              <Input
                variant="secondary"
                id={"email"}
                label="Email*"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Email"
                value={contactForm.email}
              />
              <Input
                variant="secondary"
                id={"phone"}
                label="Teléfono*"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Teléfono"
                value={contactForm.phone}
              />
            </div>
            <div className={styles.input_line}>
              <Input
                variant="secondary"
                id={"clinic_name"}
                label="Nombre de la Clinica Dental*"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Nombre de la Clinica Dental"
                value={contactForm.clinic_name}
              />
              <Input
                variant="secondary"
                id={"website"}
                label="Sitio Web*"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Sitio Web*"
                value={contactForm.website}
              />
            </div>
            <div className={styles.input_line}>
              <Select
                variant="secondary"
                elements={["safasf", "eee"]}
                id={"location"}
                onChange={handleChange}
                onError={() => {}}
                placeholder="Porfavor seleccione"
                label="Ubicación de la clínica*"
                icon={"arrow"}
                value={contactForm.location}
              />
              <Select
                variant="secondary"
                elements={["safasf", "eee"]}
                id={"anual_revenues"}
                onChange={handleChange}
                onError={() => {}}
                placeholder="Porfavor seleccione"
                label="Ingresos Anuales*"
                icon={"arrow"}
                value={contactForm.anual_revenues}
              />
            </div>
            <TextArea
              variant="secondary"
              label="Comentarios (opcional)"
              id={"comments"}
              onChange={handleChange}
              value={contactForm.comments}
            />
            <Text size="sm">
              Nos comunicaremos con usted por correo electrónico en menos de 24
              horas.
            </Text>
            <div className={styles.sendBtn}>
              <IconTextButton
                colorVariant="primary-dark"
                onClick={handleSendFormData}
              >
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
