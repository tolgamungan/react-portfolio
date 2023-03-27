import React from 'react';

const About = ({ resumeData }) => {
  return (
    <section id="about">
      <div className="row">
        <div className="nine columns main-col">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          <h2>About Me</h2>
          {resumeData.aboutme.map(({ paragraph, url }) => (
            <p key={url}>{paragraph}</p>
          ))}
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{resumeData.name} {resumeData.lastname}</span>
                <br />
                <span>{resumeData.address}</span>
                <br />
                <span>{resumeData.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
