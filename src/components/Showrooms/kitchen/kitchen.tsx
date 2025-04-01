"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../Styles/kitchen.module.css";
import MoreButton from "../../moreButton/moreButton";

const images = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978859/1_jlz3lc.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978856/11_oxntad.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978856/8_mfjv1b.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978848/4_i0bdyt.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978847/9_zdjgqk.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978837/3_tca1c6.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978825/2_wozou1.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978779/CASASANTINANORTE_PHLAUKALBER_2_t8mhxt.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978766/pure_1_zmv1db.jpg",
];

export default function Kitchen() {
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
    speed: 700,
    slidesToShow: 4, // Muestra 5 imágenes al mismo tiempo
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800, // Velocidad rápida
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={styles.kitchenSection}>
      {/* Carrusel */}
      <div className={styles.carouselContainer}>
        <Slider {...carouselSettings}>
          {images.map((src, index) => (
            <div
              key={index}
              className={styles.imageContainer}
              onClick={() => openModal(src)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Cocina ${index + 1}`}
                  className={styles.kitchenImage}
                  width={200}
                  height={600}
                  unoptimized={true}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Descripción */}
      <div className={styles.description}>
        <h2>Con más de 20 años de experiencia</h2>
        <p>
          Ofrecemos las mejores cocinas con materiales de alta calidad y
          profesionales capacitados.
        </p>
      </div>

      <MoreButton href="/Kitchen" />

      {/* Modal */}
      {isOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage}
              alt="Cocina Grande"
              width={600} // Más grande
              height={450}
              className={styles.modalImage}
              unoptimized={true}
            />
            <button className={styles.closeButton} onClick={closeModal}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
