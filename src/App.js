import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Main } from './components';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
