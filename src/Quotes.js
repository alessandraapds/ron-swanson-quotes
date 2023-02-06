import useFetch from "./hooks/useFetch";

import React from "react";

const Quotes = () => {
  const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  const { data, error, isLoading } = useFetch(url);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>{data && !error ? data : <p> {error} </p>}</div>
      )}
    </div>
  );
};

export default Quotes;
