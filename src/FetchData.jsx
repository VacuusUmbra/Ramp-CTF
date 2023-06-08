import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        const data = await response.text();
        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch failed: ", error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading };
};

export default useFetchData;
