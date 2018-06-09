import React, {Component} from 'react';
import BlogBox from '../contentComponents/BlogBox';
import FooterBox from './FooterBox';

class SecFooter extends Component {

    footerContent = [
        {
            title: 'About Us',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod tempor ',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            title: 'Latest Tweets',
            text1: '@Jayehs Just submitted another great item on #themeforest about 3 hours ago.',
            text2: '@Jaynesh Working on an awesome theme for #themeforest about 3 weeks ago'
        },
        {
            title: 'Latest Posts',
            text: [
                'Lorem ipsum dolor sit amet',
                'sed do eiusmod tempor',
                'incididunt ut labore et dolore',
                'magna sed do eiusmod tempor',
            ]
        },
        {
            title: 'Flickr',
        }
    ]

    latestPost (text) {
        return (<div style={{borderBottom: 'medium solid #303030', paddingBottom: '1em'}}>
                <FooterBox text={text} />
            </div>);
    }

    flickrContainer () {
        return (<div className="flickrContainer" >
            <label></label>
            <label></label>
            <label></label>
            <label></label>
            <label></label>
            <label></label>            
        </div>);
    }

    render(){

        const item1 = this.footerContent[0];
        const item2 = this.footerContent[1];
        const item3 = this.footerContent[2];
        const item4 = this.footerContent[3];

        return(<section className="sec-footer">
            <div className="sec-footerContainer container">
                <div>
                    <FooterBox title={item1.title} text='' />
                    <FooterBox title='' text={item1.text1} />
                    <FooterBox title='' text={item1.text2}/>
                </div>
                <div>
                    <FooterBox title={item2.title} />
                    <FooterBox text={item2.text1}/>
                    <FooterBox text={item2.text2}/>
                </div>
                <div>
                    <FooterBox title={item3.title} />
                    {item3.text.map(this.latestPost)}
                </div>
                <div>
                <FooterBox title={item4.title} />
                    {this.flickrContainer()}
                </div>                
            </div>

        </section>);
    }
}

export default SecFooter;