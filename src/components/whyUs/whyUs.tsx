"use client";

import Image from "next/image";
import styles from "../../Styles/moreButton.module.css";
import MoreButton from "../moreButton/moreButton";

function WhyUs() {
  return (
    <section className={styles.whyUsSection}>
      <div className={styles.contentContainer}>
        {/* Contenedor de imágenes con descripciones */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/diefdex1h/image/upload/v1741978779/CASASANTINANORTE_PHLAUKALBER_2_t8mhxt.jpg"
              alt="Mueble de cocina elegante"
              width={400}
              height={600}
              className={styles.whyUsImage}
              unoptimized={true}
            />
            <div className={styles.imageText}>
              <h3>Diseño y Elegancia</h3>
              <p>
                Creemos que cada detalle cuenta. Nuestros muebles combinan
                innovación y estilo para transformar tu cocina en un espacio de
                lujo y confort.
              </p>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="https://res.cloudinary.com/diefdex1h/image/upload/v1741978766/pure_1_zmv1db.jpg"
              alt="Diseño moderno de cocina"
              width={400}
              height={600}
              className={styles.whyUsImage}
              unoptimized={true}
            />
            <div className={styles.imageText}>
              <h3>Calidad y Tecnología</h3>
              <p>
                Materiales premium y tecnología avanzada para garantizar
                durabilidad, funcionalidad y una estética impecable en cada
                proyecto.
              </p>
            </div>
          </div>
        </div>

        {/* Descripción principal */}
        <div className={styles.textContainer}>
          <h2>¿Por qué elegirnos?</h2>
          <p>
            En <strong>Conbell</strong>, combinamos diseño, calidad y tecnología
            para crear cocinas que se adaptan a tu estilo de vida. Con más de 40
            años de experiencia, ofrecemos muebles a medida con materiales de
            alta gama y una atención personalizada para que tu hogar refleje tu
            esencia.
          </p>
          <MoreButton href="/Kitchen" label="Ver Más" />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
