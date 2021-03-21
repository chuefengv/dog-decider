import './App.css';
import {Header, Hero, DogSize, Footer} from './components/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className='header'>
          <Header />
        </div>
        <div className='hero'>
          <Hero />
        </div>
        <div className='dogsize' id='dogsize'>
          <DogSize />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
