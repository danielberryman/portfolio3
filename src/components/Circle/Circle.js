import React from 'react';
import "../../css/Components/Circle.css"
import logo from '../../assets/test2.png';

const Circle = (props) => {

  function turn(btn) {
    const c = document.getElementById("circle").classList;
    const workBtn = document.getElementById("work-btn").classList;
    const abtBtn = document.getElementById("about-btn").classList;

    if (!c.contains("Work-Btn__Active") && !c.contains("About-Btn__Active")) {
      if (!btn) {
        c.add("Work-Btn__Active");
        workBtn.add("Circle-Nav__btn__Active");
      } else {
        c.add("About-Btn__Active");
        abtBtn.add("Circle-Nav__btn__Active");
      }
    }

    if (btn === 0) { // 0 is Work
      if (c.contains("About-Btn__Active")) {
        c.remove("About-Btn__Active");
        c.add("Work-Btn__Active");

        abtBtn.remove("Circle-Nav__btn__Active");
        workBtn.add("Circle-Nav__btn__Active");
      }
    } else { // 1 is About
      if (c.contains("Work-Btn__Active")) {
        c.remove("Work-Btn__Active");
        c.add("About-Btn__Active");

        workBtn.remove("Circle-Nav__btn__Active");
        abtBtn.add("Circle-Nav__btn__Active");
      }
    }
  }

  return (
    <div className='Circle-Container'>
      <section id="circle" className="Circle" data-testid="Circle">
        <div className="Circle__Logo__bg"></div>
        <img className="Circle__Logo" src={logo} alt="headshot" />
        <h1 className='Circle__Title'>DANIEL<br />BERRYMAN</h1>
        <div className='Circle-Nav'>
          <button id="work-btn" className='Circle-Nav__btn Circle-Nav__btn__Work' onClick={() => { turn(0) }}>Work</button>
          <button id="about-btn" className='Circle-Nav__btn Circle-Nav__btn__About' onClick={() => { turn(1) }}>About</button>
        </div>
        <div className='Circle-Desc'>
          <h2 className='Circle-Desc__Title'>&#123; FULL STACK DEV &amp;&amp;</h2>
          <p className='Circle-Desc__Quote'>Husband, Dad, Singer, Musician, VR Enthusiast, Lover of Games &#125;</p>
        </div>
      </section>
    </div >
  );
}

Circle.propTypes = {};

Circle.defaultProps = {};

export default Circle;
