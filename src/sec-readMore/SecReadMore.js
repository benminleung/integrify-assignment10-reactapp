import React from 'react';
import TextBox from '../contentComponents/TextBox';
import ButtonCta from '../contentComponents/ButtonCta';
import Icon from './Icon';

class SecReadMore extends React.Component {

    createComp (item, i) {
        return (<section className="itemContainer itemContainerHover">
            <div className="SpeechBox" key={"readMoreItem-"+i}>
                <Icon iconClass={item.iconClass}/>
                <TextBox title={item.title} text={item.text}/>
                <ButtonCta text="Read More" type="small"/>
                <div className="SpeechBoxAfter"></div>
            </div>
        </section>)
    }

    render() {
        const secData = this.props.data;

        // console.log(this.props.data.items)        
        return (<section className="sec-readMore borderBottomDashed">
            <div className = "sec-readMore-container container">
                {secData.map(this.createComp)}
            </div>
        </section>)
    }
}

export default SecReadMore;