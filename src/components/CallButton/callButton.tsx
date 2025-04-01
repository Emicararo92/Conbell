import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa"; // Icono de teléfono
import styles from "../../Styles/Button.module.css"; // Estilos

function CallButton() {
  return (
    <div className={styles.callContainer}>
      <Link href="/contact" className={styles.linkCall}>
        <button className={styles.callButton}>
          <FaPhoneAlt className={styles.phoneIcon} /> Quiero que se comuniquen
          conmigo
        </button>
      </Link>
    </div>
  );
}

export default CallButton;
