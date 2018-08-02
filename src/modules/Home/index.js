import "@/script";
import "./style.scss";
import template from  "./template.jsx";

import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
            ,counter:0
        };

        this.buttonClick = this.buttonClick.bind(this);
    }

    render() {
        return template.render(this);
    }

    componentDidMount(){
        $("i").css({
            color:"#379c2b"
        })
    }

    buttonClick(){
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
        }));
    }
}