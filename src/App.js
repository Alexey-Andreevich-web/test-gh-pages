import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Главная страница</h1>;
}

function About() {
  return <h1>О нас</h1>;
}

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  );
}

export default App;
