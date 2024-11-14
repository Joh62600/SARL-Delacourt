import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Maps from '../components/Maps'
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      {/* Ajout de l'ID pour l'ancrage "Accueil" */}
      <div id="header">
        <Header />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="localisation">
        <Maps/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  );
};

export default Home;
