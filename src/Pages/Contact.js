import React, { useEffect, useState, useRef } from "react";
import "../Styles/Prueba.css";
import emailjs from "@emailjs/browser";
import Rounded from "../Hooks/Rounded";
import emailIcon from "../Assets/labba/inaki.webp";
import emailIcon2 from "../Assets/labba/manuel.png";

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
    { value: "USD " + 20000, label: "USD 20K+" },
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

  let buttonContactWidth = 235;

  if (isMobile) {
    buttonContactWidth = "100%";
  }

  const handleServiceClick = (service) => {
    const buttons = document.querySelectorAll(".contact-buttons");

    buttons.forEach((button) => {
      button.style.border = "";
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
    foundUs: "",
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
      foundUs: formData.foundUs,
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
            foundUs: "",
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
      <div className="flex flex-column sm:justify-center mx-4 sm:mx-[0px] mb-[120px] pt-[120px] ">
        <div className="flex lg:flex-row flex-col  mt-6 lg:mt-0 sm:px-16 items-start w-full justify-between ">
          <div className="pr-0 lg:pr-[75px]">
            <h3 className="h2 mb-[14px]">Get in touch</h3>
            <div className="border border-[#313131] rounded-[12px] p-[16px] flex items-center gap-[16px]">
              <div className="flex flex-row ">
                <div
                  className=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    overflow: "hidden",
                    border: "1px solid #313131",
                  }}
                >
                  <img
                    src={emailIcon2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className=""
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "-14px",
                    borderRadius: "999px",
                    overflow: "hidden",
                    border: "1px solid #313131",
                  }}
                >
                  <img
                    src={emailIcon}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="font-bold text-[14px] leading-[20px]">
                <span className="text-[#767576]">
                  Let’s bring your idea to life.&nbsp;
                </span>
                Get in touch with management directly.
              </p>
            </div>
            <div className="flex flex-row gap-[16px] my-[20px] justify-between ">
              <div className="w-1/3 bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] h-[75px] flex items-center justify-center rounded-[12px]">
                <span>Call</span>
              </div>
              <div className="w-1/3 bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] h-[75px] flex items-center justify-center rounded-[12px]">
                <span>Email</span>
              </div>
              <div className="w-1/3 bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] h-[75px] flex items-center justify-center rounded-[12px]">
                <span>LinkedIn</span>
              </div>
            </div>

            <div className="flex flex-col gap-[16px] my-[20px] justify-between ">
              <div className="w-full bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] h-[75px] flex  rounded-[12px] flex-col justify-center pl-4">
                <p className="text-[#757575] text-[14px] font-normal">
                  Video call
                </p>
                <span className="text-[14px] text-white font-medium">
                  Book a call
                </span>
              </div>
              <div className="w-full bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] h-[75px] flex  rounded-[12px] flex-col justify-center pl-4">
                <p className="text-[#757575] text-[14px] font-normal">Email</p>
                <span className="text-[14px] text-white font-medium">
                  hello@labba.studio
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-auto lg:max-w-[635px] mt-[50px] lg:mt-0">
            {/* <h2 className="b3-desk text-[24px] f">I need</h2> */}
            <div
              className="contact-b-cont flex flex-row flex-wrap content-center  w-[auto] 
            sm:w-auto "
            >
              <div
                className={`contact-buttons  ${
                  selectedService.includes("AI solutions")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("AI solutions")}
              >
                <span style={{ userSelect: "none" }}>AI solutions</span>
              </div>

              <div
                className={`contact-buttons  ${
                  selectedService.includes("Development")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("Development")}
              >
                <span style={{ userSelect: "none" }}>
                  Web Desgin + Development
                </span>
              </div>

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
                <div className="input-group grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="flex flex-col">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="input-cursor mt-2 w-full h-[50px]"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                      className="input-cursor mt-2 w-full h-[50px]"
                    />
                  </div>
                </div>

                <label className="">Project summary</label>

                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  required={true}
                  placeholder="Your mini brief..."
                  className="input-cursor mt-2 w-full  mb-5 h-[100px] resize-none"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="relative h-[65px]">
                    <label>Estimated budget</label>

                    <div
                      className={`mt-[3px] absolute w-full  select-none bg-[#111111] text-gray-700 rounded-[8px] transition-all duration-700 ease-in-out overflow-hidden z-[2] ${
                        isOpen ? "max-h-80" : "max-h-[50px]"
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

                  <div className="flex flex-col">
                    <label>How did you found us?</label>
                    <input
                      type="text"
                      name="foundUs"
                      value={formData.foundUs}
                      onChange={handleChange}
                      placeholder="e.g. Linkedin"
                      className="input-cursor mt-2 w-full h-[50px]"
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
                  className="input-cursor mt-2 w-full h-[50px] mb-5"
                />
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
                  <button className=" mt-8 w-full lg:w-auto">
                    <Rounded
                      bgColor={"#FFFFFF0D"}
                      widthButton={buttonContactWidth}
                      heightButton={45}
                      buttonTextColor={"#fff"}
                      buttonBorderColor={"transparent"}
                    >
                      <p className="!text-white font-bold">{buttonText}</p>
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
