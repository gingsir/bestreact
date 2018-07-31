import React from 'react';
export default{
    render : function(vm){
        return (
            <div>
                <h1>Hello bestreact!</h1>
                <br />
                <i className={'glyphicon glyphicon-flash'}></i>

				<div class="panel panel-default">
                
					<h2>vm.state.date is {vm.state.date.toLocaleTimeString()}.</h2>

					<h2>vm.props.age is {vm.props.age}.</h2>
				
					<button className={"btn btn-success"} onClick={vm.buttonClick}>Click Me!</button>
				</div>
            </div>
        )
    }
}
