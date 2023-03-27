import React from 'react';

const Resume = ({ resumeData }) => (
  <section id="resume">
    <div className="row education">
      <div className="three columns header-col">
        <h1><span>Education</span></h1>
      </div>
      <div className="nine columns main-col">
        {resumeData.education?.map(({ UniversityName, specialization, MonthOfPassing, YearOfPassing }) => (
          <div className="row item" key={UniversityName}>
            <div className="twelve columns">
              <h3>{UniversityName}</h3>
              <p className="info">
                {specialization}
                <span>&bull;</span> <em className="date">{MonthOfPassing} {YearOfPassing}</em>
              </p>
              {/* <p>{Achievements}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>
      <div className="nine columns main-col">
        <p>{resumeData.skillsDescription}</p>
        <div className="bars">
          <ul className="skills">
            {resumeData.skills?.map(({ skillname }) => (
              <li key={skillname}>
                <span className={`bar-expand ${skillname.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`}></span>
                <em>{skillname}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
