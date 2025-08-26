import React, { useState, useRef } from "react";
// import "./FAQ.css"; // Add your styles here
import TextAnimated from "../Hooks/AnimatedWord";

const FAQItem = ({ id, title, answer, isOpen, onToggle }) => {
  const answerRef = useRef(null); // Reference to the answer div

  const textAnimatedRefs = useRef([]);

  const handleMouseEnter = (index) => {
    // Llama a la animación del texto animado correspondiente
    if (textAnimatedRefs.current[index]) {
      textAnimatedRefs.current[index].playAnimation();
    }
  };

  const handleMouseLeave = (index) => {
    // Reversa la animación del texto animado correspondiente
    if (textAnimatedRefs.current[index]) {
      textAnimatedRefs.current[index].reverseAnimation();
    }
  };

  return (
    <div
      className="faq-item select-none"
      onClick={() => onToggle(id)}
      onMouseEnter={() => handleMouseEnter(1)}
      onMouseLeave={() => handleMouseLeave(1)}
    >
      <div className="faq-header">
        <div className="faq-left">
          {/* <div className="faq-id ">{id}</div> */}
          <div className="uppercase weight font-medium text-[18px] lg:text-[20px] w-[300px]  ">
            <TextAnimated
              firstWord={title}
              secondWord={title}
              ref={(el) => (textAnimatedRefs.current[1] = el)}
            />
            {/* {title} */}
          </div>
        </div>
        <div className="faq-right">
          {isOpen ? (
            <svg
              width="16"
              height="2"
              viewBox="0 0 16 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1L0.999999 1"
                stroke="#B5B5B5"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1V15"
                stroke="#B5B5B5"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M15 8H0.999999"
                stroke="#B5B5B5"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        ref={answerRef}
        className="faq-answer"
        style={{
          maxHeight: isOpen ? `${answerRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="text-[18px] font-normal">{answer}</div>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      title: "Digital products",
      answer:
        "We design digital experiences that create real connections. By combining smart design with a deep understanding of human behavior, we build products that are not only beautiful but meaningful — helping your brand grow with purpose.",
    },
    {
      id: 2,
      title: "WEBSITES",
      answer:
        "Your website is where your brand truly comes alive. At Labba, we design digital spaces that clearly express who you are and what you stand for, while giving users an engaging, effortless experience.",
    },
    {
      id: 3,
      title: "CUSTOM AI",
      answer:
        "We use AI not just to work smarter, but to design better, more intuitive products. Our team is at the forefront of AI-powered UX, creating new ways for people to interact with digital tools and setting the standard for the future.",
    },
    {
      id: 4,
      title: "BRANDING",
      answer:
        "A brand is more than a logo or a color palette — it's how people recognize, remember, and connect with you. At Labba, we create strong visual and verbal identities, design all the assets you need, and define clear brand guidelines so your message stays consistent everywhere.",
    },
  ];

  return (
    <div className="center lg:mt-[-30px]">
      {faqData.map((faq) => (
        <FAQItem
          key={faq.id}
          id={faq.id}
          title={faq.title}
          answer={faq.answer}
          isOpen={openItemId === faq.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default FAQPage;
