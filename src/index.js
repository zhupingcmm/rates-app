import React from "react";
import ReactDOM from "react-dom";
import App from "./router"
// import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import store from "./store";
import "./index.css";

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)