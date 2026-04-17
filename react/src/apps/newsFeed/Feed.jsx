import { memo, useEffect, useState, useRef, useCallback } from "react";
import "../appStyles.css";
const Feed = () => {
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
      );
      setLoading(false);
      const news = await response.json();
      if (news.length === 0) {
        return setHasMore(false);
      }
      setNewsList((prev) => [...prev, ...news]);
    };
    getNews();
  }, [page]);

  const observerRef = useRef();

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore],
  );

  if (newsList.length === 0 && loading) {
    return "Loading...";
  }

  return (
    <>
      {newsList.map((news, index) => {
        if (newsList.length === index + 1) {
          return (
            <div key={news.id}>
              <article ref={lastPostElementRef} className="newsCard">
                <p>{news.body}</p>
              </article>
            </div>
          );
        } else {
          return (
            <article key={news.id} className="newsCard">
              <p>{news.body}</p>
            </article>
          );
        }
      })}
      {loading && <div>Loading more...</div>}
      {!hasMore && <div>You are done with the day.</div>}
    </>
  );
};

export default memo(Feed);
