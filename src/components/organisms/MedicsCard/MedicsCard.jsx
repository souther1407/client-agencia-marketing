import Medicos from "@assets/Medicos.svg";
import styles from "./styles.module.css";
import Text from "../../atoms/Text/Text";
const MedicsCard = () => {
  return (
    <div className={styles.card}>
      <img src={Medicos} className={styles.medicos} />
      <div className={styles.desc}>
        <Text size="ty" color="black" s={{ lineHeight: "1.4" }}>
          Únete a los muchos dentista
        </Text>
        <Text
          size="ty"
          color="black"
          bold="font-light"
          s={{ lineHeight: "1.4" }}
          textAlign="center"
        >
          que aprenden con nuestros ebooks gratuitos
        </Text>
      </div>
    </div>
  );
};

export default MedicsCard;
