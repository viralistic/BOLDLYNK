import { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <div className="accordion">
        {data.map((item, i) => {
          return (
            <div className="item" key={item.id}>
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <img
                  src="/assets/images/accordion-seperator.svg"
                  alt="seperator"
                  className="image-seperator"
                />
              </div>
              <div className={selected === i ? "content show" : "content"}>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

const data = [
  {
    id: "0",
    question: "When will the application be live?",
    content:
      "We update everything we can- saving HOURS of your time.We update everything we can- saving HOURS of your time.",
  },
  {
    id: "1",
    question: "When will the application be live?",
    content:
      "We update everything we can- saving HOURS of your time.We update everything we can- saving HOURS of your time.",
  },
  {
    id: "2",
    question: "When will the application be live?",
    content:
      "We update everything we can- saving HOURS of your time.We update everything we can- saving HOURS of your time.",
  },
];
