// src/App.jsx

import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';

const Home = lazy(() => import('./components/Home/Home'));
const Movies = lazy(() => import('./components/Movies/Movies'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);

const App = () => {
  return (
    <Router>
      <div>
        <SearchBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast/*" element={<Cast />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
