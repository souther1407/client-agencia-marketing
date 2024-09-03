import React, { useState } from "react";
import styles from "./ourProgram.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import imgVideo from "@assets/imgVideo.svg";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import iconBenefit from "@assets/iconoBeneficio.svg";

const OurProgram = () => {
  const [showModalVideo, setShowModalVideo] = useState(false);

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
          <Text type="title" color="light">
            ¿Cómo funciona?
          </Text>
          <Text bold="font-light" color="light">
            Haz crecer tu práctica sin esfuerzo con nuestro método comprobado
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
        <section className={styles.header}>
          <div className={styles.title}>
            <Text size="ty">UN PROGRAMA COMPLETO</Text>
            <Text size="xxlg">
              Resuelve los problemas que limitan el crecimiento de tu práctica
            </Text>
          </div>
          <div className={styles.applyBtn}>
            <IconTextButton
              textProps={{ size: "sm", bold: "font-light" }}
              colorVariant="black"
              size="100%"
            >
              Aplicar Ahora
            </IconTextButton>
          </div>
        </section>
        <section className={styles.benefits}>
          <div className={styles.benefit}>
            <img className={styles.iconBenefit} src={iconBenefit} />
            <Text>Marketing Dental</Text>
            <Text bold="font-light" size="sm">
              Nuevos pacientes asegurados cada mes.Nuevos pacientes asegurados
              cada mes.
            </Text>
          </div>
          <div className={styles.benefit}>
            <img className={styles.iconBenefit} src={iconBenefit} />
            <Text>Reuniones Semanales</Text>
            <Text bold="font-light" size="sm">
              Asesoramiento personal semanal por Zoom.
            </Text>
          </div>
          <div className={styles.benefit}>
            <img className={styles.iconBenefit} src={iconBenefit} />
            <Text>Tratamientos Premium</Text>
            <Text bold="font-light" size="sm">
              Enfoque en pacientes de tratamientos de alto valor. Enfoque en
              pacientes de tratamientos de alto valor.
            </Text>
          </div>
          <div className={styles.benefit}>
            <img className={styles.iconBenefit} src={iconBenefit} />
            <Text>Desarrollo Web</Text>
            <Text bold="font-light" size="sm">
              Nuevos pacientes asegurados cada mes.Nuevos pacientes asegurados
              cada mes.
            </Text>
          </div>
          <div className={styles.benefit}>
            <img className={styles.iconBenefit} src={iconBenefit} />
            <Text>Marketing Dental</Text>
            <Text bold="font-light" size="sm">
              Nuevos pacientes asegurados cada mes.Nuevos pacientes asegurados
              cada mes.
            </Text>
          </div>
          <div className={styles.benefit}>
            <img className={styles.iconBenefit} src={iconBenefit} />
            <Text>Marketing Dental</Text>
            <Text bold="font-light" size="sm">
              Nuevos pacientes asegurados cada mes.Nuevos pacientes asegurados
              cada mes.
            </Text>
          </div>
        </section>
        <section className={styles.faq}>
          <div className={styles.desc}>
            <div className={styles.line}>
              <span className={styles.markLine} />
              <Text size="ty">SOBRE EL PROGRAMA</Text>
            </div>
            <Text type="subtitle">Preguntas Frecuentes</Text>
            <Text bold="font-light">
              ¿Tienes alguna duda que no hayamos resuelto? Hablanos al Whatsapp.
            </Text>
            <IconTextButton icon={"wp"} colorVariant="black" variant="bordered">
              Whatsapp
            </IconTextButton>
          </div>
          <div className={styles.dropdowns}></div>
        </section>
      </main>
    </div>
  );
};

export default OurProgram;
