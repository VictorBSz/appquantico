import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles.scss"
import "./styles.scss";


const Footer = () => {
    return (
    <footer>
        <section>
            <ul className="horizontal-footer">
                <li>Contato</li>
                <li>Sobre</li>
            </ul>
        </section>
    </footer>
    );
};

export default Footer;