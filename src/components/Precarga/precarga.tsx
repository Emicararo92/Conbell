/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { GiHammerNails } from "react-icons/gi";
import Image from "next/image";
import logo from "../../../public/logod.png";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-[#b8860b] text-center">
      <Image
        src={logo}
        alt="Conbell Logo"
        width={120}
        height={120}
        className="mb-6"
      />

      <GiHammerNails className="text-5xl animate-bounce" />
    </div>
  );
}
