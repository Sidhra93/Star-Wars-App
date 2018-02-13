import React from 'react'

export default function CharacterDetails(props){
  return (
    <div className="row">
      <div className="col">
        <h5>{props.name}</h5>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth Year: {props.birthYear}</p>
        <p>Hair Color: {props.hairColor}</p>
      </div>
    </div>
  )
}
