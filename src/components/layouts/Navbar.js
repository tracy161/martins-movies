import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand>Martin's Movies</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
