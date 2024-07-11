import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import EBookCard from "../../components/organisms/EBookCard/EBookCard";
import EBookImg from "@assets/Foto Prueba.svg";
import banner1 from "@assets/bannerBiblioteca1.svg";
import banner2 from "@assets/bannerBiblioteca2.svg";
const LandingEBooks = () => {
  return (
    <div className={styles.page}>
      <Nav hideTopMenu={true} />
      <header className={styles.header}>
        <section className={styles.banner}>
          <img src={banner1} className={styles.imgBanner1} />
          <img src={banner2} className={styles.imgBanner2} />
          <img />
          <Text type="title" bold="bold">
            Guías de Marketing Dental
          </Text>
          <Text>
            ¿Quiere aprender sobre marketing dental? Empieza con estas guias
            gratis.
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
          <div className={styles.mainEbookCard}></div>
        </div>
        <div className={styles.books}>
          <EBookCard
            img={EBookImg}
            title={"Marketing Digital: Para un Dentista sin Experiencia"}
            desc={
              "Transforma tu clínica dental con nuestros ebooks, redactados por líderes en marketing digital."
            }
          />
          <EBookCard
            img={EBookImg}
            title={"Marketing Digital: Para un Dentista sin Experiencia"}
            desc={
              "Transforma tu clínica dental con nuestros ebooks, redactados por líderes en marketing digital."
            }
          />
          <EBookCard
            img={EBookImg}
            title={"Marketing Digital: Para un Dentista sin Experiencia"}
            desc={
              "Transforma tu clínica dental con nuestros ebooks, redactados por líderes en marketing digital."
            }
          />
          <EBookCard
            img={EBookImg}
            title={"Marketing Digital: Para un Dentista sin Experiencia"}
            desc={
              "Transforma tu clínica dental con nuestros ebooks, redactados por líderes en marketing digital."
            }
          />
          <EBookCard
            img={EBookImg}
            title={"Marketing Digital: Para un Dentista sin Experiencia"}
            desc={
              "Transforma tu clínica dental con nuestros ebooks, redactados por líderes en marketing digital."
            }
          />
          <EBookCard
            img={EBookImg}
            title={"Marketing Digital: Para un Dentista sin Experiencia"}
            desc={
              "Transforma tu clínica dental con nuestros ebooks, redactados por líderes en marketing digital."
            }
          />
        </div>
      </main>
    </div>
  );
};

export default LandingEBooks;
