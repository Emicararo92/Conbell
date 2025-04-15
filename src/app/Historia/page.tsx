"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "../../Styles/historia.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function NuestraHistoria() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Tiempo de duración de la animación
      once: false, // Repite la animación cada vez que entre en el viewport
      offset: 200, // La animación se activa cuando el elemento está 200px antes de ser visible
      disable: "mobile", // Desactiva AOS en dispositivos móviles si no se necesita
    });
  }, []);

  return (
    <section className={styles.contenedor}>
      {/* Bloque 1 */}
      <div className={styles.bloque}>
        <div className={styles.imagen} data-aos="fade-right">
          <Image
            src="https://res.cloudinary.com/diefdex1h/image/upload/v1744741590/antigua-fachada-de-f%C3%A1brica-ladrillo-oscuro-una-vieja-abandonada-las-piedras-est%C3%A1n-da%C3%B1adas-y-anticuadas-pero-se-han-instalado-160397673_b8kodk.jpg"
            alt="Fábrica Antigua"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <p className={styles.texto} data-aos="fade-left">
          Nuestra historia comienza en una antigua fábrica de ladrillos oscuros,
          testigo de nuestros primeros pasos. Cada rincón respiraba esfuerzo,
          sudor y sueños de un futuro mejor. Fue el lugar donde forjamos nuestra
          identidad y nuestra pasión por la creación. La fábrica, aunque
          envejecida, permaneció en pie gracias al empeño y dedicación de
          aquellos que trabajaban en ella, y aún conserva la esencia de aquellos
          días.
        </p>
      </div>

      {/* Bloque 2 */}
      <div className={`${styles.bloque} ${styles.invertido}`}>
        <p className={styles.texto} data-aos="fade-right">
          A lo largo de los años, nuestra visión comenzó a tomar forma. La
          necesidad de adaptarnos a los nuevos tiempos nos llevó a transformar
          nuestra estructura, incorporando tecnología avanzada sin perder de
          vista el corazón de nuestra producción artesanal. En este proceso,
          descubrimos que la tradición y la innovación pueden coexistir y
          potenciarse mutuamente, abriendo el camino a una nueva era.
        </p>
        <div className={styles.imagen} data-aos="fade-left">
          <Image
            src="https://res.cloudinary.com/diefdex1h/image/upload/v1744741590/fabricavieja2_z8ofg5.jpg"
            alt="Fábrica Antigua 2"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Bloque 3 */}
      <div className={styles.bloque}>
        <div className={styles.imagen} data-aos="fade-right">
          <Image
            src="https://res.cloudinary.com/diefdex1h/image/upload/v1744739964/fabricanueva2_h9hejv.jpg"
            alt="Fábrica Nueva 2"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <p className={styles.texto} data-aos="fade-left">
          Hoy, con la nueva infraestructura moderna y totalmente renovada,
          estamos listos para afrontar los desafíos del futuro. Nuestra nueva
          fábrica cuenta con lo último en tecnología de producción y
          sostenibilidad, lo que nos permite ofrecer productos de la más alta
          calidad. Sin embargo, mantenemos intacta nuestra visión original de
          ofrecer productos auténticos y únicos, construidos sobre la tradición.
        </p>
      </div>

      {/* Bloque 4 */}
      <div className={`${styles.bloque} ${styles.invertido}`}>
        <p className={styles.texto} data-aos="fade-right">
          Cada producto que sale de nuestras instalaciones representa un paso
          más en nuestra evolución. Con cada pieza, buscamos mejorar no solo
          nuestra capacidad de producción, sino también nuestra capacidad de
          soñar y de inspirar a los demás. Ahora, más que nunca, estamos
          comprometidos con nuestro legado y con el futuro de nuestra industria.
        </p>
        <div className={styles.imagen} data-aos="fade-left">
          <Image
            src="https://res.cloudinary.com/diefdex1h/image/upload/v1744739963/fabricanueva1_zeuwwu.jpg"
            alt="Fábrica Nueva 1"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

export default NuestraHistoria;
