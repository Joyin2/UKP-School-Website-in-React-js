import React from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
// import Faculty from './components/Faculty/Faculty';
import BestEducation from './components/BestEducation/BestEducation';

function App() {

  return (
    <div className="App">
     <Intro/>
     <BestEducation/>
     {/* <Faculty/> */}
    </div>
  );
}

export default App;
