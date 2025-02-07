import React, { useState } from "react";
import styles from "./ourProgram.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import imgVideo from "@assets/Foto video.gif";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Link from "../../components/atoms/Link/Link";
import Input from "../../components/atoms/Input/Input";
import TextArea from "../../components/atoms/Textarea/Textarea";
import { useNavigate } from "react-router-dom";
import { CONTACT_FORM } from "../../constants/routes";
import Mark from "../../components/atoms/Mark/Mark";
import Nene from "@assets/imagen dentista programa.svg";
import Select from "../../components/atoms/Select/Select";
import FlechaNuestroPrograma from "@assets/nuestro metodo.svg";
import Flecha1 from "@assets/flecha 1.svg";

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
        <img
          src={FlechaNuestroPrograma}
          className={`${styles.flecha} ${styles.nuestroPrograma}`}
        />
        <div className={styles.elements}>
          <Text
            type="bigtitle"
            color="black"
            bold="semibold"
            textAlign="center"
          >
            Desbloquea el potencial de tu <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Mark color="primary-bg-triangular">Consultorio</Mark>
            </div>
          </Text>

          <div className={styles.videoContainer}>
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
            <form className={styles.formContacto}>
              <Text textAlign="center">
                <Mark color="primary-bg">
                  **DUEÑOS DE CONSULTORIOS DENTALES!**
                </Mark>
              </Text>
              <Text
                type="subtitle"
                color="black"
                bold="semibold"
                textAlign="center"
              >
                Reunete con nosotros y <br />
                comentanos tus necesidades
              </Text>
              <div className={styles.inputs}>
                <div className={styles.inputLine}>
                  <Input
                    id={"name"}
                    label="Nombre*"
                    variant="primary-bordered"
                    placeholder="Nombre*"
                    labelColor="black"
                    onChange={() => {}}
                    onError={() => {}}
                  />
                  <Input
                    id={"lastName"}
                    label="Apellido*"
                    variant="primary-bordered"
                    placeholder="Apellido*"
                    labelColor="black"
                    onChange={() => {}}
                    onError={() => {}}
                  />
                </div>
                <Input
                  id={"email"}
                  label="Email*"
                  variant="primary-bordered"
                  placeholder="Email*"
                  labelColor="black"
                  onChange={() => {}}
                  onError={() => {}}
                />
                <Input
                  id={"phone"}
                  label="Teléfono*"
                  variant="primary-bordered"
                  placeholder="Teléfono*"
                  labelColor="black"
                  onChange={() => {}}
                  onError={() => {}}
                />
                <div className={styles.nextStepBtn}>
                  <IconTextButton>Siguiente Paso</IconTextButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.ventaHumo}>
          <div className={styles.header}>
            <Text bold="font-light">
              Puedes ponerte en contacto con nosotros por correo electrónico a
              jaka@ .design y te responderemos en un plazo de 24 horas.
            </Text>

            <Text bold="font-light">
              No olvides incluir algunas palabras sobre ti y tu negocio.
            </Text>
          </div>
          <div className={styles.subsection}>
            <Text
              type="bigtitle"
              fontSize="2.3333rem"
              color="black"
              textAlign="center"
              bold="semibold"
            >
              Resuelve los <Mark color="primary-bg-triangular">problemas </Mark>{" "}
              que limitan el crecimiento de tu práctica
            </Text>
            <Text bold="font-light">
              Puedes ponerte en contacto con nosotros por correo electrónico a
              jaka@ .design y te responderemos en un plazo de 24 horas.
            </Text>
            <Text bold="font-light">
              No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
              ponerte en contacto con nosotros por correo electrónico a jaka@
              .design y te responderemos en un plazo de 24 horas.
            </Text>
            <img src={Nene} className={styles.neneArio} />
          </div>
        </div>
        <div className={styles.sectionHorrible}>
          <div className={styles.subsection}>
            <Text
              type="bigtitle"
              fontSize="2.3333rem"
              color="light"
              textAlign="center"
              bold="bold"
            >
              Los{" "}
              <Mark bold="bold" color="error-bg-triangular">
                3 errores{" "}
              </Mark>{" "}
              más comunes que los consultorios dentales cometen.
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
            <hr />
            <Text color="light" bold="bold" type="subtitle" textAlign="center">
              Aquí es donde la mayoría de consultorios se equivocan:
            </Text>
            <div className={styles.errors}>
              <div className={styles.error}>
                <Icon size={"2rem"} color="red" type={"closeCircle"} />
                <Text color="light" bold="font-light">
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a <Mark color="marked">jaka@ .design</Mark> y te responderemos
                  en un plazo de 24 horas.
                </Text>
              </div>
              <div className={styles.error}>
                <Icon size={"2rem"} color="red" type={"closeCircle"} />
                <Text color="light" bold="font-light">
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a <Mark color="marked">jaka@ .design</Mark> y te responderemos
                  en un plazo de 24 horas.
                </Text>
              </div>
              <div className={styles.error}>
                <Icon size={"2rem"} color="red" type={"closeCircle"} />
                <Text color="light" bold="font-light">
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a <Mark color="marked">jaka@ .design</Mark> y te responderemos
                  en un plazo de 24 horas.
                </Text>
              </div>
              <div className={styles.error}>
                <Icon size={"2rem"} color="red" type={"closeCircle"} />
                <Text color="light" bold="font-light">
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a <Mark color="marked">jaka@ .design</Mark> y te responderemos
                  en un plazo de 24 horas.
                </Text>
              </div>
            </div>
          </div>
          <div className={styles.cardMeet}>
            <img
              src={Flecha1}
              className={`${styles.flecha} ${styles.flecha1Izquierda}`}
            />
            <img
              src={Flecha1}
              className={`${styles.flecha} ${styles.flecha1Derecha} `}
            />
            <Text
              type="title"
              size="big"
              color="black"
              textAlign="center"
              bold="semibold"
              fontSize="2.3333rem"
            >
              ¿Abrirías{" "}
              <Mark color="primary-bg" bold="bold">
                más consultorios
              </Mark>{" "}
              si supieras cómo atraer más pacientes?
            </Text>
            <div className={styles.cardMeetDetail}>
              <Text bold="font-light" color="black">
                Puedes ponerte en contacto con nosotros por correo electrónico a
                jaka@ .design y te responderemos en un plazo de 24 horas.
              </Text>
              <Text bold="font-light" color="black">
                No olvides incluir algunas palabras sobre ti y tu negocio.
                Puedes ponerte en contacto con nosotros por correo electrónico a
                jaka@ .design y te responderemos en un plazo de 24 horas.
              </Text>
              <div className={styles.btnMeet}>
                <IconTextButton size="100%">
                  Solicita una reunión
                </IconTextButton>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.comoFunciona}>
          <Text type="title" color="black" bold="semibold" textAlign="center">
            ¿Cuánto más vas a postergar el éxito de
            <br /> tu consultorio dental?
          </Text>
          <div className={styles.subsection}>
            {/*  <img
              src={Flecha1}
              className={`${styles.flecha} ${styles.flecha2}`}
            /> */}
            <Text bold="font-light" color="black">
              Puedes ponerte en contacto con nosotros por c y te responderemos
              en un plazo de 24 horas.
            </Text>
            <Text bold="font-light" color="black">
              No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
              ponerte en contacto con nosotros por correo electrónico a jaka@
              .design y te responderemos en un plazo de 24 horas.
            </Text>
            <hr className={styles.separator} />
            <Text type="smalltitle" color="black" textAlign="center">
              Como aplicar a nuestro programa:
            </Text>
            <ul className={styles.list}>
              <li className={styles.element}>
                <Text size="ty">
                  <Mark color="primary-bg">#1</Mark>
                </Text>
                <Text>
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a jaka@ .design y te responderemos en un plazo de 24 horas.
                </Text>
              </li>
              <li className={styles.element}>
                <Text size="ty">
                  <Mark color="primary-bg">#2</Mark>
                </Text>
                <Text bold="font-light" color="black">
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a jaka@ .design y te responderemos en un plazo de 24 horas.
                </Text>
              </li>
              <li className={styles.element}>
                <Text size="ty">
                  <Mark color="primary-bg">#3</Mark>
                </Text>
                <Text bold="font-light" color="black">
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a jaka@ .design y te responderemos en un plazo de 24 horas.
                </Text>
              </li>
              <li className={styles.element}>
                <Text size="ty">
                  <Mark color="primary-bg">#4</Mark>
                </Text>
                <Text bold="font-light" color="black">
                  Puedes ponerte en contacto con nosotros por correo electrónico
                  a jaka@ .design y te responderemos en un plazo de 24 horas.
                </Text>
              </li>
            </ul>
          </div>
        </div>
        <section className={styles.contact}>
          {/*  <img src={Flecha2} className={`${styles.flecha} ${styles.flecha3}`} /> */}
          <div className={styles.desc}>
            <Text type="title" color="light" bold="bold">
              Pide una Auditoria para tu Consultorio
            </Text>
            <Text color="light" bold="font-light">
              Puedes ponerte en contacto con nosotros por correo electrónico a
              jaka@ .design y te responderemos en un plazo de 24 horas.
            </Text>
            <Text color="light" bold="font-light">
              No olvides incluir algunas palabras sobre ti y tu negocio. Puedes
              ponerte en nosotros por{" "}
              <Mark color="submarked-blue-light">
                Aceptamos 10 nuevas clínicas
              </Mark>{" "}
              contacto con nosotros. Aceptamos 10 nuevas clínicas
            </Text>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.form}>
              <Text>
                <Mark color="primary-bg">ÚLTIMO PASO</Mark>
              </Text>
              <div className={styles.formLine}>
                <Input
                  label="Nombre*"
                  variant="white"
                  labelColor="black"
                  id={"firstName"}
                  placeholder="Nombre"
                  onChange={() => {}}
                  onError={() => {}}
                />
                <Input
                  label="Apellido*"
                  variant="white"
                  placeholder="Apellido"
                  labelColor="black"
                  id={"lasttName"}
                  onChange={() => {}}
                  onError={() => {}}
                />
              </div>
              <div className={styles.formLine}>
                <Input
                  label="Email*"
                  variant="white"
                  labelColor="black"
                  placeholder="Email"
                  id={"email"}
                  onChange={() => {}}
                  onError={() => {}}
                />
                <Input
                  label="Teléfono*"
                  placeholder="Teléfono"
                  id={"phone"}
                  variant="white"
                  labelColor="black"
                  onChange={() => {}}
                  onError={() => {}}
                />
              </div>
              <div className={styles.formLine}>
                <Input
                  label="Pais*"
                  variant="white"
                  placeholder="Pais"
                  labelColor="black"
                  id={"location"}
                  onChange={() => {}}
                  onError={() => {}}
                />
                {/*  <Input
                  label="Yo Quiero*"
                  id={"objetive"}
                  variant="black"
                  labelColor="light"
                  onChange={() => {}}
                  onError={() => {}}
                /> */}
                <div>
                  <Select
                    onChange={() => {}}
                    onError={() => {}}
                    id={"objetive"}
                    elements={["ASFAFS"]}
                    label={"Yo Quiero*"}
                    variant="white"
                    labelColor="black"
                    placeholder={"Elegir Opción"}
                    icon={"arrowDown"}
                  />
                </div>
              </div>
              <TextArea
                label="Comentarios (opcional)"
                labelColor="black"
                variant="white"
                id={"comments"}
                placeholder="Ingresa tus comentarios aqui."
                errorValue={() => {}}
                onChange={() => {}}
              />
              <div className={styles.btnEnviar}>
                <IconTextButton
                  colorVariant="primary"
                  textProps={{ size: "sm" }}
                >
                  Quiero ser Contactado
                </IconTextButton>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <Text color="light" bold="font-light">
            Copyright © {new Date().getFullYear()}, HackDental.com
          </Text>
          <div className={styles.links}>
            <Link to={"#"}>
              <Text color="soft-light" size="ty" bold="font-light">
                Politica de Privacidad
              </Text>
            </Link>
            <hr className={styles.separator_footer} />
            <Link to={"#"}>
              <Text color="soft-light" size="ty" bold="font-light">
                Politica de Privacidad
              </Text>{" "}
            </Link>
            <hr className={styles.separator_footer} />
            <Link to={"#"}>
              <Text color="soft-light" size="ty" bold="font-light">
                Politica de Privacidad
              </Text>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default OurProgram;
