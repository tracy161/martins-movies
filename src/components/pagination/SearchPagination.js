import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nextSearchPage } from '../../actions/movieAction';
import { Row, Col, Nav } from 'react-bootstrap';

const Pagination = ({ pages, movie: { currentPage, searchTerm }, nextSearchPage }) => {
  const pageLinks = [];

  for (let i = 1; i <= pages + 1; i++) {
    let active = currentPage === i && 'current';

    pageLinks.push(
      <li key={i} onClick={() => nextSearchPage(i, searchTerm)}>
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
              <li onClick={() => nextSearchPage(currentPage - 1, searchTerm)}>
                <span aria-current='page' className='page-numbers'>
                  <a className='page-numbers' href='#!'>
                    Prev
                  </a>
                </span>
              </li>
            )}
            {pageLinks.slice(0, 4)}
            {currentPage < pages + 1 && (
              <li onClick={() => nextSearchPage(currentPage + 1, searchTerm)}>
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
  nextSearchPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { nextSearchPage })(Pagination);
