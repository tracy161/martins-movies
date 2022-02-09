import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Preloader = () => {
  return (
    <Container>
      <Spinner animation='border' role='status' className='loader'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Preloader;
