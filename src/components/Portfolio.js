import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Portfolio({resumeData}) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

            {resumeData.portfolio && resumeData.portfolio.map((item) => (
              <div className="columns portfolio-item" key={item.name}>
                <div className="item-wrap" onClick={() => handleProjectClick(item)}>
                  <img src={item.imgurl} className="item-img" alt={item.name} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for project details */}
      <Modal show={selectedProject !== null} onHide={handleModalClose} container={document.getElementById('portfolio')}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject?.imgurl} className="img-fluid" alt={selectedProject?.name} />
          <p>{selectedProject?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={selectedProject?.reference} target="_blank" rel="noopener noreferrer">
            View Project
          </Button>
        </Modal.Footer>
      </Modal>


    </section>
  );
}
