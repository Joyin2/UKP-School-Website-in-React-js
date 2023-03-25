import React from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
// import Faculty from './components/Faculty/Faculty';
import BestEducation from "./components/BestEducation/BestEducation";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Intro />
      <BestEducation />
      <Experience/>
      <About />
      {/* <Faculty/> */}
    </div>
  );
}

export default App;
