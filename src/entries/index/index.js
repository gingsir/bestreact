import "@/script";
import "./style.scss";
import template from  "./template.jsx";

import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        console.log(this)
        return template.render(this);
    }

    componentDidMount(){
        $("i").css({
            color:"#379c2b"
        })
    }

    buttonClick(){
        console.log(arguments)
    }
}

const renderDom = Component => {
    render(
        <Component age={25}/>,
        $("<div class='body-content'></div>").appendTo(document.body)[0]
    );
}
renderDom(App);