import { useEffect, useState } from "react";
import "../appStyles.css";

const Carousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { carouselItems } = props;

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      handleClick("forward");
    }, 1000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleClick = (type) => {
    if (!carouselItems?.length) return;
    if (type === "forward") {
      setActiveIndex((prev) =>
        prev < carouselItems.length - 1 ? prev + 1 : 0,
      );
    }
    if (type === "backward") {
      setActiveIndex((prev) =>
        prev === 0 ? carouselItems.length - 1 : prev - 1,
      );
    }
  };

  if (!carouselItems.length) return null;
  const currentItem = carouselItems[activeIndex];
  return (
    <div className="carouselWrapper">
      <button
        aria-label="Previous slide"
        onClick={() => handleClick("backward")}
      >
        ⏪
      </button>
      <div key={currentItem.key}>{currentItem.desc}</div>
      <button aria-label="Next slide" onClick={() => handleClick("forward")}>
        ⏩
      </button>
    </div>
  );
};

export default Carousel;
