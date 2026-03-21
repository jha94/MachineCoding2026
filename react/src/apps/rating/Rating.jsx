import { useState, useEffect } from "react";
const filledStar = "★";
const emptyStar = "☆";

const Rating = () => {
  const [ratings, setRatings] = useState([]);
  const [rateStatus, setRateStatus] = useState([
    emptyStar,
    emptyStar,
    emptyStar,
    emptyStar,
    emptyStar,
  ]);

  useEffect(() => {
    if (ratings.length) {
      const avgRating = Math.ceil(
        ratings.reduce((acc, curr) => {
          return (acc += curr);
        }, 0) / ratings.length,
      );
      const updatedRating = Array(5)
        .fill(emptyStar)
        .map((star, index) => (index < avgRating ? filledStar : emptyStar));
      setRateStatus([...updatedRating]);
    }
  }, [ratings]);

  return (
    <>
      {rateStatus.map((rate, index) => (
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => setRatings((prev) => [...prev, index + 1])}
        >
          {rate}
        </span>
      ))}
    </>
  );
};

export default Rating;
