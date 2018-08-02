import React from 'react';
export default{
    render : function(vm){
        return (
            <h1 style={{color : vm.props.data.color}}>Hello DataDictionary</h1>
        )
    }
}
