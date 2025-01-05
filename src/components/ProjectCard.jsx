import React from "react";
import "../Pages/Skill.css"

const projectCard = ({ title, image, description, codelink , visitlink}) => {

    return( 
        <div className="projectCard">
            <div className="imgBox">
                <img src={image} alt={description} srcset="" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="buttons">
               <a href={codelink}><button>code link</button></a>
               <a href={visitlink} className="visit"><button>visit link</button></a>
            </div>
        </div>
    )
};
export default projectCard; 
