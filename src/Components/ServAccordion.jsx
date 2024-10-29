import React, { useState, useRef } from "react";
// import "./FAQ.css"; // Add your styles here
import TextAnimated from "../Hooks/AnimatedWord";
const FAQItem = ({ id, title, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => handleMouseEnter(1)}
      onMouseLeave={() => handleMouseLeave(1)}
    >
      <div className="faq-header">
        <div className="faq-left">
          {/* <div className="faq-id ">{id}</div> */}
          <div className="uppercase weight font-medium text-[18px] lg:text-[24px] w-[220px] sm:w-auto ">
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
                stroke="#2b2b2b"
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
                stroke="#2b2b2b"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M15 8H0.999999"
                stroke="#2b2b2b"
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
          maxHeight: isOpen ? `${answerRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className="text-[18px] font-normal">{answer}</div>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const faqData = [
    {
      id: 1,
      title: "UX/UI DESIGN",
      answer:
        "We offer professiona and personalized UX/UI design services for products, websites and mobile apps. Our human- centered design philosophy make the user experience perfect from the first click!",
    },
    {
      id: 2,
      title: "Development",
      answer:
        "We provide robust and scalable development solutions for websites, mobile apps, and digital platforms. Our team of experts ensures that every project is optimized for performance, security, and responsiveness, delivering high-quality code and seamless user experiences across all devices.",
    },
    {
      id: 3,
      title: "Brand",
      answer:
        "Our branding services help define and enhance your brand's identity. From creating logos to building cohesive brand systems, we ensure that your visual and verbal identity communicates your values and connects with your audience on an emotional level, positioning your brand for long-term success.",
    },
    {
      id: 4,
      title: "GROWTH",
      answer:
        "We offer data-driven growth strategies designed to scale your business. From SEO and social media marketing to content strategies and paid advertising, we focus on increasing visibility, engagement, and conversions to help you reach your business goals and drive sustainable growth.",
    },
  ];

  return (
    <div className="center lg:mt-[-30px]">
      {faqData.map((faq) => (
        <FAQItem key={faq.id} title={faq.title} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQPage;
