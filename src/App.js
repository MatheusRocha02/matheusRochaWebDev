import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Form from './components/form/form';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Projects />
        <Form />
        <Footer />
    </div>
  );
};

export default App;
