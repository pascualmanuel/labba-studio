import React, { useRef, useEffect } from "react";

const BackgroundVideo = ({
  videoSrc,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  poster = null,
  ...props
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [autoPlay]);

  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        poster={poster}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundVideo;
