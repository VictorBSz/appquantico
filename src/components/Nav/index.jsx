import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles.scss"

const Nav = () => {
  return (
    <header>
      <nav>
        <ul className="horizontal-nav">
          <h1><NavLink to="/">QUANTIQ PROJETINHO</NavLink></h1>
          <li><NavLink to="/products">Nossos Produtos</NavLink></li>
          <li><NavLink to="/">Monte seu PC</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;