"use client";

import Image from "next/image";
import styles from "../../Styles/init.module.css";
import logo from "../../../public/logod.png";

export default function Kitchen() {
  return (
    <div className={styles.initSection}>
      <div className={styles.backgroundContainer}></div>

      <div className={styles.logoContainer}>
        <Image src={logo} alt="Logo Empresa" width={200} height={200} />
      </div>
    </div>
  );
}
