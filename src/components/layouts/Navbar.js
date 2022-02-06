import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand='lg' style={{padding: '0.5rem 1rem'}}>
      <Navbar.Brand>
        <h2 style={{ fontSize: '30px' }}>Martin's Movies</h2>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
