import React from 'react';
import {NavLink} from "react-router-dom";
export default{
    render : function(vm){
        return (
            <header>
                    <ul style={{width:"100%"}}>
                        <li><NavLink exact  to='/'>Home</NavLink></li>
                        <li><NavLink to='/SystemConfig'>SystemConfig</NavLink></li>
                        <li><NavLink to='/DataDictionary'>DataDictionary</NavLink></li>
                    </ul>
                    <div style={{clear:"both"}}></div>
            </header>

        )
    }
}
