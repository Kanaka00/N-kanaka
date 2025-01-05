import React from "react";
import "../Pages/Skill.css";

const SkillCard = ({ title, icon , description }) => {

        return (
            <div className="skillcard">
                <div className="IBox">{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        )

}
export default SkillCard;
