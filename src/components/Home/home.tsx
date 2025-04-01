"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Init from "../Init/init";
import DivLine from "../divLine/divLine";
// import CallButton from "../CallButton/callButton";
// import Placard from "../Showrooms/placard/placard";
import Kitchen from "../Showrooms/kitchen/kitchen";
import Form from "../Contact/form/form";
import WhyUs from "../whyUs/whyUs";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setIsLoading(false); // Cambiar el estado a "no cargando" después de un tiempo
    }, 1000); // Puedes ajustar este tiempo según lo que necesites

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Cargando...</p>{" "}
        {/* Aquí podrías agregar un spinner o una animación */}
      </div>
    );
  }

  return (
    <div className="bg-red max-w-full overflow-x-hidden">
      <div data-aos="fade-up" className="px-4 py-4">
        <Init />
      </div>
      <div data-aos="fade-down" className="px-4 py-4">
        <DivLine />
      </div>
      {/*  <div data-aos="zoom-in" className="px-4 py-4">
        <CallButton />
      </div> */}
      {/* <div data-aos="fade-left" className="px-4 py-4">
        <Placard />
      </div> */}
      <div data-aos="fade-left" className="px-4 py-4">
        <Kitchen />
      </div>
      <DivLine />
      <div data-aos="fade-left" className="px-4 py-4">
        <WhyUs />
      </div>
      <div data-aos="fade-right" className="px-4 py-4">
        <Form />
      </div>
      <div data-aos="fade-down" className="px-4 py-4">
        <DivLine />
      </div>
    </div>
  );
}
