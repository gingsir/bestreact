import React from 'react';
export default{
    render : function(vm){
        return (
            <div>
				<div className="icon">
					<i className={'glyphicon glyphicon-flash'}></i>
				</div>
                <h1>Hello bestreact!</h1>

				<div className="panel panel-default" style={{padding:20}}>
                
					<h2>vm.state.date is {vm.state.date.toLocaleTimeString()}.</h2>

					<h2>vm.props.age is {vm.props.age}.</h2>
				
					<button className="btn btn-success" onClick={vm.buttonClick}>Click Me! go to admin</button>


				</div>
            </div>
        )
    }
}
