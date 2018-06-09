import React from 'react';

class BlogBox extends React.Component {
    render (){
        return (<div className="box BlogBox">
            <h3><b>{this.props.title}</b></h3>
            <p>{this.props.text}</p>
        </div>);
    }
}

export default BlogBox;