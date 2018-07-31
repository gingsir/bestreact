import "@/script";
import "./style.scss";
import template from "./template.jsx";

import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from "react-router-dom";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return template.render(this);
    }

}

const renderDom = Component => {
    render(
        <BrowserRouter><Component/></BrowserRouter>
        ,
        $("<div class='body-content'></div>").appendTo(document.body)[0]
    );
}
renderDom(App);