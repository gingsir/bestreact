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
                            <Route path='/SystemConfig' component={SystemConfig}/>
                            <Route path='/DataDictionary' render={(props) => (
                                <DataDictionary {...props} data={{color:"red"}}/>
                            )}/>
                    </Switch>
                </main>
           </div>

        )
    }
}
