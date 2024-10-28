import React, { useState } from "react";

function AccordionItem({ item }) {
  const [isActive, setIsActive] = useState(false);

  function toggleItem() {
    setIsActive((prev) => !prev);
  }

  return (
    <div className="question-card" onClick={toggleItem}>
      <div className="question-heading">
        <p>{item.title}</p>
        <button className={`btn-circle ${isActive ? "focus" : ""}`}>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div className={`accordionitem ${isActive ? "active" : ""} `}>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
