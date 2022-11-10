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
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monster"
          handleChange={(event) =>
            this.setState({ searchField: event.target.value })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
