import { memo, useState, useEffect } from "react";
import { photos } from "./photoList";
import "../appStyles.css";

const Frame = (props) => {
  const { items = photos } = props;
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    setPhotoIndex(0);
  }, [items]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") changePhoto(1);
      if (e.key === "ArrowLeft") changePhoto(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (items[photoIndex + 1]) {
      const img = new Image();
      img.src = items[photoIndex + 1].download_url;
    }
  }, [photoIndex, items]);

  const lastIndex = items.length - 1;
  const currentPhoto = items[photoIndex];

  const changePhoto = (delta) => {
    setPhotoIndex((currentIndex) => {
      const updatedIndex = currentIndex + delta;
      return Math.max(0, Math.min(updatedIndex, lastIndex));
    });
  };

  if (!items.length) {
    return (
      <div className="emptyFrame">
        <p>
          No photos available.
          <br />
          Please visit later
        </p>
      </div>
    );
  }

  return (
    <div className="frameWrapper">
      <button
        disabled={photoIndex === 0}
        onClick={() => changePhoto(-1)}
        className="frameBtn"
        type="button"
        aria-label="Previous photo"
      >
        Back
      </button>
      <img
        className="frame"
        src={currentPhoto.download_url}
        alt={`Photo by ${currentPhoto.author}`}
      />
      <button
        disabled={lastIndex === photoIndex}
        onClick={() => changePhoto(1)}
        className="frameBtn"
        type="button"
        aria-label="Next photo"
      >
        Next
      </button>
    </div>
  );
};

export default memo(Frame);
