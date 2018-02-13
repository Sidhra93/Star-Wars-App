import React from 'react'
import Character from './Character'

export default class App extends React.Component{

  constructor(){
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount(){
    fetch("http://localhost/star-wars-api/api.php")
    .then(res => res.json())
    .then(response => {
      this.setState({characters: response.results})
    })
  }

  render(){
    return (
      <div>
        <div className="row">
          {this.state.characters.map((character, index) =>
            (
                <div
                  key={index}
                  className="col-4">
                  <Character
                    name={character.name}
                    index={index}
                    detailsHandler={this.onClickHandler} />
                </div>
            ))}
        </div>
      </div>
    )

  }
}
