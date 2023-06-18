import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import HomeOne from './pages/HomeOne/HomeOne';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path = "/homeOne" element = {<HomeOne/>}/>
      </Routes>
    </>
  );
}

export default App;
