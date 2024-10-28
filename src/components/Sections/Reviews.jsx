import React, { useEffect, useState } from "react";
import Rating from "../../assets/images/Review/rating.svg";
import Avatar1 from "../../assets/images/Review/avatar-1.svg";
import Avatar2 from "../../assets/images/Review/avatar-2.svg";

import ReviewItem from "../ReviewItem";
function Reviews() {
  const [reviewItems, setReviewItems] = useState([]);

  async function getReviewData() {
    const fetchData = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );
    setReviewItems(await fetchData.json());
  }

  useEffect(() => {
    getReviewData();
  }, []);
  return (
    <section id="review">
      <div className="container">
        <h2>Clients are Loving Our App</h2>
        {reviewItems.map((item) => (
          <ReviewItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
