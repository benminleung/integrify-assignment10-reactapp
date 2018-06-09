import React, { Component } from 'react';

class SecCopyrightBar extends Component {
    render(){
        return(<section className="sec-copyrightBar">
            <div className="sec-copyrightBarContainer container">
                <p>Copyright</p>
                <div>Facebook Twitter</div>
            </div>
        </section>);
    }
}

export default SecCopyrightBar;