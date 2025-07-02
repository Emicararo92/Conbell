"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFlip,
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "../../Styles/Local.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Local = () => {
  const imageUrls = [
    {
      url: "https://res.cloudinary.com/diefdex1h/image/upload/v1745339147/local1_bx5gmr.jpg",
      description:
        "Inauguración de Conbell - 2018: Nuestro humilde comienzo en el corazón del barrio",
    },
    {
      url: "https://res.cloudinary.com/diefdex1h/image/upload/v1745339147/local2_z6gmot.jpg",
      description:
        "Primera remodelación - 2019: Ampliamos espacios para mejor atención",
    },
    {
      url: "https://res.cloudinary.com/diefdex1h/image/upload/v1745339148/local3_adczrk.jpg",
      description: "Zona VIP - 2020: Donde creamos experiencias personalizadas",
    },
    {
      url: "https://res.cloudinary.com/diefdex1h/image/upload/v1745339149/local4_b5kw4v.jpg",
      description:
        "Nueva fachada - 2021: Modernizamos nuestra imagen corporativa",
    },
    {
      url: "https://res.cloudinary.com/diefdex1h/image/upload/v1745339158/local5_hnmjfy.jpg",
      description:
        "Evento 3er aniversario - 2022: Celebrando con nuestra comunidad",
    },
    {
      url: "https://res.cloudinary.com/diefdex1h/image/upload/v1745339158/local6_wsxpwm.jpg",
      description: "Área de coworking - 2023: Innovando espacios colaborativos",
    },
    {
      url: "https://res.cloudinary.com/diefdex1h/image/upload/v1745339158/local7_prfsmk.jpg",
      description: "Equipo Conbell 2024: El corazón de nuestra empresa",
    },
    {
      url: "https://res.cloudinary.com/diefdex1h/image/upload/v1745339162/local8_ihbdkq.jpg",
      description: "Nueva sala de exhibición: Donde las ideas toman forma",
    },
  ];

  const videoData = [
    {
      url: "https://res.cloudinary.com/diefdex1h/video/upload/v1745339190/videoLoc1_pnxqfe.mov",
      title: "Recorrido por nuestras instalaciones",
    },
    {
      url: "https://res.cloudinary.com/diefdex1h/video/upload/v1745339186/videoLoc2_iy3gqt.mov",
      title: "Zonas comunes y áreas de trabajo",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      spacing: 15,
    },
    created: (slider) => {
      setInterval(() => {
        slider.next();
      }, 3000);
    },
    breakpoints: {
      "(max-width: 767px)": {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
    },
  });

  return (
    <div className={styles.localContainer}>
      {/* VIDEOS */}
      <section className={`${styles.banner} mt-24`}>
        <Swiper
          spaceBetween={0}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          modules={[EffectFade, Autoplay]}
          className={styles.videoSwiper}
          allowTouchMove={false}
        >
          {videoData.map((video, index) => (
            <SwiperSlide key={index}>
              <div className={styles.videoContainer}>
                <video
                  src={video.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.video}
                  onLoadedMetadata={(e) =>
                    (e.target as HTMLVideoElement).play()
                  }
                />
                <div className={styles.logoOverlay}>
                  <Image
                    src="/logod.png"
                    alt="Conbell"
                    width={300}
                    height={150}
                    className={styles.logo}
                    priority
                  />
                </div>
                <div className={styles.videoCaption}>
                  <h3>{video.title}</h3>
                  <p>Conbell - Espacios que inspiran</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* IMÁGENES */}
      <section className={styles.timelineSection}>
        <div className={styles.carouselWrapper}>
          {isMobile ? (
            <div ref={sliderRef} className="keen-slider">
              {imageUrls.map((item, index) => (
                <div key={index} className="keen-slider__slide">
                  <Image
                    src={item.url}
                    alt={item.description}
                    width={500}
                    height={400}
                    className="object-cover"
                  />
                  <div className={styles.cardOverlay}>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              effect="flip"
              grabCursor
              pagination
              navigation
              modules={[EffectFlip, Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="mySwiper"
            >
              {imageUrls.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center gap-20">
                    <Image
                      src={item.url}
                      alt={item.description}
                      width={500}
                      height={400}
                      className="object-cover"
                    />
                    <div className={styles.cardOverlay}>
                      <p className="text-white">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
      {/* BLOQUE DESTACADO */}
      <section className="text-black border-s-2">
        <h2>CONOCÉ NUESTRO ESPACIO EN FOA</h2>
        <p>Innovación, diseño y calidad en cada rincón. Vení a descubrirlo.</p>
      </section>
    </div>
  );
};

export default Local;
