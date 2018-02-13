import React from 'react'
import Character from './Character'
import CharacterDetails from './CharacterDetails'


export default class App extends React.Component{
  constructor(){
    super()
    this.onClickHandler = this.onClickHandler.bind(this)
    this.state = {
      characters: [],
      name: '',
      gender: '',
      height: '',
      hairColor: '',
      birthYear: '',
      showDetails: false
    }
  }

  componentDidMount(){
    fetch("http://localhost/php-get-started/apicall.php")
    .then(res => res.json())
    .then(response => {
      this.setState({characters: response.results})
    })
  }

  onClickHandler(event){
    const {characters, gender, height, hairColor, birthYear} = this.state
    this.setState({
      name: characters[event.target.id]['name'],
      gender: characters[event.target.id]['gender'],
      height: characters[event.target.id]['height'],
      hairColor: characters[event.target.id]['hair_color'],
      birthYear: characters[event.target.id]['birth_year'],
      showDetails: true
    })
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  checkDetails(){
    const {characters, name, gender, height, hairColor, birthYear} = this.state
    if (this.state.showDetails) {
      return (
        <CharacterDetails
          name={name}
          gender={gender}
          height={height}
          hairColor={hairColor}
          birthYear={birthYear}
        />
      )
    }
  }

  render(){
    return (
      <div className="container-fluid">
        <div>
          {this.checkDetails()}
        </div>
        <div className="row">
          {this.state.characters.map((character, index) =>
            (
                <div
                  key={index}
                  className="col-md-6 col-lg-4">
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
