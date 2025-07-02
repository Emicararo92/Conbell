"use client";

import { useEffect } from "react";

export default function Chat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/68654cbb8100a9190cc41b5f/1iv5r7fof';
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null;
}
