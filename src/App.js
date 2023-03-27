import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Certifications from './components/Certifications';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Header resumeData={resumeData}/>
        <Routes>
          <Route path="/" element={<About resumeData={resumeData} />} />
          <Route path="/resume" element={<Resume resumeData={resumeData} />} />
          <Route path="/certifications" element={<Certifications resumeData={resumeData} />} />
          <Route path="/portfolio" element={<Portfolio resumeData={resumeData} />} />
        </Routes>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}
export default App;
