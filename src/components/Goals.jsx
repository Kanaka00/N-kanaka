

import React from 'react';
import "../pages/AboutPage.css"; 



const Goals = ({ icon, description, name }) => {
  return (
    <div>
        <div className="goal">
            <div className="icon">{icon && React.createElement(icon)}</div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    </div>
  );
};

export default Goals;