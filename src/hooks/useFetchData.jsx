import React, { useState, useEffect } from "react";

export default function useFetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiURL = "https://the-one-api.dev/v2";

  const APITOKEN = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchData() {
      const url = apiURL + "/" + "book";
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        console.log("DATA: " + jsonData);
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { data, error, loading };
}
