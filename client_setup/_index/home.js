import React from "react";
import ReactDOM from "react-dom";
import RootComponent from "../home";
import "./home.scss";

document.addEventListener("DOMContentLoaded", function() {
    let initial_store = {};
    try {
        initial_store = JSON.parse(document.getElementById("initial_store").innerHTML);
    } catch (e) {}
    console.log(initial_store);

    const rootElement = document.getElementById("root");

    if (rootElement.hasChildNodes()) {
        console.log("hydrating client side...");

        ReactDOM.hydrate(<RootComponent data={initial_store} />, rootElement);
    } else {
        console.log("rendering client side...");

        ReactDOM.render(<RootComponent data={initial_store} />, rootElement);
    }
});
