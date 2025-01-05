import React from 'react';
import "./Resume.css";
import { resumeprojects } from '../components/Data';
import ResumeProject from '../components/ResumeProject';

const ResumePage = () => {
  return (
    <>
      <div className='resumePage'>
            <div className="resume-box">
              <div className='info-box'>
                <h1>Kanakadri</h1>
                <h3>Frontend Developer</h3>
                  <div className="location">
                  <p><i class="fa-regular fa-envelope"></i>Kanakanelapati00@gmail.com</p>
                  <p><i class="fa-solid fa-phone"></i>+91 6304650601</p>
                   <p><i class="fa-solid fa-location-dot"></i>Kandukur , AP</p>
                  </div>
              </div>
              <div className="profile">
                <h2>Profile</h2>
                <p>Passinote Fronted Developer With hands-on Experience responsive
                  web application. Strongs foundation in HTML, CSS, JavaScript, and React.
                  Eager to contribute to a dynamic web development team and grow as a professional Developer.
                </p>
              </div>
              <div className="projects">
              <h2>Projects</h2>
              {resumeprojects.map((pro,index)=>(
                <ResumeProject
                
                title={pro.title}
                item1={pro.item1}
                item2={pro.item2}
                item3={pro.item3}
                listpoint={pro.listpoint}
                listpoint2={pro.listpoint2}
                listpoint3={pro.listpoint3}
                key={index}
                
                />
              ))}

              </div>

              <div className="resume-skills">
                 <h2>Skills</h2>
                <div className="skills-box">
                <div>
                  <h4>FONTEND DEVELOPMENT</h4>
                    <div className="com-box">
                    <p>HTML5</p>
                  <p>CSS3</p>
                  <p>JavaScript</p>
                  <p>React</p>
                    </div>
                </div>
                <div>
                  <h4>UI FRAMEWORKS</h4>
                <div className="com-box">
                  <p>Boostap</p>
                </div>
              </div>
              <div>
                  <h4>VERSION CONTROL</h4>
                  <div className="com-box">
                  <p>Git</p>
                  <p>GitHub</p>
                  </div>
                </div>
                <div>
                  <h4>OTHER SKILLS</h4>
                  <div className="com-box">
                  <p>Responsive Design</p>
                  <p>Web Performance</p>
                  <p>Brower DevTools</p>
                  </div>
                </div>
                </div>

            </div>




              <div className="links">
                <h2>Links</h2>
                <div className="link-box">
                  <ul>
                    <li>
                      <a href=""><i class="fa-brands fa-git"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fa-brands fa-facebook"></i></a>
                    </li>                    <li>
                      <a href=""><i class="fa-brands fa-instagram"></i></a>
                    </li>
                  </ul>
              </div>
              </div>





      </div>
      </div>
    </>
  );
}

export default ResumePage;