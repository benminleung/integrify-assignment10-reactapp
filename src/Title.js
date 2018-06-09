import React from 'react';

class Title extends React.Component {

    render () {
        return (<div className="Title">
            <div className='borderBottomDashed'></div>
            <h5>{this.props.text}</h5>
            <div className='borderBottomDashed'></div>
        </div>)
    }
}

export default Title;