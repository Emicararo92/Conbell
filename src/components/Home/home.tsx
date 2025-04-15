"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Init from "../Init/init";
import DivLine from "../divLine/divLine";
import Kitchen from "../Showrooms/kitchen/kitchen";
import Form from "../Contact/form/form";
import WhyUs from "../whyUs/whyUs";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Cargando...</p>{" "}
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
      <div data-aos="fade-left" className="px-4 py-4">
        <Kitchen />
      </div>
      <div data-aos="fade-down" className="px-4 py-4">
        <DivLine />
      </div>
      <div data-aos="fade-left" className="px-4 py-4">
        <WhyUs />
      </div>
      <div data-aos="fade-down" className="px-4 py-4">
        <DivLine />
      </div>
      <div data-aos="fade-right" className="px-4 py-4">
        <Form />
      </div>
    </div>
  );
}
