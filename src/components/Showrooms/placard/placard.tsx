/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../Styles/placard.module.css"; // Asegúrate de que la ruta sea correcta

function Placard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  // Configuración del carrusel
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className={styles.placardSection}>
      {/* Descripción */}
      <div className={styles.description}>
        <h2>Con más de 20 años de experiencia</h2>
        <p>
          Ofrecemos los mejores placards con materiales de alta calidad y
          profesionales capacitados.
        </p>
      </div>

      {/* Carrusel */}
      <div className={styles.carouselContainer}>
        <Slider {...carouselSettings}>
          <div>
            <Image
              src="https://res.cloudinary.com/diefdex1h/image/upload/v1741379548/placardintro_hdwqee.webp"
              alt="Placard 1"
              width={300}
              height={300}
              className={styles.placardImage}
              unoptimized={true}
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/diefdex1h/image/upload/v1741366717/lineaMost2_jcbktw.webp"
              alt="Placard 2"
              width={300}
              height={300}
              className={styles.placardImage}
              unoptimized={true}
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/diefdex1h/image/upload/v1741366717/lineaMost1_ls91pk.webp"
              alt="Placard 3"
              width={300}
              height={300}
              className={styles.placardImage}
              unoptimized={true}
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/diefdex1h/image/upload/v1741366717/lineaBest2_wigrev.webp"
              alt="Placard 4"
              width={300}
              height={300}
              className={styles.placardImage}
              unoptimized={true}
            />
          </div>
        </Slider>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage}
              alt="Placard Grande"
              width={800}
              height={600}
              className={styles.modalImage}
              unoptimized={true}
            />
            <button className={styles.closeButton} onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Placard;
