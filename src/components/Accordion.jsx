import React, { useEffect, useState } from "react";

import AccordionItem from "./AccordionItem";

function Accordion() {
  const [AccordionItems, setAccordionItems] = useState([]);

  async function getAccordionData() {
    const fetchData = await fetch(
      "https://win24-assignment.azurewebsites.net/api/faq"
    );
    setAccordionItems(await fetchData.json());
  }

  useEffect(() => {
    getAccordionData();
  }, []);

  return (
    <div className="questions">
      {AccordionItems.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Accordion;
