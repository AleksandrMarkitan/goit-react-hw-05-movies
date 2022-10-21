import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { SearchPage } from '../pages/SearchPage/SearchPage';
import { MoviePage } from '../pages/MoviePage/MoviePage';
import { Cast } from '../pages/Cast/Cast';
import { Reviews } from '../pages/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchPage />} />
        <Route path="movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

/* <Route path="*" element={<HomePage />} />; */
