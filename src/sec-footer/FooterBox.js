import React from 'react';

const FooterBox = (props) => {
    
    const title = props.title ? <h3><b>{props.title.toUpperCase()}</b></h3> : '';
    const text = props.text ? <p>{props.text}</p> : '' ;

    return (<div className="FooterBox">
        {title}
        {text}
    </div>);
    }

export default FooterBox;