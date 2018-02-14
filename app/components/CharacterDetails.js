import React from 'react'

export default function CharacterDetails(props){
  return (
    <div className="row">
      <div className="details">
        <h4>{props.name}</h4>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth Year: {props.birthYear}</p>
        <p>Hair Color: {props.hairColor}</p>
      </div>
    </div>
  )
}
