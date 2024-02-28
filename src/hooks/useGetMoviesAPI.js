import { useCallback, useEffect, useState } from "react";
import { API_KEY, BASE_URL, DEFAULT_SEARCH_KEY, ERROR_KEYS } from "../utils";

export function useGetMoviesAPI() {
  const [posterData, setPostersData] = useState(null);
  const [showErrorModel, setShowErrorModel] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const fetchPosterOfMoviesBy = useCallback(async (serachKey) => {
    try {
      const response = await fetch(`${BASE_URL}${serachKey}&apikey=${API_KEY}`);
      const responseData = await response.json();
      if (responseData?.Response === "True") {
        setPostersData(responseData.Search);
        return;
      }
      setShowErrorModel(true);
      setErrorMsg(ERROR_KEYS.NO_RESULTS);
    } catch (error) {
      console.log(error);
      setShowErrorModel(true);
      setErrorMsg(ERROR_KEYS.API_FAILED);
    }
  }, []);

  useEffect(() => {
    fetchPosterOfMoviesBy(DEFAULT_SEARCH_KEY);
  }, [fetchPosterOfMoviesBy]);

  const handleErrorModelState = () => setShowErrorModel(!showErrorModel);

  const state = { posterData, showErrorModel, errorMsg };
  const actions = { fetchPosterOfMoviesBy, handleErrorModelState };

  return [state, actions];
}
