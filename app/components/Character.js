import React from 'react'

export default function Character(props){
  return (
    <div className="card" style={{width: '250px', marginBottom: "10px"}}>
      <img className="card-img top" src="http://via.placeholder.com/250x250" />
      <div className="card-body">
        <p className="card-title">{props.name}</p>
        <button
          className="btn btn-primary"
          onClick={props.detailsHandler}
          id={props.index}>
            Details</button>
      </div>
    </div>
  )
}
