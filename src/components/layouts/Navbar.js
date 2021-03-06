import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchMovies, clearSearch } from '../../actions/movieAction';

const NavBar = ({ movie: { filtered }, searchMovies, clearSearch }) => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const [openSearchBar, setOpenSearchBar] = useState(false);

  const showSearchBar = (e) => {
    e.preventDefault();
    setOpenSearchBar(true);
  };

  const closeSearchBar = (e) => {
    e.preventDefault();
    setOpenSearchBar(false);
    clearSearch();
  };

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const text = useRef('');

  // Search
  const onChange = (e) => {
    if (text.current.value !== '' && e.key === 'Enter') {
      searchMovies(e.target.value);
    }
  };

  return (
    <>
      <Navbar
        expand='lg'
        style={{
          padding: '0.5rem 1rem',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Navbar.Brand>
          <h2 style={{ fontSize: '30px' }}>Martin's Movies</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto' style={{ margin: 'auto' }}>
            <NavDropdown
              title='Home'
              id='basic-nav-dropdown'
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#!'>Movies & TV Shows</Nav.Link>
            <Nav.Link href='#!'>Blog</Nav.Link>
            <Nav.Link href='#!'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className='nav-item'>
          <a
            className='nav-link toggle-search'
            href='#!'
            onClick={(e) => showSearchBar(e)}
          >
            <i className='fa fa-search'></i>
          </a>
          <Button className='button-movie'>
            <i className='fa fa-user'></i> Log In
          </Button>
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
            onKeyDown={onChange}
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
