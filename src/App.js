import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <main class="main">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Routes>   
        </Routes>      
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
