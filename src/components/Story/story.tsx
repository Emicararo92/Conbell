"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../Styles/historia.module.css";

const timelineData = [
  {
    year: "1980",
    title: "Fábrica Antigua",
    description:
      "Nuestra historia comienza en una antigua fábrica de ladrillos oscuros, testigo de nuestros primeros pasos. Cada rincón respiraba esfuerzo, sudor y sueños de un futuro mejor. Fue el lugar donde forjamos nuestra identidad y nuestra pasión por la creación. La fábrica, aunque envejecida, permaneció en pie gracias al empeño y dedicación de aquellos que trabajaban en ella, y aún conserva la esencia de aquellos días.",
    img: "https://res.cloudinary.com/diefdex1h/image/upload/v1744741590/antigua-fachada-de-f%C3%A1brica-ladrillo-oscuro-una-vieja-abandonada-las-piedras-est%C3%A1n-da%C3%B1adas-y-anticuadas-pero-se-han-instalado-160397673_b8kodk.jpg",
  },
  {
    year: "1990",
    title: "Transformación y Tecnología",
    description:
      "A lo largo de los años, nuestra visión comenzó a tomar forma. La necesidad de adaptarnos a los nuevos tiempos nos llevó a transformar nuestra estructura, incorporando tecnología avanzada sin perder de vista el corazón de nuestra producción artesanal. En este proceso, descubrimos que la tradición y la innovación pueden coexistir y potenciarse mutuamente, abriendo el camino a una nueva era.",
    img: "https://res.cloudinary.com/diefdex1h/image/upload/v1744741590/fabricavieja2_z8ofg5.jpg",
  },
  {
    year: "2010",
    title: "Nueva Infraestructura",
    description:
      "Hoy, con la nueva infraestructura moderna y totalmente renovada, estamos listos para afrontar los desafíos del futuro. Nuestra nueva fábrica cuenta con lo último en tecnología de producción y sostenibilidad, lo que nos permite ofrecer productos de la más alta calidad. Sin embargo, mantenemos intacta nuestra visión original de ofrecer productos auténticos y únicos, construidos sobre la tradición.",
    img: "https://res.cloudinary.com/diefdex1h/image/upload/v1744739964/fabricanueva2_h9hejv.jpg",
  },
  {
    year: "2020",
    title: "Compromiso y Legado",
    description:
      "Cada producto que sale de nuestras instalaciones representa un paso más en nuestra evolución. Con cada pieza, buscamos mejorar no solo nuestra capacidad de producción, sino también nuestra capacidad de soñar y de inspirar a los demás. Ahora, más que nunca, estamos comprometidos con nuestro legado y con el futuro de nuestra industria.",
    img: "https://res.cloudinary.com/diefdex1h/image/upload/v1744739963/fabricanueva1_zeuwwu.jpg",
  },
  {
    year: "1980",
    title: "Fábrica Antigua",
    description:
      "Nuestra historia comienza en una antigua fábrica de ladrillos oscuros, testigo de nuestros primeros pasos. Cada rincón respiraba esfuerzo, sudor y sueños de un futuro mejor. Fue el lugar donde forjamos nuestra identidad y nuestra pasión por la creación. La fábrica, aunque envejecida, permaneció en pie gracias al empeño y dedicación de aquellos que trabajaban en ella, y aún conserva la esencia de aquellos días.",
    img: "https://res.cloudinary.com/diefdex1h/image/upload/v1744741590/antigua-fachada-de-f%C3%A1brica-ladrillo-oscuro-una-vieja-abandonada-las-piedras-est%C3%A1n-da%C3%B1adas-y-anticuadas-pero-se-han-instalado-160397673_b8kodk.jpg",
  },
  {
    year: "1990",
    title: "Transformación y Tecnología",
    description:
      "A lo largo de los años, nuestra visión comenzó a tomar forma. La necesidad de adaptarnos a los nuevos tiempos nos llevó a transformar nuestra estructura, incorporando tecnología avanzada sin perder de vista el corazón de nuestra producción artesanal. En este proceso, descubrimos que la tradición y la innovación pueden coexistir y potenciarse mutuamente, abriendo el camino a una nueva era.",
    img: "https://res.cloudinary.com/diefdex1h/image/upload/v1744741590/fabricavieja2_z8ofg5.jpg",
  },
  {
    year: "2010",
    title: "Nueva Infraestructura",
    description:
      "Hoy, con la nueva infraestructura moderna y totalmente renovada, estamos listos para afrontar los desafíos del futuro. Nuestra nueva fábrica cuenta con lo último en tecnología de producción y sostenibilidad, lo que nos permite ofrecer productos de la más alta calidad. Sin embargo, mantenemos intacta nuestra visión original de ofrecer productos auténticos y únicos, construidos sobre la tradición.",
    img: "https://res.cloudinary.com/diefdex1h/image/upload/v1744739964/fabricanueva2_h9hejv.jpg",
  },
  {
    year: "2020",
    title: "Compromiso y Legado",
    description:
      "Cada producto que sale de nuestras instalaciones representa un paso más en nuestra evolución. Con cada pieza, buscamos mejorar no solo nuestra capacidad de producción, sino también nuestra capacidad de soñar y de inspirar a los demás. Ahora, más que nunca, estamos comprometidos con nuestro legado y con el futuro de nuestra industria.",
    img: "https://res.cloudinary.com/diefdex1h/image/upload/v1744739963/fabricanueva1_zeuwwu.jpg",
  },
];

export default function TimelineHorizontal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleChangeIndex = (index: number) => {
    if (index === activeIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 300); // Duración igual que la transición CSS
  };

  return (
    <div className={styles.timelineWrapper}>
      {/* Línea con puntos y años */}
      <div className={styles.timelineTrack}>
        <div className={styles.timelineLine}></div>
        <div className={styles.timelineDotsContainer}>
          {timelineData.map((item, index) => (
            <div key={index} style={{ position: "relative" }}>
              <span
                className={`${styles.yearLabel} ${
                  activeIndex === index ? styles.activeYear : ""
                }`}
              >
                {item.year}
              </span>
              <button
                className={`${styles.timelineDot} ${
                  activeIndex === index ? styles.activeDot : ""
                }`}
                onClick={() => handleChangeIndex(index)}
                aria-label={`Mostrar ${item.year}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contenido activo */}
      <div className={styles.contentContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={timelineData[activeIndex].img}
            alt={timelineData[activeIndex].title}
            width={600}
            height={400}
            className={`${styles.timelineImage} ${
              isFading ? styles.fadeOut : ""
            }`}
          />
        </div>
        <div
          className={`${styles.textContent} ${isFading ? styles.fadeOut : ""}`}
        >
          <h3>{timelineData[activeIndex].title}</h3>
          <p>{timelineData[activeIndex].description}</p>
        </div>
      </div>
    </div>
  );
}
