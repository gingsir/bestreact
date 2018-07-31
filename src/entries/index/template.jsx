import React from 'react';
import UserMenu from "@m/UserMenu";
import SystemConfig from "@m/SystemConfig";
import DataDictionary from "@m/DataDictionary";
import Home from "@m/Home";
import {Switch,Route} from "react-router-dom";

export default {
    render: function (vm) {
        return (
           <div>
                <UserMenu/>
                <main>
                    <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/SystemConfig' component={SystemConfig}/>
                            <Route exact path='/DataDictionary' component={DataDictionary}/>
                    </Switch>
                </main>
           </div>

        )
    }
}
