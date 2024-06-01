import React from "react";
import styles from "./styles.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Text from "../../components/atoms/Text/Text";
import EBookCard from "../../components/organisms/EBookCard/EBookCard";
import EBookImg from "@assets/Foto Prueba.svg";
const LandingEBooks = () => {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <Text type="title" bold>
          Guías de Marketing Dental
        </Text>
        <Text textAlign="center">
          Aprender como atraer más clientes a tu clínica dental con nuestros
          ebooks redactados por líderes en marketing digital.
        </Text>
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
