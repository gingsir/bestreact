import React from 'react';
export default{
    render : function(vm){
        return (
            <div>
                <h1>Hello React jsx scss files!</h1>
                <br />
                <i className={'glyphicon glyphicon-console'}></i>

                <div className="gf">
                    <button type="button" className="form-control dropdown btn btn-default pct100" data-toggle="dropdown"
                            name="ORDER_TYPE_STATUS" selected-value="ALL"><span className="value-text">全部</span><span
                        className="caret"></span></button>
                    <ul className="dropdown-menu dm-ORDER_TYPE_STATUS pct100">
                        <li><a onClick={vm.buttonClick} value="ALL">全部</a></li>
                        <li><a onClick={vm.buttonClick}  value="WAITBUYERPAY">待支付</a></li>
                    </ul>
                </div>

                <button onClick={vm.buttonClick}>click</button>

                <h2>It is {vm.state.date.toLocaleTimeString()}.</h2>

                <h2>It is {vm.props.age}.</h2>
            </div>
        )
    }
}
