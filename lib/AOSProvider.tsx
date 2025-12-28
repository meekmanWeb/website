"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  return null;
}
