import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import MentionsLegales from './pages/mentions';
import './App.css';

function App() {
  return (
    <Router basename= "/SARL-Delacourt">
      <div>
        {/* Navigation avec les liens */}
        <nav>
          <ul>
            {/* Lien vers l'ancrage de l'accueil */}
            <li>
              <Link to="/" onClick={() => scrollToSection('header')}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('services')}>
                Nos Services
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('localisation')}>
                Zones de Livraison
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('contact')}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes vers les différentes pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>

        {/* Footer avec copyright et lien vers les mentions légales */}
        <footer>
          <p>&copy; 2024 SARL Delacourt</p>
          <Link to="/mentions-legales">Mentions Légales</Link>
        </footer>
      </div>
    </Router>
  );
}

function scrollToSection(id) {
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 0);
}

export default App;

