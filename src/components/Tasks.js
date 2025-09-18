import React from "react";

export default function Tasks(props) {
  return(
<div className="card">
        <img className="task-image" src={props.url} alt="tasks-image"  />
        <h2 className="name">{props.name}</h2>
        <p className="points">{props.points}</p>
        <p>
          <button>Add</button>
        </p>
      </div>
  )
}