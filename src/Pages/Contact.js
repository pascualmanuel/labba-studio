import React, { useEffect, useState, useRef } from "react";
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
    about: "",
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

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine selected services with other form data
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      about: formData.about,
      budget: formData.budget,
      selectedService: selectedService.join(", "), // Convert array to comma-separated string
    };

    // Send the form data using emailjs
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_hvxyvkq",
        formRef.current, // Use the form element reference
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            about: "",
            budget: "",
          });
          setSelectedService([]);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
              <span style={{ userSelect: "none" }}>Web design</span>
            </div>

            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Site from scratch")
                  ? "contact-b-active"
                  : ""
              }`}
              onClick={() => handleServiceClick("Site from scratch")}
            >
              <span style={{ userSelect: "none" }}>Site from scratch</span>
            </div>

            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("App design") ? "contact-b-active" : ""
              }`}
              onClick={() => handleServiceClick("App design")}
            >
              <span style={{ userSelect: "none" }}>App design</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("UI / UX") ? "contact-b-active" : ""
              }`}
              onClick={() => handleServiceClick("UI / UX")}
            >
              <span style={{ userSelect: "none" }}>UI / UX</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("HTML/CSS Coding")
                  ? "contact-b-active"
                  : ""
              }`}
              onClick={() => handleServiceClick("HTML/CSS Coding")}
            >
              <span style={{ userSelect: "none" }}>HTML/CSS Coding</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Front-end development")
                  ? "contact-b-active"
                  : ""
              }`}
              onClick={() => handleServiceClick("Front-end development")}
            >
              <span style={{ userSelect: "none" }}>Front-end development</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Back-end development")
                  ? "contact-b-active"
                  : ""
              }`}
              onClick={() => handleServiceClick("Back-end development")}
            >
              <span style={{ userSelect: "none" }}>Back-end development</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Branding") ? "contact-b-active" : ""
              }`}
              onClick={() => handleServiceClick("Branding")}
            >
              <span style={{ userSelect: "none" }}>Branding</span>
            </div>
            <div
              className={`contact-buttons b4-desk ${
                selectedService.includes("Other") ? "contact-b-active" : ""
              }`}
              onClick={() => handleServiceClick("Other")}
            >
              <span style={{ userSelect: "none" }}>Other</span>
            </div>
          </div>
          <div className="contact-form mt-16">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="input-group flex justify-between">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={{ width: "225px", cursor: "none" }}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  style={{ width: "225px", cursor: "none" }}
                />
              </div>
              <input
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="About your project"
                style={{ width: "500px", marginTop: "60px", cursor: "none" }}
              />
              <br />
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Budget"
                style={{ width: "500px", marginTop: "60px", cursor: "none" }}
              />
              <input
                type="hidden"
                name="selectedService"
                value={selectedService}
              />
              <button
                type="submit"
                className="w-[32rem] flex justify-center mt-14 mb-24 "
                style={{ cursor: "none" }}
              >
                <ReactSVG src={Submit} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
