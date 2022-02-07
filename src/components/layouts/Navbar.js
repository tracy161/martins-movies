import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchMovies, clearSearch } from '../../actions/movieAction';

const NavBar = ({ movie: { filtered }, searchMovies, clearSearch }) => {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const showSearchBar = (e) => {
    e.preventDefault();
    setOpenSearchBar(true);
  };

  const closeSearchBar = (e) => {
    e.preventDefault();
    setOpenSearchBar(false);
  };

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const text = useRef('');

  // Search
  const onChange = (e) => {
    if (text.current.value !== '') {
      searchMovies(e.target.value);
    } else {
      clearSearch();
    }
  };

  return (
    <>
      <Navbar
        style={{ padding: '0.5rem 1rem', justifyContent: 'space-between' }}
      >
        <Navbar.Brand>
          <h2 style={{ fontSize: '30px' }}>Martin's Movies</h2>
        </Navbar.Brand>
        <div className='nav-item'>
          <a
            className='nav-link toggle-search'
            href='#!'
            onClick={(e) => showSearchBar(e)}
          >
            <i className='fa fa-search'></i>
          </a>
        </div>
      </Navbar>
      <div
        className={
          openSearchBar
            ? 'general-search-wrapper open'
            : 'general-search-wrapper'
        }
      >
        <form
          className='general-search'
          role='search'
          method='get'
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={text}
            type='text'
            id='search-keywords'
            name='s'
            placeholder='Search your movie...'
            autoComplete='off'
            onChange={onChange}
          />
          <span id='general-search-close'>
            <a
              className='nav-link toggle-search'
              href='#!'
              onClick={(e) => closeSearchBar(e)}
            >
              <i className='fa fa-close'></i>
            </a>
          </span>
        </form>
      </div>
    </>
  );
};

NavBar.propTypes = {
  movie: PropTypes.object.isRequired,
  searchMovies: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProp, { searchMovies, clearSearch })(NavBar);
