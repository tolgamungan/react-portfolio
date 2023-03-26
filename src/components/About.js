import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            {/* <div className="three columns">
            </div> */}

            <div className="nine columns main-col">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

               <h2>About Me</h2>
               <p>
               {/* { resumeData.aboutme[0].firstParagraph } <br/><br/>
               { resumeData.aboutme[0].secondParagraph }  */}

               {
                  resumeData.aboutme.map(item =>{
                     return(
                     <p key={item.url}>{item.paragraph}</p>
                     )
                  }
                  )
               }
                
               </p>

               <div className="row">

                  <div className="columns contact-details">

                     <h2>Contact Details</h2>
                     <p className="address">
                           <span>{resumeData.name} {resumeData.lastname}</span>
                        <br></br>
                              <span>
                        {resumeData.address}
                     </span>
                     <br></br>
                     <span>{resumeData.email}</span>
                           </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}