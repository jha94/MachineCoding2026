import { memo, useState, useEffect, useRef, useCallback } from "react";
import "../appStyles.css";

const Feed = () => {
  const [page, setPage] = useState(0);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
          { signal: controller.signal },
        );
        const data = await response.json();
        setNews((prev) => [...prev, ...data]);
      } catch (err) {
        throw new Error("Error while fetching news");
      } finally {
        setLoading(false);
      }
    };
    getNews();
    return () => {
      controller.abort();
      elementRef.current.disconnect()
    }
  }, [page]);

  const elementRef = useRef();
  const lastElementRef = useCallback(
    (node) => {
      // if data is already loading, don't do anything
      if (loading) return;
      // clear the existing observer
      if (elementRef.current) elementRef.current.disconnect();
      elementRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((page) => page + 1);
        }
      });
      if (node) elementRef.current.observe(node);
    },
    [loading],
  );

  return (
    <div>
      <h2>Feed</h2>
      {news.map((newsData, index) => {
        return (
          <p
            ref={news.length === index + 1 ? lastElementRef : null}
            style={{
              marginBottom: "50px",
            }}
          >
            {newsData.body}
          </p>
        );
      })}
    </div>
  );
};

export default memo(Feed);
