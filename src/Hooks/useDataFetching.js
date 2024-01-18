import { useState, useEffect } from "react";
import data from "../data/data.json"; // Adjust the path as needed

const useDataFetching = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};

export default useDataFetching;
