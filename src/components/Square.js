import React from 'react';
import "../css/Components/Square.css"

const Square = (props) => {
  return (
    <section id="square" className='squares-container'>
      <div id="square-home" className="square-home square-content-container active-square-home" onClick={() => { props.handleActiveSquare("home") }}>
        <h2>HOME</h2>
      </div>
      <div id="square-work" className="square-work square-content-container" onClick={() => { props.handleActiveSquare("work") }}>
        <h2>MY WORK</h2>
      </div>
      <div id="square-about" className="square-about square-content-container" onClick={() => { props.handleActiveSquare("about") }}>
        <h2>ABOUT ME</h2>
      </div>
      <div id="square-connect" className="square-connect square-content-container" onClick={() => { props.handleActiveSquare("connect") }}>
        <h2>CONNECT</h2>
      </div>
    </section>
  );
}

export default Square;
