import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Portfolio({resumeData}) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleProjectClick = (project) => { setSelectedProject(project); setIsModalOpen(true); };
  const handleModalClose = () => { setSelectedProject(null);  };

// Previous and next project
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { keyCode } = event;
      const currentIndex = resumeData.portfolio.indexOf(selectedProject);
      const lastIndex = resumeData.portfolio.length - 1;
      // Ternary operator - If left arrow key is pressed and current index>0 then set selected project to previous. 
      // If right arrow key is pressed and current index<last index, then set selected project to the next.
      (keyCode === 37 && currentIndex > 0) ? setSelectedProject(resumeData.portfolio[currentIndex - 1])
      : (keyCode === 39 && currentIndex < lastIndex) && setSelectedProject(resumeData.portfolio[currentIndex + 1])
  };
  document.addEventListener('keydown', handleKeyDown); // event listener 

  return () => document.removeEventListener('keydown', handleKeyDown);
}, [selectedProject, resumeData.portfolio]);


  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          {selectedProject === null && (
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
          )}
        </div>
      </div>

      {/* Modal for project details */}
      <Modal show={selectedProject !== null} onHide={() => {handleModalClose(); setIsModalOpen(false);}} container={document.getElementById('portfolio')}>
      <Modal.Header>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleModalClose}>
          <span aria-hidden="true">&times;</span>
        </button>
        <Modal.Title>{selectedProject?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject?.imgurl} className="img-fluid" alt={selectedProject?.name} />
          <p>{selectedProject?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={selectedProject?.reference} target="_blank" rel="noopener noreferrer">

            <button type="button" class="btn btn-success">View Project</button>

          </Button>
        </Modal.Footer>
      </Modal>


    </section>
  );
}
