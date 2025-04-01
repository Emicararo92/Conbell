"use client"; // Indica que este componente es del lado del cliente

import { useState } from "react";
import Home from "../Home/home";
import Preloader from "../Precarga/precarga";

export default function HomePre() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Preloader onFinish={() => setIsLoaded(true)} />}
      {isLoaded && <Home />}
    </>
  );
}
