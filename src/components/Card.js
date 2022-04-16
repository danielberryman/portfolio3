import React from 'react';
import "../css/Components/Card.css"

const Card = (props) => {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

export default Card;