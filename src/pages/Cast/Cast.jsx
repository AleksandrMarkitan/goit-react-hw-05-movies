import { useFetchCast } from 'hooks/useFetchCast';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  console.log('qqq');
  const { cast, isLoading, error } = useFetchCast();
  console.log(cast);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops! Something wrong</p>}
      {cast && (
        <ul>
          {cast.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
