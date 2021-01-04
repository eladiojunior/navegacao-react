import React from "react";
import { useParams } from "react-router-dom";

const View = (props) => {
    let { id } = useParams();
    return (
        <div>
            <h1>Tópico</h1>
            <h2>Valor: {id}</h2>
        </div>
    );
};
export default View;