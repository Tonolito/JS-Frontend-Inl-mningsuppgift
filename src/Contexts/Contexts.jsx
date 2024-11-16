import React, { createContext, useState, useEffect } from "react";

export const ItemsContext = createContext();

// TAGIT HJÄLP AV CHATGPT MED CONTEXT DÅ JAG INTE FÖRSTOD VIDEON SÅ BRA
const ItemProvider = ({ children }) => {
  const [reviewItems, setReviewItems] = useState([]);
  const [AccordionItems, setAccordionItems] = useState([]);

  async function getReviewData() {
    const fetchData = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );
    setReviewItems(await fetchData.json());
  }

  useEffect(() => {
    getReviewData();
  }, []);

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
    <ItemsContext.Provider value={{ AccordionItems, reviewItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemProvider;
