import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className='page-header overlay-gradient'>
      <Container>
          <h1 style={{color: '#fff!important', textAlign: 'center'}}>Movies List</h1>
      </Container>
    </header>
  );
};

export default Header;
