import { Component } from "react";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box";
import { CardList } from "./components/card-list/card-list";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) =>
    this.setState({ searchField: event.target.value });

  render() {
    const { searchField, monsters } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
