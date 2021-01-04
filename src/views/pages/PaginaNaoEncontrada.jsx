import React from "react";
import { Link } from "react-router-dom";
const View = (props) => {
    return (
        <div>
            <h1>Página não encontrada</h1>
            <p>Desculpe, essa página não foi encontrada, <Link to="/">clique aqui</Link> para ir a página inicial.</p>
        </div>
    );
};
export default View;