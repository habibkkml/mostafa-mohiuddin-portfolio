import { useState, useEffect } from "react";
import data from "../data/data.json";

let globalLoading = false;

const useDataFetching = () => {
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    try {
      if (!dataFetched && !globalLoading) {
        globalLoading = true;
        setTimeout(() => {
          globalLoading = false;
          setDataFetched(true);
        }, 500);
      }
    } catch (error) {
      setError(error);
    }
  }, [dataFetched]);

  return { data, loading: globalLoading, error };
};

export default useDataFetching;
