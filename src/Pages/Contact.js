import React, { useEffect, useState, useRef } from "react";
import "../Styles/Prueba.css";
import emailjs from "@emailjs/browser";
import Rounded from "../Hooks/Rounded";

function Contact() {
  useEffect(() => {
    document.title = "Labba - Contact";
  }, []);

  const [selectedService, setSelectedService] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "USD 2000 - 5000", label: "USD 2K - 5K" },
    { value: "USD 5000 - 10000", label: "USD 5K - 10K" },
    { value: "USD 10000 - 15000", label: "USD 10K - 15K" },
    { value: "USD 15000 - 20000", label: "USD 15K - 20K" },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option.value);
    setFormData((prevData) => ({
      ...prevData,
      budget: option.value, // Update the budget in formData
    }));
    setIsOpen(false);
  };

  const isMobile = window.innerWidth <= 640;

  let buttonContactWidth = 100;

  if (isMobile) {
    buttonContactWidth = "90vw";
  }

  const handleServiceClick = (service) => {
    const buttons = document.querySelectorAll(".contact-buttons");

    buttons.forEach((button) => {
      button.style.border = "1px solid #d9d9d9";
    });

    if (selectedService.includes(service)) {
      setSelectedService(selectedService.filter((s) => s !== service));
    } else {
      setSelectedService([...selectedService, service]);
    }

    setError("");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    budget: "",
    site: "",
    selectedService: "",
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
  };

  const formRef = useRef();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedService.length === 0) {
      setError("Please select at least one service.");
      updateButtonStyles(true);
      return;
    }
    setIsSubmitting(true);
    setError("");
    updateButtonStyles(false);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setButtonText("Thank you!");

      const button = document.querySelector(".button-contact-submit");
      if (button) {
        button.classList.add("thank-you", "fade-in");
      } else {
        console.error("Button not found"); // Log an error if the button is not found
      }
    }, 2000);

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      about: formData.about,
      budget: formData.budget, // Ensure this is being sent
      site: formData.site,
      selectedService: selectedService.join(", "),
    };

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_hvxyvkq",
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            about: "",
            budget: "",
            site: "",
          });
          setSelectedService([]);
          setSelectedOption(""); // Reset the selected option
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
        button.style.border = "1px solid #ddd";
      }
    });
  };

  return (
    <>
      <div className="flex flex-column sm:justify-center ml-[18px] sm:ml-[0px] mb-[120px]">
        <div className="grain"></div>
        <div className="flex lg:flex-row flex-col lg:items-center mt-6 lg:mt-0 sm:px-5">
          <div className=" mr-12 mg:mr-[170px]  w-[340px] sm:w-auto lg:mt-[-170px]">
            <h2 className=" contact-text-1 ">
              We would love to be part of your project
            </h2>

            <h2 className=" contact-text-2 mt-[10px] sm:mt-1 mb-9 ">
              Say hello!
            </h2>
          </div>
          <div className="max-w-auto lg:max-w-[488px]">
            <h2 className="b3-desk text-[24px] f">I need</h2>
            <div
              className="contact-b-cont flex flex-row flex-wrap content-center sm:mt-9 mt-[14px] w-[auto] 
            sm:w-auto "
            >
              <div
                className={`contact-buttons  ${
                  selectedService.includes("UX / UI Design")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("UX / UI Design")}
              >
                <span style={{ userSelect: "none" }}>UX / UI Design</span>
              </div>

              <div
                className={`contact-buttons  ${
                  selectedService.includes("Development")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("Development")}
              >
                <span style={{ userSelect: "none" }}>Design + Development</span>
              </div>

              <div
                className={`contact-buttons  ${
                  selectedService.includes("Branding") ? "contact-b-active" : ""
                }`}
                onClick={() => handleServiceClick("Branding")}
              >
                <span style={{ userSelect: "none" }}>Branding</span>
              </div>

              <div
                className={`contact-buttons  ${
                  selectedService.includes("ecommerce")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("ecommerce")}
              >
                <span style={{ userSelect: "none" }}>E-Commerce</span>
              </div>

              <div
                className={`contact-buttons  ${
                  selectedService.includes("Marketing")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("Marketing")}
              >
                <span style={{ userSelect: "none" }}>Marketing</span>
              </div>

              <div
                className={`contact-buttons  ${
                  selectedService.includes("SocialMedia")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("SocialMedia")}
              >
                <span style={{ userSelect: "none" }}>
                  Social media packages
                </span>
              </div>
              <div
                className={`contact-buttons  ${
                  selectedService.includes("Other") ? "contact-b-active" : ""
                }`}
                onClick={() => handleServiceClick("Other")}
              >
                <span style={{ userSelect: "none" }}>Other</span>
              </div>
              <div className="text-[red]  flex items-center mb-[10px]">
                {error}
              </div>
            </div>
            <div className="contact-form   mt-[1rem]">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="input-group flex justify-between sm:flex-row flex-col mb-5">
                  <div className="flex flex-col mb-5 sm:mb-0">
                    <label className="">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required={true}
                      placeholder="Your name"
                      // style={{ width: "250px" }}
                      className="input-cursor  sm:w-[300px] lg:w-[240px] w-[90vw]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required={true}
                      placeholder="Your email"
                      className="input-cursor sm:w-[300px] lg:w-[240px] w-[90vw]"
                    />
                  </div>
                </div>
                <label className="">Do you already have a website?</label>
                <input
                  type="text"
                  name="site"
                  value={formData.site}
                  onChange={handleChange}
                  required={true}
                  placeholder="e.g. www.labba.studio"
                  className="input-cursor sm:w-full w-[90vw] mb-5"
                />
                <label className="">Project summary</label>

                <input
                  type="text"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  required={true}
                  placeholder="Your mini brief..."
                  className="input-cursor sm:w-full w-[90vw] mb-5"
                />
                <div className="relative h-[65px]">
                  <label>Estimated budget</label>

                  <div
                    className={`absolute sm:w-full w-[90vw] select-none border border-gray-300 bg-white text-gray-700 rounded-md transition-all duration-700 ease-in-out overflow-hidden z-[2] ${
                      isOpen ? "max-h-80" : "max-h-[48px]"
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div
                      className={`input-cursor px-4 pt-3 pb-4  flex justify-between items-center ${
                        isOpen ? "border-b-0 text-[#3741517a]" : ""
                      }`}
                    >
                      {selectedOption ? (
                        selectedOption
                      ) : (
                        <span className="text-[#8C8C8C]">Select one...</span>
                      )}
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-100 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.244078 0.577452C0.569515 0.252015 1.09715 0.252015 1.42259 0.577452L5.5 4.65486L9.57741 0.577452C9.90285 0.252015 10.4305 0.252015 10.7559 0.577452C11.0814 0.902889 11.0814 1.43053 10.7559 1.75596L6.08926 6.42263C5.76382 6.74807 5.23618 6.74807 4.91074 6.42263L0.244078 1.75596C-0.0813592 1.43053 -0.0813592 0.902889 0.244078 0.577452Z"
                          fill="#8C8C8C"
                        />
                      </svg>
                    </div>

                    {/* Menú de opciones */}
                    <ul
                      className={`transition-opacity duration-700 ${
                        isOpen ? "opacity-100 " : "opacity-100"
                      }`}
                    >
                      {options.map((option, index) => (
                        <li
                          key={index}
                          onClick={() => handleSelect(option)}
                          className={`px-4 py-2 hover:bg-gray-200  ${
                            option.disabled ? "opacity-50" : ""
                          }`}
                          disabled={option.disabled}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="budget" // Make sure to add this hidden input for the budget
                  value={formData.budget} // Capture the budget from formData
                />

                <input
                  type="hidden"
                  name="selectedService"
                  value={selectedService}
                />
                <div className="flex sm:justify-end pb-[50px]">
                  <button className=" mt-8 ">
                    <Rounded
                      widthButton={buttonContactWidth}
                      heightButton={38}
                      buttonBorderColor={"gray"}
                    >
                      <p className="">{buttonText}</p>
                    </Rounded>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[200vh] bg-slate-400 w-[100vw]"></div> */}
    </>
  );
}

export default Contact;
