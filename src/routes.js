import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Users from "./containers/Users";

// Componente de rotas que define as páginas "Home" e "Users"
function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/usuarios" component={Users} />
            </Switch>
        </Router>
    );
}

export default Routes;


// Explicação: Define as rotas da aplicação utilizando react-router-dom. A rota raiz (/) renderiza o componente Home, enquanto a rota /usuarios renderiza o componente Users.