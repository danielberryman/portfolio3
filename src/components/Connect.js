import React from 'react';
import "../css/Components/Connect.css"

const Connect = (props) => {
  return (
    <section className="connect-container">
      <h2>Let's Connect!</h2>
      <p>
        I love learning, I'm fascinated by life, and I'm fueled by what's possible.
        I'd be curious to know...what are you trying to make possible?
      </p>
      <div>
        <a href="https://www.linkedin.com/in/daniel-berryman/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/danielberryman" target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="mailto:dberrymandev@gmail.com">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
    </section>
  );
}

export default Connect;