import React from 'react';
import College from "../assets/College.jpeg";
import Education from "../components/EducationCard";
import { education } from "../components/Data";
import { goals } from '../components/Data';
import "./AboutPage.css";
import Goals from '../components/Goals';

const Aboutpage = () => {
  return (
    <>
      <div className="Aboutpage">
        <div className="about">
          <div className="title-part">
            <div className="icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h1>My Journey in Technology</h1>
          </div>
          <div className="info">
            <div className="imgBox">
              <img src={College} alt="College" />
            </div>
            <div className="description">
              <p>
                From writing my first line of code in College to building enterprise solutions,
                my journey in technology has been driven by curiosity and a passion for solving complex problems. 
                Here's my story of growth, learning, and innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="education">
          <h2 className="journey">Education Journey</h2>
        </div>
        <div className="education-content">
          {education.map((edu, index) => (
            <Education
              key={index}
              icon={edu.icon}
              date={edu.date}
              cource={edu.cource}
              college={edu.college}
              description={edu.description}
            />
          ))}
        </div>

        <div className="drivesme">
          <h2 className="journey">What Drives Me</h2>
          <div className='motivation'>
            {goals.map((goal, index) => (
              <Goals
                key={index}
                icon={goal.icon}
                name={goal.name}
                description={goal.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
