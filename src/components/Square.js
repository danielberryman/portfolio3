import React from 'react';
import "../css/Components/Square.css"
import logo from '../assets/test2.png';

const Square = (props) => {
  return (
    <section id="big-square" className='Squares-Container'>
      <div className="Square-Home Square-Content-Container" onClick={() => { props.turn(0) }}>
        <h2>HOME</h2>
      </div>
      <div className="Square-Work Square-Content-Container" onClick={() => { props.turn(1) }}>
        <h2>MY WORK</h2>
      </div>
      <div className="Square-About Square-Content-Container" onClick={() => { props.turn(2) }}>
        <h2>ABOUT ME</h2>
      </div>
      <div className="Square-Contact Square-Content-Container" onClick={() => { props.turn(3) }}>
        <h2>CONNECT</h2>
      </div>
    </section>
  );
}

Square.propTypes = {};

Square.defaultProps = {};

export default Square;
