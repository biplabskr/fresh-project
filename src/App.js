import logo from './logo.svg';
import React from 'react'
import './App.css';
import Splashscreen from './components/Splashscreen';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Skillssection from './components/Skillssection';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Splashscreen/>
      <Header/>
      <Main/>
      <Section/>
      <Skillssection/>
      <Qualification/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
