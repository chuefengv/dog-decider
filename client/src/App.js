import './App.css';
import {Header, Hero, DogSize, Footer, DogSearch} from './components/index'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className='header' id='header'>
          <Header />
        </div>

          <Route path='/' exact component={Hero}></Route>
          <div className='dogsize' id='dogsize'>
            <Route path='/' exact component={DogSize}></Route>
          </div>
          <Route path='/show-dogs' component={DogSearch}></Route>

        <div className='footer'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
