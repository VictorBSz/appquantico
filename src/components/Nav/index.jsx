import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles.scss"
import Logo from '../../assets/Q-Logo.png'

const Nav = () => {
  return (
    <header>
      <nav>
          <ul className="horizontal-nav">
              <h1><NavLink to="/"><img className='logo' src={Logo} alt="" /></NavLink></h1>
              <li><NavLink to="/products">Nossos Produtos</NavLink></li>
              <li><NavLink to="/">Monte seu PC</NavLink></li>
          </ul>
      </nav>
    </header>
  );
};

export default Nav;