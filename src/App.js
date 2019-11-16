import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  
  state = {
    monsters: [],
    searchField: ''
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
    .then(users => this.setState({ monsters: users }))
    );
  }

  handleSearch = (e) =>  {
    console.log(e.target.value)
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>  
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1 className="Monster-title"> Monsters Rolodex </h1>
        <SearchBox placeholder='Search Monsters' search={this.handleSearch}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
