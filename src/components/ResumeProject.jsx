

import React from 'react';
import "../pages/Resume.css"; 

const ResumeProject = ({title,item1,item2,item3,listpoint,listpoint2,listpoint3}) =>{

return(
    <div>
        <div className="resume-project">
            <h3>{title}</h3>
            <div className="comp">
                <p>{item1}</p>
                <p>{item2}</p>
                <p>{item3}</p>
            </div>
            <div className="points">
            <ul>
                <li >{listpoint}</li>
                <li>{listpoint2}</li>
                <li>{listpoint3}</li>
            </ul>

            </div>
        </div>
    </div>
)

}

export default ResumeProject;