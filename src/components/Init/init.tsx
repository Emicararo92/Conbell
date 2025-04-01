"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import styles from "../../Styles/init.module.css";
import logo from "../../../public/logow.png";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const slides = [
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741366732/Tezza-6106_ldsp6v.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741366743/Tezza-5425_kaws8y.jpg",
  "https://res.cloudinary.com/diefdex1h/image/upload/v1741374056/Tezza-2451_1_cufggu.jpg",
];

function Init() {
  const settings = {
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
    <div className={styles.container}>
      {/* Carrusel */}
      <div className={styles.carouselWrapper}>
        <Slider {...settings}>
          {slides.map((src, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={src}
                alt={`Imagen ${index + 1}`}
                width={800}
                height={500}
                className={styles.image}
                unoptimized={true}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Logo en el centro */}
      <div className={styles.logo}>
        <Image src={logo} alt="Logo Conbell" width={400} height={400} />
      </div>
    </div>
  );
}

export default Init;
