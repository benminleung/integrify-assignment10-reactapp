import React, {Component} from 'react';
import TextBox from '../contentComponents/TextBox';
import ButtonCta from '../contentComponents/ButtonCta';
import BlogBox from '../contentComponents/BlogBox';

class SecDevelopent extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            tab: '0',
            designClass: 'SpeechBox itemShadow selected',
            productionClass: 'SpeechBox itemShadow notSelected'

        }
    
        this.firstData = this.firstData.bind(this);
        this.secondData = this.secondData.bind(this);    
      }

    firstData (){
        this.setState({
            tab: '0',
            designClass: 'SpeechBox itemShadow selected',
            productionClass: 'SpeechBox itemShadow notSelected'
        })
        console.log("zero clicked ");
    }

    secondData (){
        this.setState({
            tab: '1',
            designClass: 'SpeechBox itemShadow notSelected',
            productionClass: 'SpeechBox itemShadow selected'
        })
    }

    render(){
        const tab = this.state.tab;
        const data = this.props.data;
        const item = data[tab];
        console.log(tab)

        return (<div className="development-container">
            <div className="designProductionHead">
                <div className={this.state.designClass} onClick={this.firstData}><TextBox title={data[0].header} text=""/></div>
                <div className={this.state.productionClass} onClick={this.secondData}><TextBox title={data[1].header} text=""/></div>
            </div>
            <div className="SpeechBox itemShadow">
                <BlogBox title={item.title} text={item.text} />
                <div className="developmentButton box">
                    <ButtonCta type="small" />
                </div>
            </div>
        </div>);
    }
}

export default SecDevelopent;