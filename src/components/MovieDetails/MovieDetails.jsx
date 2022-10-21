import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import {
  InfoBox,
  AdditionalInfoBox,
  InfoLink,
  InfoText,
} from './MovieDetails.styled.js';

export const MovieDetails = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genresName } = movie;
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <>
      <button
        type="button"
        onClick={() => navigation(location?.state.from || '/')}
      >
        Go back
      </button>
      <InfoBox>
        <img src={poster_path} alt={title} />
        <InfoText>
          <h2>{title}</h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresName}</p>
        </InfoText>
      </InfoBox>
      <AdditionalInfoBox>
        <h3>Additional information</h3>
        <ul>
          <li>
            <InfoLink to="cast" state={{ location }}>
              Cast
            </InfoLink>
          </li>
          <li>
            <InfoLink to="reviews" state={{ location }}>
              Reviews
            </InfoLink>
          </li>
        </ul>
      </AdditionalInfoBox>
      <Outlet />
    </>
  );
};