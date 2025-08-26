import React, { useRef, useEffect } from "react";

const BackgroundVideo = ({
  videoSrc,
  children,
  className = "",
  // ⚠️ autoplay debe ser false por defecto
  autoPlay = false,
  muted = true,
  loop = true,
  playsInline = true,
  poster = null,
  // 🔑 nueva prop: decide si reproducir o no (controlada desde Home)
  shouldPlay = false,
  ...props
}) => {
  const videoRef = useRef(null);

  // Mantener SIEMPRE pausado y en t=0 mientras no debamos reproducir
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (!shouldPlay) {
      try {
        v.pause();
        if (v.currentTime !== 0) v.currentTime = 0;
      } catch (e) {}
      return;
    }

    // Al habilitar shouldPlay: arrancar desde el principio
    try {
      v.currentTime = 0;
    } catch (e) {}
    // dos RAF para garantizar que ya salió el loader del flujo de render
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        v.play?.().catch(() => {});
      });
    });
  }, [shouldPlay]);

  return (
    <div className={`relative z-0 ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        // 👇 aunque exista autoPlay en el resto, lo forzamos a falso aquí
        autoPlay={false}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload="auto"
        poster={poster}
        {...props}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundVideo;
