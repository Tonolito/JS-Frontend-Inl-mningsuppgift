import React, { useContext } from "react";
import { ItemsContext } from "../../Contexts/Contexts";
import ReviewItem from "../ReviewItem";
function Reviews() {
  const {reviewItems} = useContext(ItemsContext);

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
