import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from './components/Home';
import Discover from './components/Discover';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
    </Routes>
  </BrowserRouter>
  );
}



export default App;
