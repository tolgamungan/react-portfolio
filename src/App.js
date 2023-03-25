import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Certifications from './components/Certifications';
class App extends Component {
  render() {
    return ( 

      <Route
          // path="/"
          render={() => 
          <div className="App">
            <Header resumeData={resumeData}/>
            <About resumeData={resumeData}/>
            <Resume resumeData={resumeData}/>
            <Certifications resumeData={resumeData} />
            <Portfolio resumeData={resumeData}/>
            <Footer resumeData={resumeData}/>
          </div>
        }
        // exact 
        />
        
        // <Testimonials resumeData={resumeData}/>
      //   {/* <ContactUs resumeData={resumeData}/> */}
    );
  }
}

export default App;