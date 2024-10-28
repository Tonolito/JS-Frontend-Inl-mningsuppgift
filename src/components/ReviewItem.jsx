import React from "react";

function ReviewItem({ item }) {
  return (
    <div className="card">
      <i
        className="fa-duotone fa-solid fa-square-quote fa-flip-both fa-3x"
        style={{
          "--fa-primary-color": "#fafafa",
          "--fa-secondary-color": "#6366f1",
          "--fa-secondary-opacity": "1",
        }}
      ></i>
      <div className="card-content">
        <img className="rating-image" src={item.starRating} alt="" />
        <p>{item.comment}</p>
        <div className="profile-bar">
          <img src={item.avatarUrl} alt="" />
          <p className="full-name">{item.author}</p>
          <p className="work-title">{item.jobRole}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
