import React from 'react';
import "../css/Components/Work.css"
import beltbook from "../assets/beltbook.webp";
import jsdates from "../assets/jsdates.webp";
import danielscards from "../assets/danielscards.webp";
import herffjones from "../assets/herffjones.webp";
import groupby from "../assets/groupby.webp";
import tictactoe from "../assets/tictactoe.webp";

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
    tech: "React, Node/Express, MySQL",
    link: "https://beltbook.vercel.app/"
  },
  {
    img: jsdates,
    title: "JavaScript Dates",
    description: `This little app will generate a Date constructor in JS. 
      It will then ask you what year, month, date, and hour will be returned 
      when local methods or UTC methods are called on the Date object.`,
    tech: "HTML, CSS, JavaScript",
    link: "https://danielberryman.github.io/jsdates/"
  },
  {
    img: groupby,
    title: "Angular Group By",
    description: `I needed to implement a group by feature utilizing Angular Material tables for work
     so I decided to do a simple example to have for the future in case I need to implemenet 
     a group by feature again.`,
    tech: "Angular, Angular Material UI Component Library",
    link: "https://danielberryman.github.io/angular-mat-groupby/"
  },
  {
    img: danielscards,
    title: "Daniel's Cards",
    description: "Quick 1 Page UI for a card business idea I had.",
    tech: "HTML, CSS, JavaScript",
    link: "https://danielberryman.github.io/daniels-cards/"
  },
  {
    img: tictactoe,
    title: "Tic Tac Toe Game",
    description: "Little Tic Tac Toe game I made to for practice.",
    tech: "HTML, CSS, JavaScript",
    link: "https://danielberryman.github.io/tic-tac-toe/"
  },
]

const Work = (props) => {
  let projectNum = 1;

  return (
    <section className="work-container fadeIn">
      <div className="work-container-content">
        {projects.map(project => {
          const imgClass = projectNum === 1 ? "work-img-no-hover" : "work-img"
          return (
            <div key={`${project.title}-${projectNum}`} className={`work-item work-item-${projectNum++}`}>
              <a href={project.link} target="blank">
                <img src={project.img} alt={project.title} className={imgClass} />
              </a>
              <div className="work-item-content">
                <h4 className="work-title">{project.title}</h4>
                <h5>{project.tech}</h5>
                <p>{project.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Work;