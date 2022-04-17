import React from 'react';
import "../css/Components/Work.css"
import beltbook from "../assets/beltbook.jpeg";
import jsdates from "../assets/jsdates.png";
import danielscards from "../assets/danielscards.png";
import herffjones from "../assets/herffjones.png";
import groupby from "../assets/groupby.png";
import tictactoe from "../assets/tictactoe.png";

const projects = [
  {
    img: herffjones,
    title: "Herff Jones",
    description: `I've been working at HJ for about 3 years as a web developer.
      I've worked on 2 different scrum teams. Work has included feature development, upgrading angular components, 
      managing/leading development, bugfixes, deployments for a secondary app in our suite,
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
    description: `This little app will generate a Date constructor in JS. 
      It will then ask you what year, month, date, and hour will be returned 
      when local methods or UTC methods are called on the Date object.`,
    tech: "HTML, CSS, JavaScript",
  },
  {
    img: groupby,
    title: "Angular Group By",
    description: `I needed to implement a group by feature utilizing Angular Material tables for work
     so I decided to do a simple example to have for the future in case I need to implemenet 
     a group by feature again.`,
    tech: "Angular, Angular Material UI Component Library"
  },
  {
    img: danielscards,
    title: "Daniel's Cards",
    description: "Quick 1 Page UI for a card business idea I had.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    img: tictactoe,
    title: "Tic Tac Toe Game",
    description: "Little Tic Tac Toe game I made to for practice.",
    tech: "HTML, CSS, JavaScript"
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
              <h5>{project.tech}</h5>
              <p>{project.description}</p>
            </div>
          </div>
        })}
      </div>
    </section>
  );
}

export default Work;