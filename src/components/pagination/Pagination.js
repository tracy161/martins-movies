import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nextPage } from '../../actions/movieAction';
import { Row, Col, Nav } from 'react-bootstrap';

const Pagination = ({ pages, movie: { currentPage }, nextPage }) => {
  const pageLinks = [];

  for (let i = 1; i <= pages + 1; i++) {
    let active = currentPage === i && 'current';

    pageLinks.push(
      <li key={i} onClick={() => nextPage(i)}>
        <span aria-current='page' className={`page-numbers ${active}`}>
          <a className={`page-numbers ${active}`} href='#!'>
            {i}
          </a>
        </span>
      </li>
    );
  }

  return (
    <Row style={{ padding: '0 0 40px 0' }}>
      <Col>
        <Nav className='pagination'>
          <ul className='page-numbers'>
            {currentPage > 1 && (
              <li onClick={() => nextPage(currentPage - 1)}>
                <span aria-current='page' className='page-numbers'>
                  <a className='page-numbers' href='#!'>
                    Prev
                  </a>
                </span>
              </li>
            )}
            {currentPage > 6 && (
              <>
                <li onClick={() => nextPage(1)}>
                  <span aria-current='page' className='page-numbers'>
                    <a className='page-numbers' href='#!'>
                      1
                    </a>
                  </span>
                </li>
                <li>
                  <span>...</span>
                </li>
              </>
            )}
            {currentPage <= 6
              ? pageLinks.slice(0, 6)
              : pageLinks.slice(currentPage - 5, currentPage)}
            {currentPage < pages + 1 && (
              <li onClick={() => nextPage(currentPage + 1)}>
                <span aria-current='page' className='page-numbers'>
                  <a className='page-numbers' href='#!'>
                    Next
                  </a>
                </span>
              </li>
            )}
          </ul>
        </Nav>
      </Col>
    </Row>
  );
};

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { nextPage })(Pagination);
