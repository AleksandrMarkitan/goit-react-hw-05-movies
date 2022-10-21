import { useState, useEffect } from 'react';
import { fetchMovie } from 'utils/fetchMovie';
import { useParams } from 'react-router-dom';

export const useFetchCast = () => {
  const [cast, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    setIsLoading(true);
    fetchMovie(`${movieId}/credits`)
      .then(setMovie)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return { cast, isLoading, error };
};
