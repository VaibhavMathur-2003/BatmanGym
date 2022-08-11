import React from "react";
import "./Card.css"

const Card = (props) => {
  
  return <>
  <div className="card">
    <div className="cardImage">
        <img src={props.img} alt="" />
    </div>
    <div>
        <div className="cardTitle">
            {props.title}
        </div>
        <div className="cardPara">
            {props.description}
        </div>
        <div>
         {props.rating}
        </div>
    </div>
  </div>
  </>;
};

export default Card;
