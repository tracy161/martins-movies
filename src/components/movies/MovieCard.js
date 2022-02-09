import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import dummyImg from '../../assets/pics/dummy-img.jpeg';

let movieAPI;

if (process.env.NODE_ENV !== 'production') {
  movieAPI = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;
} else {
  movieAPI = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;
}

const MovieCard = ({ movie, onSubmit, watch }) => {
  const [state, setState] = useState([]);
  const handleWatch = (e) => {
    e.preventDefault();
    onSubmit({
      id: movie.id,
      isWatched: true,
    });
  };

  useEffect(() => {
    const watchObj = watch.reduce((item, gen) => {
      const { id, isWatched } = gen;
      item[id] = isWatched;
      return item;
    }, []);
    setState(watchObj);
  }, [watch]);

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
  }, [movie.id]);

  const genreText = movie.genre_ids.map((id, index) => {
    return (
      <span key={index} style={{ float: 'right' }}>
        {genres[id] + (index ? ',' : ' ')}{' '}
      </span>
    );
  });

  const shortGenreText = genreText.slice(0, 3);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className='movie-box'>
        <div className='listing-image'>
          {movie.poster_path !== null ? (
            <Card.Img
              variant='top'
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          ) : (
            <Card.Img variant='top' src={dummyImg} />
          )}
        </div>
        <div className='listing-content'>
          <Button
            size='sm'
            className='mark-btn'
            onClick={(e) => handleWatch(e)}
          >
            {state[movie.id] === true ? (
              <span>
                <i className='fa fa-check'></i> Watched
              </span>
            ) : (
              <span>Unwatched</span>
            )}
          </Button>
          <Card.Body>
            <Card.Title>
              <h3 className='title'>{movie.title}</h3>
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              <i className='fa fa-star'></i>
              {movie.vote_average} / 10
              {shortGenreText}
            </Card.Subtitle>
            <Card.Text>{movie.overview.substring(0, 160)}...</Card.Text>
            {imdbLink ? (
              <a
                href={`https://www.imdb.com/title/${imdbLink}/`}
                target='_blank'
                rel='noreferrer'
              >
                <Button className='button-movie'>Read More</Button>
              </a>
            ) : (
              <Button className='button-movie' onClick={handleShow}>
                Read More
              </Button>
            )}
          </Card.Body>
        </div>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opps!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We will update the movie's information soon</Modal.Body>
        <Modal.Footer>
          <Button className='button-movie' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieCard;
