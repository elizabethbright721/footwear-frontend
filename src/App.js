import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//COMPONENTS
import NavBar from './Components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css'

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Show from "./Pages/Show";
import About from './Pages/AboutUs';
function App(){
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/footwears/new" element={<New />} />
          <Route path="/footwears/:id" element={<Show />} />
          <Route path="/footwears/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;