import "@/script";
import "./style.scss";
import template from  "./template.jsx";

import React, { Component } from 'react';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this)
        return template.render(this);
    }

}