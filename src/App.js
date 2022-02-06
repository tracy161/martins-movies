import NavBar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <>
        <NavBar />
        <Header />
        <Footer />
      </>
    </Provider>
  );
}

export default App;
