import React from 'react';
import './../App.css';

const Certifications = ({resumeData}) => {
  const {certifications} = resumeData;

    /*
    I created a functional component instead of a class component with a render() method because 
    functional components are the more modern and 
    recommended approach to writing React components since the introduction of React Hooks in version 16.8.

    Functional components are simpler and easier to understand, 
    as they are just JavaScript functions that return JSX. 
    They tend to be less verbose and more readable than class components, and 
    they promote the use of React Hooks for managing state and side effects.
    */
  
return (
    <section className="certifications">
        <h2 className="certifications__title">Certifications</h2>
        <ul className="certifications__list">
        {certifications.map((certification) => (
            <li key={certification.id} className="certifications__list-item">
            <h3 className="certifications__cert-title">{certification.title}</h3>
            <p className="certifications__cert-issuer">{certification.issuer}</p>
            <p className="certifications__cert-date">{certification.date}</p>
            </li>
        ))}
        </ul>
    </section>
    );
};

export default Certifications;
