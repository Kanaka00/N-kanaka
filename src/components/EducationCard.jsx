import React from 'react';
import "../pages/AboutPage.css";

const EducationCard = ({icon: Icon, cource, college, description, date }) => {
    return (
        <div className="educationCard">
            <div className="imgBox">
                <Icon/>
            </div>
            <div className="edu-info">
                <div className="data">
                    <h6>{date}</h6>
                </div>
                <h5>{cource}</h5>
                <h4>{college}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default EducationCard;