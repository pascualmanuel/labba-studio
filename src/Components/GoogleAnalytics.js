/* global dataLayer */

import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Crea una función global gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      dataLayer.push(arguments);
    };

    // Inyecta el script de Google Analytics
    const scriptTag = document.createElement("script");
    scriptTag.async = true;
    scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-62QD893TKG";
    document.head.appendChild(scriptTag);

    // Inicializa Google Analytics
    window.gtag("js", new Date());
    window.gtag("config", "G-62QD893TKG");

    return () => {
      // Limpieza: eliminar el script cuando el componente se desmonta
      document.head.removeChild(scriptTag);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
