import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { FetchCast } from 'utils/fetchCast';
import axios from 'axios';

const FetchCast = async id => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: '65573c76cf88d807ccbaf09ca79feb15',
    },
  });
  return cast;
};

export const useFetchCast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    FetchCast(`${movieId}/credits`)
      .then(setCast)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [movieId]);
  return { cast, isLoading, error };
};
