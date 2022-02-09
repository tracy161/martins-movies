import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Preloader from '../layouts/Preloader';
import MovieCard from './MovieCard';
import Pagination from '../pagination/Pagination';
import SearchPagination from '../pagination/SearchPagination';
import { getMovies } from '../../actions/movieAction';
import { Row, Col, Button, Container } from 'react-bootstrap';

const MoviesList = ({
  movie: { movies, filtered, currentPage, loading },
  getMovies,
}) => {
  const [watch, setWatch] = useState(
    window.localStorage.getItem('items')
      ? JSON.parse(window.localStorage.getItem('items'))
      : []
  );

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  if (loading || movies === null) {
    return <Preloader />;
  }

  const handleSubmit = (e) => {
    const watchedMovies = [e, ...watch];

    window.localStorage.setItem('items', JSON.stringify(watchedMovies));

    setWatch(watchedMovies);
  };

  const numberPages = Math.floor(movies.total_results / 20);
  const numberSearchPages = Math.floor(filtered?.total_results / 20);

  return (
    <>
      <Row style={movieRow}>
        {!loading && filtered?.results.length === 0 && (
          <>
            <Container>
              <h1>Opps! No Movies Found...</h1>
              <a href='/'>
                <Button className='button-movie' style={{ margin: '20px' }}>
                  Go Back
                </Button>
              </a>
            </Container>
          </>
        )}
        {!loading && movies !== null ? (
          filtered !== null ? (
            filtered.results.map((movie, index) => (
              <Col
                key={index}
                sm={6}
                lg={4}
                style={{ paddingRight: '15px', paddingLeft: '15px' }}
              >
                <MovieCard
                  movie={movie}
                  watch={watch}
                  onSubmit={handleSubmit}
                  key={movie.id}
                />
              </Col>
            ))
          ) : (
            movies.results.map((movie, index) => (
              <Col
                key={index}
                sm={6}
                lg={4}
                style={{ paddingRight: '15px', paddingLeft: '15px' }}
              >
                <MovieCard
                  movie={movie}
                  watch={watch}
                  onSubmit={handleSubmit}
                  key={movie.id}
                />
              </Col>
            ))
          )
        ) : (
          <p className='center'>No movies to show...</p>
        )}
      </Row>
      {filtered?.total_results > 20 ? (
        <SearchPagination pages={numberSearchPages} currentPage={currentPage} />
      ) : (
        ''
      )}
      {movies.total_results > 20 && filtered === null ? (
        <Pagination pages={numberPages} currentPage={currentPage} />
      ) : (
        ''
      )}
    </>
  );
};

const movieRow = {
  paddingTop: '80px',
  paddingBottom: '40px',
};

MoviesList.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getMovies })(MoviesList);
