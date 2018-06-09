import React from 'react';
import ButtonCta from './contentComponents/ButtonCta';

class CallToAction extends React.Component {

    render () {
        return (<div className="CallToAction">
            <h2>Create a powerful solution now!</h2>
            <ButtonCta text="Get Started" type='white'/>
        </div>)
    }
}

export default CallToAction;