/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../Styles/kitchenApp.module.css";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Arrays de imágenes (reemplaza las URLs por las tuyas)

const imgRenderKitchenOne = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978859/1_jlz3lc.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978858/2_ywzdaf.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978857/4_lqnaax.png",
];

const imgRenderKitchenTwo = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978857/10_w7n9zr.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978856/9_nzc9qx.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978856/8_mfjv1b.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978856/11_oxntad.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978854/12_ebqosh.png",
];

const imgRenderKitchenThree = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978847/9_zdjgqk.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978846/8_pkut0c.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978846/7_vl5hkr.png",
];

const imgRenderKitchenFour = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978839/1_ehjzu8.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978837/3_tca1c6.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978837/3_tca1c6.png",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978835/opcion_horno_de_90_zxzgxa.png",
];

const imgKitchenOne = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978783/CASASANTINANORTE_PHLAUKALBER_9_oum4h8.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978779/CASASANTINANORTE_PHLAUKALBER_2_t8mhxt.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978780/16122020_-_FANESI_NAVARRO_ph_G_Viramonte-1113-HDR-2_motpr3.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978776/WhatsApp_Image_2023-08-03_at_17.13.19_2_fxcxfk.jpg",
];

const imgKitchenTwo = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978775/026_-_ARQ_AND_CO_ENERO_2023-8604-_13_01_2023-HDR_deeyv5.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978774/032_-_BAREMBERG_BASS_ph_gonzaloviramonte-4154-_23_08_2022_puxabj.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978770/025_-_ARQ_AND_CO_ENERO_2023-8618-_13_01_2023-HDR_osxz4t.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978766/2019ene._-_Casa_En_Valle_Escondido_ph_G_Viramonte-_4418_dlc5hr.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741978771/ARQ_SETIEN_ph_G_Viramonte-_9171_-_12_21_pbkadc.jpg",
];

interface KitchenAppProps {
  slidesPerView?: number; // Opcional, aunque en coverflow usaremos 'auto'
}

const KitchenApp: React.FC<KitchenAppProps> = ({ slidesPerView = 1 }) => {
  // Combina imágenes para cada sección
  const futureProjects = [
    ...imgRenderKitchenOne,
    ...imgRenderKitchenTwo,
    ...imgRenderKitchenThree,
    ...imgRenderKitchenFour,
  ];
  const realKitchens = [...imgKitchenOne, ...imgKitchenTwo];

  return (
    <div className={styles.kitchenContainer}>
      {/* Banner de bienvenida */}
      <div className={styles.bannerContainer}>
        <div className={styles.bannerText}>
          <h2 className={styles.bannerTitle}>Bienvenido a ConBell</h2>
          <p className={styles.bannerSubtitle}>
            Personaliza tu hogar, dale elegacia y estilo.
          </p>
        </div>
      </div>

      {/* Sección: Proyectos a Futuro */}
      <section className={styles.section}>
        <div className={styles.carouselContainer}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 3000, // Tiempo entre cada deslizamiento (en ms)
              disableOnInteraction: false, // No desactiva el autoplay si el usuario interactúa
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Incluir Autoplay
            className="mySwiper"
          >
            {futureProjects.map((src, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "400px", height: "500px" }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={src}
                    alt={`Render ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    unoptimized={true}
                    className={styles.image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className={styles.bannerContainerDos}>
        <div className={styles.bannerTextDos}>
          <h2 className={styles.bannerTitleDos}>Diseños Modernos</h2>
          <p className={styles.bannerSubtitle}>
            Descubre diseños exclusivos y personalizados para tu hogar.
          </p>
        </div>
      </div>

      {/* Sección: Cocinas Reales */}
      <section className={styles.section}>
        <div className={styles.carouselContainer}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 3000, // Tiempo entre cada deslizamiento (en ms)
              disableOnInteraction: false, // No desactiva el autoplay si el usuario interactúa
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Incluir Autoplay
            className="mySwiper"
          >
            {realKitchens.map((src, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "400px", height: "500px" }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={src}
                    alt={`Cocina ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    unoptimized={true}
                    className={styles.image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA: Botón de Contacto */}
      <Link href="/Contact">
        <button className={styles.ctaButton}>
          Arma tu cocina con nosotros
        </button>
      </Link>
    </div>
  );
};

export default KitchenApp;
