import Image from "next/image";
import styles from "../../../Styles/form.module.css";
import logo from "../../../../public/logow.png";

function Form() {
  return (
    <div className={styles.wrapper} id="contact-form">
      <header className={styles.header}>
        <h1>Formulario de Contacto</h1>
        <p>Completa el formulario y nos pondremos en contacto con vos!</p>
      </header>
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
  );
}

export default Form;
