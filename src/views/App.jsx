import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const view = (props) => {
    return (
        <div className="app">
            <Router>
                <Menu/>
                <Content/>
            </Router>
        </div>
    );
};
export default view;