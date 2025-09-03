import React from "react";

import Work1 from "../Assets/work/Hyundai/hyundai-site.webp";
import Work2 from "../Assets/work/Flora/flora-app.webp";
import Work3 from "../Assets/work/Dbs/dbs-site.webp";
import Work4 from "../Assets/work/Scouting/scounting-site.webp";

import PlusIcon from "../Assets/icons/PlusIcon.svg";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import MagneticButton from "./MagenticButton";
import { Link } from "react-router-dom";
const Works = () => {
  const [showMoreWorks, setShowMoreWorks] = useState(false);
  const [test, setTest] = useState("auto");

  let isDesktop = window.innerWidth > 1024;
  const handleShowMoreWorks = () => {
    setShowMoreWorks(true);
    window.dispatchEvent(new Event("resize"));
  };

  return <></>;
};

export default Works;
