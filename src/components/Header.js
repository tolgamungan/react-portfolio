import React from 'react';

const Header = ({ resumeData }) => {
  return (
    <>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Skills</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="header-resume" href="./Tolga_Mungan_Full_Stack_Developer.pdf" target="_blank">Resume</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hi! 👋 my name is {resumeData.name}.</h1>
            <h3 style={{ color: '#fff', fontFamily: 'sans-serif' }}>I am a {resumeData.role}{resumeData.roleDescription}</h3>
            <hr />
            <ul className="social">
              {resumeData.socialLinks?.map((item) => (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    </>
  );
};

export default Header;
