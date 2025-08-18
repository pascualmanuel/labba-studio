import { Link } from "react-router-dom";
import BackgroundVideo from "./BackgroundVideo";
import Reel from "../Assets/labba/labba_reel.mp4";

export default function VideoSection() {
  return (
    <section className="video-section relative  mx-auto px-6 sm:px-[53px] lg:px-16 lg:mt-[50px]  max-w-[1500px] ">
      <BackgroundVideo
        videoSrc={Reel}
        className=" relative mb-2 sm:mb-6 rounded-lg h-[260px] md:h-[580px]"
      ></BackgroundVideo>
    </section>
  );
}
