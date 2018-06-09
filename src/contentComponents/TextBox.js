import React from 'react';

class TextBox extends React.Component {    
    
    render (){
        const title = this.props.title.trim();
        const first =  title.split(" ",1)[0];
        const rest = title.slice(first.length+1);

        return (<div className="box TextBox">
            <h3><b>{first}</b> {rest}</h3>
            <p>{this.props.text}</p>
        </div>);
    }
}

export default TextBox;