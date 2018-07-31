import "@/script";
import "./style.scss";
import template from  "./template.jsx";

import React, { Component } from 'react';

export default class SystemConfig extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return template.render(this);
    }
}
