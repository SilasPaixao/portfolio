/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="git-linkedin">
        <a href="https://www.linkedin.com/in/silas-paix%C3%A3o-8a2a85205/" target="_blank" >
          <img src="https://i.postimg.cc/VNtx69wR/linkedin2.png" alt="linkedin" />
        </a>
        <a href="https://github.com/SilasPaixao" target="_blank" >
          <img src="https://i.postimg.cc/nzygtCgW/git2.png" alt="github" />
        </a>
      </div>
      <h3>Silas Paixão</h3>
      <hr />
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <h3>Telefone </h3>
      </div>
      <p> (75) 99184-0517</p>
      <hr />
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <h3>E-mail</h3>
      </div>
      <p>silas.paixao873@gmail.com</p>
    </section>
    
  );
};

export default InformationContainer;