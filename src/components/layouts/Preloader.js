import React from 'react';
import { Spinner } from 'react-bootstrap';

const Preloader = () => {
  return (
    <div class='loader'>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
};

export default Preloader;
