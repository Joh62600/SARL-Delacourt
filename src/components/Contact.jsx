import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../App.css'; 

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message envoyé avec succès !');
      }, (error) => {
          console.log(error.text);
          alert('Une erreur est survenue, veuillez réessayer plus tard.');
      });
  };

  return (
    <div className="contact-form-container">
      <h2>Contactez-nous</h2>
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Sujet</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Envoyer</button>
      </form>
    </div>
  );
};
export default Contact;
