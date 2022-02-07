import NavBar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import MoviesList from './components/movies/MoviesList';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import { Container } from 'react-bootstrap';
import './App.css';



function App() {
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
    </Provider>
  );
}

export default App;
