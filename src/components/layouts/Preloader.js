import React from 'react';
import { Spinner } from 'react-bootstrap';

const Preloader = () => {
  return (
    <div class='loader'>
      <div class='loading-effect'>
        <Spinner animation='border' role='status' className='loader'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default Preloader;
