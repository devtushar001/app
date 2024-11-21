import React from "react";

const Reviews = ({ reviews, reviewCount }) => {
  return (
    <div className="reviews">
      <h3>Reviews ({reviewCount})</h3>
      {reviews.length === 0 ? (
        <p className="no-reviews">No reviews yet. Be the first to review!</p>
      ) : (
        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <div className="review-header">
                <h4>{review.reviewer}</h4>
                <div className="review-rating">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
              <p className="review-date">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
