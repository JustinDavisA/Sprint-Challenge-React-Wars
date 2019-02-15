import React, { Component } from 'react';
import './App.css';

import Character from './components/Character';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 'https://swapi.co/api/people',
      previous: '',
      next: ''
    };
    this.characterPagePrevious = this.characterPagePrevious.bind(this);
    this.characterPageNext = this.characterPageNext.bind(this);
  }

  componentDidMount() {
    this.getCharacters(this.state.page);
  }

  characterPagePrevious() {
    this.setState({
      page: this.state.previous
    });
    this.componentDidMount()
  }

  characterPageNext() {
    this.setState({
      page: this.state.next
    });
    this.componentDidMount();
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ starwarsChars: data.results });
        this.setState({ previous: data.previous })
        this.setState({ next: data.next })
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="page-buttons">
          <button onClick={this.characterPagePrevious}>Previous</button>
          <button onClick={this.characterPageNext}>Next</button>
        </div>
        <div className="char-list">
          {this.state.starwarsChars.map((charFromMap, index) => (
            <Character key={index} char={charFromMap} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
