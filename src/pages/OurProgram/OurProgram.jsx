import React, { useState } from "react";
import styles from "./ourProgram.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import imgVideo from "@assets/imgVideo.svg";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import iconBenefit from "@assets/iconoBeneficio.svg";
import Dropdown from "../../components/molecules/Dropdown/Dropdown";
import Input from "../../components/atoms/Input/Input";
import TextArea from "../../components/atoms/Textarea/Textarea";
import { useNavigate } from "react-router-dom";
import { CONTACT_FORM } from "../../constants/routes";
import Prefooter from "../../components/organisms/PreFooter/PreFooter";
import Footer from "../../components/organisms/Footer/Footer";
import Mark from "../../components/atoms/Mark/Mark";
import Nene from "@assets/NeneArio.svg";
const OurProgram = () => {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const navigate = useNavigate();
  const handleHideModalVideo = (e) => {
    if (e.target.id == "bg-video-modal") {
      setShowModalVideo(false);
    }
  };

  return (
    <div className={styles.page}>
      <Nav />
      <header className={styles.banner}>
        <div className={styles.elements}>
          <Text type="bigtitle" color="light">
            ¿Cuánto dinero estás dejando sobre la mesa?
          </Text>
          <Text textAlign="center" bold="font-light" color="light">
            ¿Tiene una práctica dental que factura más de $10,000 euros al mes?
            Registrate <br /> al programa de marketing de HackDental y&nbsp;
            <Mark color="primary">
              desbloquea el crecimiento de tu clínica dental.
            </Mark>
          </Text>

          <div className={styles.videoDrawer}>
            <img className={styles.videoImg} src={imgVideo} />
            <button
              className={styles.videoPlayBtn}
              onClick={() => setShowModalVideo(true)}
            >
              <Icon size={"1.5rem"} color="var(--white)" type={"play"} />
            </button>
            <div
              id="bg-video-modal"
              className={`${styles.modalVideo} ${
                showModalVideo && styles.show
              }`}
              onClick={handleHideModalVideo}
            >
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/Fu4GHmyvDk8?si=-ugwjpi28KLqfGSM?controls=0&showinfo=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.ventaHumo}>
          <div className={styles.header}>
            <Text fontFamily="font-light">
              Puedes ponerte en contacto con nosotros por correo electrónico a
              jaka@conversion.design y te responderemos en un plazo de 24 horas.
            </Text>

            <Text>
              No olvides incluir algunas palabras sobre ti y tu negocio.
            </Text>
          </div>
          <div className={styles.subsection}>
            <Text type="bigtitle" color="black" textAlign="center" bold="bold">
              Resuelve los{" "}
              <Mark color="submarked-blue" bold="bold">
                problemas que limitan
              </Mark>{" "}
              el crecimiento de tu práctica
            </Text>
            <Text>
              Puedes ponerte en contacto con nosotros por correo electrónico a
              jaka@ .design y te responderemos en un plazo de 24 horas.
            </Text>
            <Text>
              No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
              ponerte en contacto con nosotros por correo electrónico a jaka@
              .design y te responderemos en un plazo de 24 horas.
            </Text>
            <img src={Nene} className={styles.neneArio} />
          </div>
        </div>
        <div className={styles.sectionHorrible}>
          <div className={styles.subsection}>
            <Text type="bigtitle" color="light" textAlign="center" bold="bold">
              Los{" "}
              <Mark bold="bold" color="error">
                3 errores más comunes
              </Mark>{" "}
              que los consultorios dentales cometen.
            </Text>
            <Text color="light" bold="font-light">
              Puedes ponerte en contacto con nosotros por correo electrónico a
              jaka@ .design y te responderemos en un plazo de 24 horas.
            </Text>
            <Text color="light" bold="font-light">
              No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
              ponerte en contacto con nosotros por correo electrónico a{" "}
              <Mark bold="bold" color="marked">
                jaka@ .design
              </Mark>{" "}
              y te responderemos en un plazo de 24 horas.
            </Text>
            <Text color="light" bold="font-light">
              No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
              ponerte en contacto con nosotros por correo electrónico a jaka@
              .design y te responderemos en un plazo de 24 horas.
            </Text>
          </div>
        </div>
        <section className={styles.contact}>
          <div className={styles.desc}>
            <div className={styles.line}>
              <span className={`${styles.markLine} ${styles.primary}`} />
              <Text size="sm" color="light" bold="font-light">
                SERVICIO SIN-COSTO
              </Text>
            </div>
            <Text size="xxlg" color="light">
              Conversa con uno de nuestros expertos en Marketing Dental.
            </Text>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.form}>
              <div className={styles.formLine}>
                <Input
                  label="Nombre*"
                  variant="black"
                  labelColor="light"
                  id={"firstName"}
                  placeholder="Nombre"
                  onChange={() => {}}
                  onError={() => {}}
                />
                <Input
                  label="Apellido*"
                  variant="black"
                  placeholder="Apellido"
                  labelColor="light"
                  id={"lasttName"}
                  onChange={() => {}}
                  onError={() => {}}
                />
              </div>
              <div className={styles.formLine}>
                <Input
                  label="Email*"
                  variant="black"
                  labelColor="light"
                  placeholder="Email"
                  id={"email"}
                  onChange={() => {}}
                  onError={() => {}}
                />
                <Input
                  label="Teléfono*"
                  placeholder="Teléfono"
                  id={"phone"}
                  variant="black"
                  labelColor="light"
                  onChange={() => {}}
                  onError={() => {}}
                />
              </div>
              <div className={styles.formLine}>
                <Input
                  label="Pais*"
                  variant="black"
                  placeholder="Pais"
                  labelColor="light"
                  id={"location"}
                  onChange={() => {}}
                  onError={() => {}}
                />
                <Input
                  label="Yo Quiero*"
                  id={"objetive"}
                  variant="black"
                  labelColor="light"
                  onChange={() => {}}
                  onError={() => {}}
                />
              </div>
              <TextArea
                label="Comentarios (opcional)"
                labelColor="light"
                variant="black"
                id={"comments"}
                placeholder="Ingresa tus comentarios aqui."
                errorValue={() => {}}
                onChange={() => {}}
              />
              <div className={styles.btnEnviar}>
                <IconTextButton colorVariant="white" textProps={{ size: "sm" }}>
                  Quiero ser Contactado
                </IconTextButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Prefooter />
      <Footer />
    </div>
  );
};

export default OurProgram;
