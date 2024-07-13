import React from 'react';
import iago from "../../assets/img.jpg"

const iagoStyle= {
  width: '70vw',
  height: '70vh',
  backgroundImage: `url(${iago})`, 
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const Header = () => {
  return (
    <header>
      <div>
      <h1>QUANTIQ PROJETINHO</h1>
      <div className="container" style={iagoStyle}></div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;