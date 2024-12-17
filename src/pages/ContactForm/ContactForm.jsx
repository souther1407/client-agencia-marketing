import React, { useState } from "react";
import styles from "./styles.module.css";
import Text from "../../components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Nav from "../../components/organisms/Nav/Nav";
import Input from "../../components/atoms/Input/Input";
import Select from "../../components/atoms/Select/Select";
import TextArea from "../../components/atoms/Textarea/Textarea";
import Footer from "../../components/organisms/Footer/Footer";
import { sendContactForm } from "../../services/api/sendContactForm";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import Mark from "../../components/atoms/Mark/Mark";
import Flecha3 from "@assets/flecha 3.svg";

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
      <Nav hideBottomMenu />
      {loading && <LoadingScreen />}
      <main className={styles.content}>
        <div className={styles.content_sections}>
          {/*  <img src={Flecha3} className={`${styles.flecha}`} /> */}
          <section className={styles.desc}>
            <Text type="smalltitle" bold="bold" color="black">
              Pide una Auditoria para tu Consultorio
            </Text>
            <div className={styles.detail}>
              <Text size="sm" bold="font-light" color="black">
                Puedes ponerte en contacto con nosotros por Whatsapp o directa a
                <Mark color="underline-blue">jaka@conversion.design</Mark>
              </Text>
              <Text size="sm" bold="font-light" color="black">
                No olvides incluir algunas palabras sobre ti y tu negocio
              </Text>
            </div>
            <div className={styles.infoBtn}>
              <IconTextButton icon={"wp"} colorVariant="secondary-dark">
                Whatsapp
              </IconTextButton>
            </div>
          </section>
          <section className={styles.form}>
            <Text>
              <Mark color="primary-bg">ÚLTIMO PASO</Mark>
            </Text>
            <Text size="xlg" color="black" bold="semibold">
              ¡Estás a un paso de trabajar con nosotros!
            </Text>
            <div className={styles.input_line}>
              <Input
                variant="white"
                id={"first_name"}
                label="Nombre*"
                labelColor="black"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Nombre"
                value={contactForm.first_name}
              />
              <Input
                variant="white"
                id={"last_name"}
                labelColor="black"
                label="Apellido*"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Apellido"
                value={contactForm.last_name}
              />
            </div>
            <div className={styles.input_line}>
              <Input
                variant="white"
                id={"email"}
                label="Email*"
                labelColor="black"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Email"
                value={contactForm.email}
              />
              <Input
                variant="white"
                id={"phone"}
                labelColor="black"
                label="Teléfono*"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Teléfono"
                value={contactForm.phone}
              />
            </div>
            <div className={styles.input_line}>
              <Input
                variant="white"
                id={"clinic_name"}
                labelColor="black"
                label="Nombre de la Clinica Dental*"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Nombre de la Clinica Dental"
                value={contactForm.clinic_name}
              />
              <Input
                variant="white"
                id={"website"}
                label="Sitio Web*"
                labelColor="black"
                onChange={handleChange}
                onError={() => {}}
                placeholder="Sitio Web*"
                value={contactForm.website}
              />
            </div>
            <div className={styles.input_line}>
              <Select
                variant="white"
                labelColor="black"
                elements={["safasf", "eee"]}
                id={"location"}
                onChange={handleChange}
                onError={() => {}}
                placeholder="Porfavor seleccione"
                label="Ubicación de la clínica*"
                icon={"arrowDown"}
                value={contactForm.location}
              />
              <Select
                variant="white"
                labelColor="black"
                elements={["safasf", "eee"]}
                id={"anual_revenues"}
                onChange={handleChange}
                onError={() => {}}
                placeholder="Porfavor seleccione"
                label="Ingresos Anuales*"
                icon={"arrowDown"}
                value={contactForm.anual_revenues}
              />
            </div>
            <TextArea
              variant="white"
              labelColor="black"
              label="Comentarios (opcional)"
              id={"comments"}
              onChange={handleChange}
              value={contactForm.comments}
            />

            <div className={styles.sendBtn}>
              <IconTextButton
                colorVariant="primary"
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
