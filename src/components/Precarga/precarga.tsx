/* eslint-disable react-hooks/exhaustive-deps */
"use client"; // Es un Client Component

import { useEffect, useState } from "react";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 3000);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1d5126] text-white text-center">
      <h1 className="text-3xl font-bold mb-4 animate-fade-in">
        Bienvenido a Conbell
      </h1>
      <p className="text-lg mb-4">Cargando experiencia de lujo...</p>
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
