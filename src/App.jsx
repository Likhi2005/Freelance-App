import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/LandingPage/Home';
import Login from './components/login/freelancerLogin';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-up'  element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App;
