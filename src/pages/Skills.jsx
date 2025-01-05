
import React from "react";
import { skills,projects } from "../components/Data";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import "./Skill.css";

const Skills = () => {
    return (
        <div>
          <div className="container">
          {skills.map((skill,index)=>(
              <SkillCard
               key ={index}
               title={skill.title}
               icon={React.createElement(skill.icon)}
               description={skill.description}
              />
            ))}
          </div>
            
            <div className="container">
            {projects.map((project, index) =>(
             <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              codelink={project.codelink}
              visitlink={project.visitlink}
              />
            ))}
            </div>
        </div>
    );
};

export default Skills;