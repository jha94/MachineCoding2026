import { useState, useEffect } from "react";

const useFetchNews = (page) => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch news: ${response.status}`);
        }
        const data = await response.json();
        setNewsList((newsList) => [...newsList, ...data]);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error occurred while fetching data", err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
    return () => controller.abort();
  }, [page]);
  return {
    newsList,
    loading,
  };
};

export default useFetchNews;
