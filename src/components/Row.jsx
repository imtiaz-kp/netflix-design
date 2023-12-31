import React, { useEffect, useState } from 'react';
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Row.css';

function Row({ title, fetchUrl, isPoster }) {
  const base_url = 'https://image.tmdb.org/t/p/original/';
  const [AllMovies, setAllMovies] = useState();

  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
    setAllMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movies-row'>
        {AllMovies?.map((item) => (
          <img
            className={`movie ${isPoster && 'movie-poster'}`}
            src={`${base_url}/${isPoster ? item.poster_path : item?.backdrop_path}`}
            alt="no image"
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
