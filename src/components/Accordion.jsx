import React, { useContext } from "react";
import { ItemsContext } from "../Contexts/Contexts"; 
import AccordionItem from "./AccordionItem";

function Accordion() {
  const { AccordionItems } = useContext(ItemsContext); 

  

  return (
    <div className="questions">
      {AccordionItems.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Accordion;
