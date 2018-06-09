import React from 'react';

class Icon extends React.Component{
    render(){
        return (<div className="IconCircle">
            <i className={this.props.iconClass}></i>
        </div>)
    }
}

export default Icon;