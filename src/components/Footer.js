import React from 'react';

const Footer = ({ resumeData }) => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          {resumeData.socialLinks?.map(({ url, className }) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <i className={className} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
