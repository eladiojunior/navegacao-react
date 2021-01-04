import "./Content.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../views/pages/Home";
import Sobre from "../../views/pages/Sobre";
import Topico from "../../views/pages/Topico";
import PaginaNaoEncontrada from "../../views/pages/PaginaNaoEncontrada";
const componente = (props) => {
    return (
        <main className="content">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/topico/:id">
                    <Topico/>
                </Route>
                <Route path="/sobre">
                    <Sobre/>
                </Route>
                <Route path="*">
                    <PaginaNaoEncontrada/>
                </Route>
            </Switch>
        </main>
    );
};
export default componente;