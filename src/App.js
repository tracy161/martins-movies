import React, { useState, useEffect } from 'react';
import NavBar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import MoviesList from './components/movies/MoviesList';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <Provider store={store}>
      <>
        <NavBar />
        <Header />
        <Container>
          <MoviesList />
        </Container>
        <Footer />
      </>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <i className="fa fa-angle-up"></i>
        </button>
      )}
    </Provider>
  );
};

export default App;
