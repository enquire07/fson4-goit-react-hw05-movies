// src/components/Movies/Movies.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import styles from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        const searchResults = await searchMovies(query);
        setMovies(searchResults);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div className={styles.movies}>
      <h1>Search Results</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
