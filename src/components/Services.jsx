import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <h2>Nos Services</h2>
      <div className="service-options">
        <p><strong>Entrées :</strong> 2 choix </p>
        <p><strong>Viandes ou Poissons :</strong> 4 choix </p>
        <p><strong>Garnitures :</strong> 4 choix </p>
        <p><strong>Desserts :</strong> 2 choix </p>
        <p><strong>Inclus :</strong> Potage et fromage</p>
      </div>
      <p>Options spéciales :</p>
      <div className="special-options">
        <p>Possibilité de menu <strong>diabétique</strong></p>
        <p>Possibilité de menu <strong>sans sel</strong></p>
        <p>Possibilité de commande ou d'annulation la veille pour le lendemain</p>

  </div>
    </section>
  );
}

export default Services;
