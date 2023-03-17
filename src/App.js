import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

function App() {
  const slides = [
    {
      url: "./img/1.jpg",
      title: "one",
    },
    {
      url: "./img/2.jpg",
      title: "two",
    },
    {
      url: "./img/3.jpg",
      title: "three",
    },
    {
      url: "./img/4.jpg",
      title: "four",
    },
    {
      url: "./img/5.jpg",
      title: "five",
    }
  ];
  return (
    <div className="App">
     <Header/>
     <Slider slides={slides}/>
    </div>
  );
}

export default App;
