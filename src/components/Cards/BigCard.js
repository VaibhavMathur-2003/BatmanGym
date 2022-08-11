
import React from 'react'
import "./BigCard.css"

function BigCard(props) {

  return (
    <div className="bigCard">
      <div className="title">
      <h1>{props.title}</h1>
      </div>
        <div className="bigImg">
            <img src={props.image} alt=""  />
        </div>
    </div>
  )
}

export default BigCard