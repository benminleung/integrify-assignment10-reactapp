import React, {Component} from 'react';
import Title from '../Title';
import BlogBox from '../contentComponents/BlogBox';
import CallToAction from '../CallToAction';
import TextBox from '../contentComponents/TextBox';
import ButtonCta from '../contentComponents/ButtonCta';
import SecDevelopent from './SecDevelopment';

class SecTesDev extends Component {
    
    createTestimonial (item, i) {
        return (<div className="itemContainer itemShadow">
            <div className="SpeechBox" key={"testimonialItem-" + i}>
                <BlogBox title={item.title} text={item.text}/>
            <div className="SpeechBoxAfter"></div>                
        </div>
    </div>)
    }

    render(){
        const data = this.props.data;

        return (<section className="sec-tesDev">
            <div className="container">
                <div className="sec-tesDev-container">
                    <div className="testimonial">
                        <Title text="Testimonials" />
                        <div className="testimonial-container">
                            {data.testimonialData.map(this.createTestimonial)}
                        </div>
                    </div>
                    <div className="development">
                        <Title text="Development" />
                        <SecDevelopent data={data.developmentData} />
                    </div>
                </div>
                <CallToAction />
            </div>
        </section>)
    }
}

export default SecTesDev;

// developmentData