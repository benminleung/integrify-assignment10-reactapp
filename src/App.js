import React, { Component } from 'react';
import './App.css';
import img1 from './images/Header-img.png';
import ButtonCta from './contentComponents/ButtonCta';
import CallToAction from './CallToAction';
import mainData from './data.js';
import SecReadMore from './sec-readMore/SecReadMore';
import SecRecentWork from './sec-recentWork/SecRecentWork';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import SecTesDev from './sec-tesDev/SecTesDev';
import SecFooter from './sec-footer/SecFooter';
import SecCopyrightBar from './sec-copyrightBar/SecCopyrightBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className = "sec-header">
          <div className = "sec-header-container container">
            <img className = "logo" src={img1} alt="hello" />
            <div className = "headerText">
              <h1><b><i>POWERFULLY SIMPLE</i></b> WITH A</h1>
              <h1><b><i>SQUEEKY CLEAN</i></b> DESIGN.</h1>
              <h4>Find out how you can offere quick and powerful solutions to your customers now!</h4>
              <ButtonCta text="Learn More"/>
            </div>
          </div>
          <div className = "container"><CallToAction /></div>
        </header>
        <SecReadMore data={mainData.readMoreData}/>
        <SecRecentWork data={mainData.recentWorkData}/>
        <SecTesDev data={mainData}/>
        <SecFooter />
        <SecCopyrightBar />
      </div>
    );
  }
}

export default App;
