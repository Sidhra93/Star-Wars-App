import React from 'react'

export default function Character(props){
  return (
    <div className="my-card card" style={{width: '250px'}}>
      <div className="card-block">
        <img className="card-img top" src="/app/avatar.jpg" width="250" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <button
            className="btn btn-primary"
            onClick={props.detailsHandler}
            id={props.index}>
            Details</button>
          </div>
      </div>
    </div>
  )
}
