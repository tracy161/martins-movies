import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Preloader from '../layouts/Preloader';
import MovieCard from './MovieCard';
import Pagination from '../pagination/Pagination';
import { getMovies, nextPage } from '../../actions/movieAction';
import { Row, Col } from 'react-bootstrap';

const MoviesList = ({
  movie: { movies, filtered, currentPage, loading },
  getMovies,
  nextPage,
}) => {
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  if (loading || movies === null) {
    return <Preloader />;
  }

  const numberPages = Math.floor(movies.total_results / 20);

  return (
    <>
      <Row style={movieRow}>
        {!loading && filtered?.length === 0 && (
          <h1 style={{ textAlign: 'center' }}>No Movies Found...</h1>
        )}
        {!loading && movies !== null ? (
          filtered !== null ? (
            filtered.map((movie, index) => (
              <Col
                key={index}
                md={4}
                style={{ paddingRight: '15px', paddingLeft: '15px' }}
              >
                <MovieCard movie={movie} />
              </Col>
            ))
          ) : (
            movies.results.map((movie, index) => (
              <Col
                key={index}
                md={4}
                style={{ paddingRight: '15px', paddingLeft: '15px' }}
              >
                <MovieCard movie={movie} />
              </Col>
            ))
          )
        ) : (
          <p className='center'>No movies to show...</p>
        )}
      </Row>
      {movies.total_results > 20 ? (
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
  nextPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getMovies, nextPage })(MoviesList);
