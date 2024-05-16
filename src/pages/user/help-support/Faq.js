import { useState } from "react";
import "../../../styles/faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What documents are required when buying a used car?",
      answer: "",
    },
    {
      question: "How can I make payment?",
      answer: "",
    },
    {
      question: "Can I take a test drive?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Malesuada parturient diam sit interdum. Nibh aliquet ac at praesent dictumst eget volutpat ligula. Lorem ipsum dolor sit amet consectetur. Malesuada parturient diam sit interdum. Nibh aliquet ac at praesent dictumst eget volutpat ligula.",
    },
    {
      question: "What questions should I ask the seller?",
      answer: "",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq">
        <h2>FAQ</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => handleClick(index)}>
                <span className="question-content">
                  {index + 1}. {faq.question}
                </span>
                <span>{activeIndex === index ? "▼" : "▶"}</span>
              </div>
              <div
                className={`faq-answer ${activeIndex === index ? "open" : ""}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="faq-form-container">
          <form className="faq-form">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Ask your question"></textarea>
            <div className="button-container">
              <button type="button" className="faq-button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
