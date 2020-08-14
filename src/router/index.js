import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../componets/home";
import React from "react";
import Setting from "../componets/setting"

export default function AppContainer(){

    return (
        <Router>
            <Switch>
                <Route path="/setting" component={Setting}/>
                <Route path="/" component={Home}/>
            </Switch>

        </Router>
    )

}