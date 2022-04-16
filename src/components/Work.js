import React from 'react';
import "../css/Components/Work.css"
import Card from './Card';
import beltbook from "../assets/beltbook.jpeg";
import jsdates from "../assets/jsdates.png";
import danielscards from "../assets/danielscards.png";
import herffjones from "../assets/herffjones.png";

const projects = [
  {
    img: herffjones,
    title: "Herff Jones",
    description: `I've been working at HJ for about 3 years as a web developer.
      I've worked on 2 different scrum. Work has included feature development, upgrading components, 
      managing/leading development, bugfix, and deployments for a secondary app in our suite,
      and triaging/fixing bug reports.`,
    tech: "Angular/AngularJS, Java, OracleSQL"
  },
  {
    img: beltbook,
    title: "The Beltbook",
    description: `Before I started programming I was a theatre professional. On this project I 
      teamed up with my voice teacher to create an app that allows theatre students, teachers, 
      and professionals to find and categorize music.`,
    tech: "React, Node/Express, MySQL"
  },
  {
    img: jsdates,
    title: "JavaScript Dates",
    description: "Description",
    tech: "Tech list"
  },
  {
    img: danielscards,
    title: "Card App Home Page",
    description: "Description",
    tech: "Tech list"
  },
]

const Work = (props) => {
  let projectNum = 1;

  return (
    <section className="work-container">
      <div className="work-container-content">
        {projects.map(project => {
          return <div className={`work-item work-item-${projectNum++}`}>
            <img src={project.img} alt={project.title} className="work-img" />
            <div className="work-item-content">
              <h4 className="work-title">{project.title}</h4>
              <p>{project.tech}</p>
              <h5>{project.description}</h5>
            </div>
          </div>
        })}
      </div>
    </section>
  );
}

export default Work;