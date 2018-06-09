import React from 'react';
import Title from '../Title';
import BlogBox from '../contentComponents/BlogBox';


class SecRecentWork extends React.Component {

    createComp (item, i) {
        return (<div className="itemContainer itemShadow">
            <div className="SpeechBox" key={"recentWorkItem-" + i}>
                <img src={item.displayImage} className="displayImage"/>
                <BlogBox title={item.title} text={item.text}/>
                <div className="SpeechBoxAfter"></div>                
            </div>
        </div>)
    }

    render() {
        const secData = this.props.data;
        return (<section className="sec-recentWork">
            <div className = "container">
                <Title text='recent work'/>
                <div className="sec-recentWork-container">
                    {secData.map(this.createComp)}
                </div>
            </div>
        </section>)
    }
}

export default SecRecentWork;