import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";


const Footer = () => {
    return (
    <footer>
        <section>
            <ul className="horizontal-list">
                <li>Contato</li>
                <li>Sobre</li>
            </ul>
        </section>
    </footer>
    );
};

export default Footer;