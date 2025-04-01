"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import styles from "../../../Styles/formPage.module.css";
import logo from "../../../../public/logow.png";
import Swal from "sweetalert2";

function Form() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log("Correo enviado exitosamente:", result.text);

          Swal.fire({
            title: "¡Correo enviado!",
            text: "Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            (e.target as HTMLFormElement).reset(); // Afirmación de tipo
          });
        },
        (error) => {
          console.error("Hubo un error al enviar el correo:", error.text);

          Swal.fire({
            title: "Error",
            text: "Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };

  return (
    <div>
      <div className={styles.Banner}>
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerTitle}>Contacta con ConBell</h2>
          <p className={styles.bannerSubtitle}>
            Completa el formulario, nos pondremos en contacto contigo
          </p>
        </div>
      </div>

      <div className={styles.wrapper} id="contact-form">
        <header className={styles.header}>
          <h1>Formulario de Contacto</h1>
        </header>
        <form onSubmit={sendEmail}>
          <div className={styles.parent}>
            <input
              className={`${styles.input} ${styles.div1}`}
              type="text"
              name="nombre"
              placeholder="Nombre"
            />
            <input
              className={`${styles.input} ${styles.div2}`}
              type="text"
              name="apellido"
              placeholder="Apellido"
            />
            <input
              className={`${styles.input} ${styles.div3}`}
              type="email"
              name="mail"
              placeholder="Mail"
            />
            <input
              className={`${styles.input} ${styles.div4}`}
              type="text"
              name="telefono"
              placeholder="Teléfono"
            />
            <select className={`${styles.select} ${styles.div5}`} name="know">
              <option value="">¿Cómo nos conociste?</option>
              <option value="instagram">Instagram</option>
              <option value="recomendado">Recomendado</option>
              <option value="publicidad">Publicidad</option>
              <option value="otros">Otros medios</option>
            </select>
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Enviar
            </button>
          </div>
        </form>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="Logo de la empresa"
            width="400"
            height="400"
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
