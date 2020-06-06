import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/index";
import { Provider } from "react-redux";
import App from "./components/App";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , document.getElementById("root") as HTMLElement);
