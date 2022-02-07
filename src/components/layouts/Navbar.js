import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const showSearchBar = (e) => {
    e.preventDefault();
    setOpenSearchBar(true);
  };

  const closeSearchBar = (e) => {
    e.preventDefault();
    setOpenSearchBar(false);
  }
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
        <form className='general-search' role='search' method='get'>
          <input
            type='text'
            id='search-keywords'
            name='s'
            placeholder='Search your movie...'
            autoComplete='off'
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

export default NavBar;
