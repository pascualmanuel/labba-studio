import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css";
import { ReactSVG } from "react-svg";
import Submit from "../Assets/svg-submit.svg";
import emailjs from "@emailjs/browser";


function Contact() {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceClick = (service) => {
    if (selectedService.includes(service)) {
      // If the clicked service is already selected, remove it
      setSelectedService(selectedService.filter((s) => s !== service));
    } else {
      // Otherwise, add the clicked service to the list of selected services
      setSelectedService([...selectedService, service]);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aboutYou: "",
    budget: "",
    selectedService: "", // New state for selected service
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (selectedService) => {
    setFormData({
      ...formData,
      selectedService,
    });
    // console.log(selectedService, ";s;s");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting (you can add form validation here)
    // Handle form submission logic here (e.g., sending data to a server)
  };



  return (
    <>
      <div className="flex flex-column justify-center">
        <div className="grain"></div>
        <div>
          <h2 className="b3-desk">We would love to be part of your project</h2>
          <h2 className="h2-desk mt-1 mb-9">Say hello!</h2>
          <h2 className="b3-desk">I need</h2>
          <div className="contact-b-cont flex flex-row flex-wrap content-center mt-9">
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Web design") ? "contact-b-active" : ""
              }`}
              onClick={() => handleServiceClick("Web design")}
            >
              <span>Web design</span>
            </div>

            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Site from scratch")
                  ? "contact-b-active"
                  : ""
              }`}
              onClick={() => handleServiceClick("Site from scratch")}
            >
              <span>Site from scratch</span>
            </div>

            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("App design") ? "contact-b-active" : ""
              }`}
              onClick={() => handleServiceClick("App design")}
            >
              <span>App design</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("UI / UX") ? "contact-b-active" : ""
              }`}
              onClick={() => handleServiceClick("UI / UX")}
            >
              <span>UI / UX</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("HTML/CSS Coding")
                  ? "contact-b-active"
                  : ""
              }`}
              onClick={() => handleServiceClick("HTML/CSS Coding")}
            >
              <span>HTML/CSS Coding</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Front-end development")
                  ? "contact-b-active"
                  : ""
              }`}
              onClick={() => handleServiceClick("Front-end development")}
            >
              <span>Front-end development</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Back-end development")
                  ? "contact-b-active"
                  : ""
              }`}
              onClick={() => handleServiceClick("Back-end development")}
            >
              <span>Back-end development</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Branding") ? "contact-b-active" : ""
              }`}
              onClick={() => handleServiceClick("Branding")}
            >
              <span>Branding</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Other") ? "contact-b-active" : ""
              }`}
              onClick={() => handleServiceClick("Other")}
            >
              <span>Other</span>
            </div>
          </div>
          <div className="contact-form mt-16">
            <div className="input-group flex justify-between">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                style={{ width: "225px" }}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                style={{ width: "225px" }}
              />
            </div>
            <input
              name="aboutYou"
              value={formData.aboutYou}
              onChange={handleChange}
              placeholder="About your project"
              style={{ width: "500px", marginTop: "60px" }}
            />
            <br />
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Budget"
              style={{ width: "500px", marginTop: "60px" }}
            />
            <input
              type="hidden"
              name="selectedService"
              value={selectedService}
            />
            <button
              type="submit"
              className="w-[32rem] flex justify-center mt-14 mb-24 "
            >
              <ReactSVG src={Submit} /> {/* Render the SVG as a button */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
