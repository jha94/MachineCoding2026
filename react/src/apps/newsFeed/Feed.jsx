import { memo, useState, useRef, useCallback, useEffect } from "react";
import useFetchNews from "./useFetchNews";

const Feed = () => {
  const [page, setPage] = useState(0);
  const { newsList, loading } = useFetchNews(page);

  const elementRef = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (elementRef.current) elementRef.current.disconnect();
      elementRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) {
        elementRef.current.observe(node);
      }
    },
    [loading],
  );

  useEffect(() => {
    return () => elementRef?.current?.close();
  }, []);

  return (
    <div>
      <h2>Feed</h2>
      {newsList.map((news, index) => (
        <p
          ref={index === newsList.length - 1 ? lastElementRef : null}
          key={news.id}
          style={{
            marginBottom: "70px",
          }}
        >
          {news.body}
        </p>
      ))}
    </div>
  );
};

export default memo(Feed);
