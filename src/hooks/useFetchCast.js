import { useState, useEffect } from 'react';
import { FetchCast } from 'utils/FetchCast';
import { useParams } from 'react-router-dom';

export const useFetchCast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    setIsLoading(true);
    FetchCast(`${movieId}/credits`)
      .then(setCast)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [movieId]);
  console.log(cast);
  return { cast, isLoading, error };
};
