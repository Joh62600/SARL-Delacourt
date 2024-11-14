import React from 'react';
import logoIcon from '../assets/logo.png'
import telephoneIcon from '../assets/telephone.png'
import emailIcon from '../assets/email.png'
import localisationIcon from '../assets/localisation.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        
        {/* Colonne 1 : Informations principales */}
        <div className="header-info">
          <h1>SARL DELACOURT</h1>
          <h2>62170 St-Josse</h2>
          <p>Portage de repas à domicile</p>
        </div>

        {/* Colonne 2 : Logo */}
        <div className="header-logo">
          <img src={logoIcon} alt="Logo Les Repas d'Olivier" />
        </div>

        {/* Colonne 3 : Icônes de contact */}
        <div className="header-contact">
          <div className="contact-item">
            <img src={telephoneIcon} alt="Téléphone" />
            <span>03 21 05 32 69</span>
          </div>
          <div className="contact-item">
            <img src={emailIcon} alt="Email" />
            <span>sarl.delacourt@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src={localisationIcon} alt="Localisation" />
            <span>St Josse 62170 </span>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
