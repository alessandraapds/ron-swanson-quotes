import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch(() => setError("Try again!"))
        .then(() => setIsLoading(false));
    };

    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return data, error, isLoading, clearInterval(interval);
  }, []);
};

export default useFetch;
