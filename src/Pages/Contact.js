import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css";
import { ReactSVG } from "react-svg";
import Submit from "../Assets/svg-submit.svg";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [buttonText, setButtonText] = useState("Send request");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceClick = (service) => {
    const buttons = document.querySelectorAll(".contact-buttons");

    // Update styles for all buttons
    buttons.forEach((button) => {
      button.style.border = "1px solid #d9d9d9";
    });

    // Toggle the selected service
    if (selectedService.includes(service)) {
      setSelectedService(selectedService.filter((s) => s !== service));
    } else {
      setSelectedService([...selectedService, service]);
    }

    // Reset the error message and button styles
    setError("");
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
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //

    if (selectedService.length === 0) {
      // Set an error message and update button styles
      setError("Please select at least one service.");
      updateButtonStyles(true);
      return;
    }

    setIsSubmitting(true);

    // Reset the error message and button styles
    setError("");
    updateButtonStyles(false);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setButtonText("Thank you!");
      // Optionally, add the "thank-you" and "fade-in" classes for the "Thank you" state
      document
        .querySelector(".button-contact-submit")
        .classList.add("thank-you", "fade-in");
    }, 2000);

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

  const updateButtonStyles = (error) => {
    const buttons = document.querySelectorAll(".contact-buttons");
    buttons.forEach((button) => {
      if (error) {
        button.style.border = "1px solid red";
      } else {
        button.style.border = "1px solid #ddd"; // Adjust the default border color
      }
    });
  };

  return (
    <>
      <div className="flex flex-column sm:justify-center ml-[18px] sm:ml-[0px]">
        <div className="grain"></div>
        <div className="flex sm:flex-row flex-col sm:items-center">
          <div className="sm:mr-[170px] mr-[0px] w-[340px] sm:w-auto">
            <h2 className=" contact-text-1 ">
              We would love to be part of your project
            </h2>
            {/* <Link to="/prueba"> */}
            <h2 className=" contact-text-2 mt-[10px] sm:mt-1 mb-9 ">
              Say hello!
            </h2>
            {/* </Link> */}
          </div>
          <div>
            <h2 className="b3-desk text-[24px] f">I need</h2>
            <div
              className="contact-b-cont flex flex-row flex-wrap content-center sm:mt-9 mt-[14px] w-[360px] 
            sm:w-[510px] "
            >
              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("UX / UI Design")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("UX / UI Design")}
              >
                <span style={{ userSelect: "none" }}>UX / UI Design</span>
              </div>

              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("Web Development")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("Web Development")}
              >
                <span style={{ userSelect: "none" }}>Web Development</span>
              </div>

              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("Branding") ? "contact-b-active" : ""
                }`}
                onClick={() => handleServiceClick("Branding")}
              >
                <span style={{ userSelect: "none" }}>Branding</span>
              </div>
              {/* <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("Website from scratch")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("Website from scratch")}
              >
                <span style={{ userSelect: "none" }}>Website from scratch</span>
              </div> */}
              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("App design")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("App design")}
              >
                <span style={{ userSelect: "none" }}>App design</span>
              </div>
              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("Other") ? "contact-b-active" : ""
                }`}
                onClick={() => handleServiceClick("Other")}
              >
                <span style={{ userSelect: "none" }}>Other</span>
              </div>
              <div className="error-message flex items-center mb-[10px]">
                {error}
              </div>
            </div>
            <div className="contact-form  sm:w-[520px] mt-[1rem]">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="input-group flex justify-between sm:flex-row flex-col">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={true}
                    placeholder="Your name"
                    // style={{ width: "225px" }}
                    className="input-cursor  sm:w-[225px] w-[90vw]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required={true}
                    placeholder="Your email"
                    // style={{ width: "225px" }}
                    className="input-cursor sm:w-[225px] w-[90vw]"
                  />
                </div>
                <textarea
                  type="textarea"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  required={true}
                  placeholder="About your project"
                  className="input-cursor sm:w-[500px] w-[90vw] sm:mt-[40px]"
                />
                <br />
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required={true}
                  placeholder="Budget"
                  className="input-cursor sm:w-[500px] w-[90vw] sm:mt-[40px]"
                />
                <input
                  type="hidden"
                  name="selectedService"
                  value={selectedService}
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className={`button-contact-submit b2-desk mt-14 sm:mb-24 input-cursor ${
                      isSubmitting ? "submitting" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
