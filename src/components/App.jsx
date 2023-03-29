import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Layouts/Navbar';
import Home from './pages/Home';
import Staff from './pages/Staff'


function App() {
  return (
    <Router>
        <div>
            hellodf
            <Navbar />
            <Route path='/' exact={true} Component={Home} />
            <Route path='/staff' exact={true} Component={Staff} />
        </div>
    </Router>
  )
}

export default App
