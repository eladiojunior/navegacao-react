import "./Menu.css";
import React from "react";
import { Link } from "react-router-dom";
const componente = (props) => {
    return (
        <aside className="menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/topico/01">Tópico #01</Link>
                    </li>
                    <li>
                        <Link to="/topico/02">Tópico #02</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">Não Existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
export default componente;