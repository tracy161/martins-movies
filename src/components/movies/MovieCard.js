import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

let movieAPI;

if (process.env.NODE_ENV !== 'production') {
  movieAPI = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;
} else {
  movieAPI = process.env.THE_MOVIE_DB_API_KEY;
}

const MovieCard = ({ movie }) => {
  const [genres, setGenres] = useState([]);
  const [imdbLink, setIMDBLink] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?&api_key=${movieAPI}`)
      .then((res) => res.json())
      .then((result) => {
        const genres = result.genres.reduce((genres, gen) => {
          const { id, name } = gen;
          genres[id] = name;
          return genres;
        }, []);
        setGenres(genres);
      });

    fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${movieAPI}`)
      .then((res) => res.json())
      .then((result) => {
        const imdb = result.imdb_id;
        setIMDBLink(imdb);
      });
  }, []);

  const genreText = movie.genre_ids.map((id, index) => {
    return (
      <span style={{ float: 'right' }}>{genres[id] + (index ? ',' : ' ')}</span>
    );
  });

  const shortGenreText = genreText.slice(0, 3);
  return (
    <>
      <Card className='movie-box'>
        <div className='listing-image'>
          <Card.Img
            variant='top'
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </div>
        <div className='listing-content'>
          <Card.Body>
            <Card.Title>
              <h2 className='title'>{movie.title}</h2>
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              <i className='fa fa-star'></i>
              {movie.vote_average} / 10
              {shortGenreText}
            </Card.Subtitle>
            <Card.Text>{movie.overview.substring(0, 200)}...</Card.Text>
            {imdbLink && <a href={`https://www.imdb.com/title/${imdbLink}/`}><Button className='button-movie'>Read More</Button></a>}
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
