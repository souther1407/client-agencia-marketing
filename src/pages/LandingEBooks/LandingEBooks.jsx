import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import EBookCard from "../../components/organisms/EBookCard/EBookCard";
import EBookImg from "@assets/Foto Prueba.svg";
import banner1 from "@assets/bannerBiblioteca1.svg";
import banner2 from "@assets/bannerBiblioteca2.svg";
import Footer from "../../components/organisms/Footer/Footer";
import PreFooter from "../../components/organisms/PreFooter/PreFooter";
import TextLink from "../../components/molecules/TextLink/TextLink";
import { DOWNLOAD_EBOOK } from "../../constants/routes";
const LandingEBooks = () => {
  return (
    <div className={styles.page}>
      <Nav hideTopMenu={true} />
      <header className={styles.header}>
        <section className={styles.banner}>
          <img src={banner1} className={styles.imgBanner1} />
          <img src={banner2} className={styles.imgBanner2} />
          <img />
          <Text type="title" bold="bold" color="light">
            Guías de Marketing Dental
          </Text>
          <Text color="light" textAlign="center">
            ¿Quiere aprender sobre marketing dental? Empieza con estas <br />{" "}
            guias gratis.
          </Text>
        </section>
        <section className={styles.subnav}>
          <Text color="light">Tipo de contenido</Text>
          <Text color="light">4 Guias</Text>
        </section>
        <div className={styles.line}></div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainEBook}>
          <div className={styles.mainEbookCard}>
            <div className={styles.tag}>
              <Text size="ty" color="light">
                Empieza Aqui
              </Text>
            </div>
            <img className={styles.ebookImg} src={EBookImg} />
            <div className={styles.desc}>
              <Text type="subtitle" textAlign="center">
                Marketing Dental: La Guia Definitiva
              </Text>
              <Text bold="font-light" size="ty" textAlign="center">
                Transforma tu clínica dental con nuestros ebooks, redactados por
                líderes en marketing digital.
              </Text>
              <TextLink
                marked
                variant="secondary"
                to={DOWNLOAD_EBOOK}
                textProps={{ textAlign: "center" }}
              >
                Descargar la Guia
              </TextLink>
            </div>
          </div>
        </div>
        <div className={styles.books}>
          <EBookCard
            img={EBookImg}
            title={"Email Marketing Dental"}
            desc={"Transforma tu clínica dental con nuestros ebooks."}
          />
          <EBookCard
            img={EBookImg}
            title={"Aceptación de Casos Dentales"}
            desc={
              "Transforma tu clínica dental con nuestros ebooks, redactados."
            }
          />
          <EBookCard
            img={EBookImg}
            title={"Marketing de Tratamientos Premium"}
            desc={
              "Transforma tu clínica dental con nuestros ebooks, redactados."
            }
          />
        </div>
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default LandingEBooks;
