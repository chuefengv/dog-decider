import './App.css';
import {Header, Hero, DogSize, Footer} from './components/index'

function App() {
  return (
    <div className="wrapper">
      <div className='header'>
        <Header />
      </div>
      <div className='hero'>
        <Hero />
      </div>
      <div className='dogsize'>
        <DogSize />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
