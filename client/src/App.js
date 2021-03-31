import './App.css';
import React, { useState } from 'react';
import {Header, Hero, DogSize, Footer, DogSearch} from './components/index'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {

  const [checkedA, setCheckedA] = useState(true);
  const [checkedB, setCheckedB] = useState(true);
  const [checkedC, setCheckedC] = useState(true);

  return (
    <Router>
      <div className="wrapper">

        <div className='header' id='header'>
          <Header setCheckedA={setCheckedA} setCheckedB={setCheckedB} setCheckedC={setCheckedC}/>
        </div>

        <Route path='/' exact component={Hero}></Route>

        <div className='dogsize' id='dogsize'>
          <Route path='/' exact render={() => (
            <DogSize checkedA={checkedA} checkedB={checkedB} checkedC={checkedC} setCheckedA={setCheckedA} setCheckedB={setCheckedB} setCheckedC={setCheckedC} />
          )}></Route>
        </div>

        <div className='dogsize'>
          <Route path='/#/show-dogs' render={() => (
            <DogSearch checkedA={checkedA} checkedB={checkedB} checkedC={checkedC} setCheckedA={setCheckedA} setCheckedB={setCheckedB} setCheckedC={setCheckedC} />
          )}></Route>
        </div>

        <div className='footer'>
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;
