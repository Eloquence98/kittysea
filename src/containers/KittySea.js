import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

export class KittySea extends Component {
  constructor() {
    super();
    this.state = {
      kittens: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ kittens: users }));
  }

  render() {
    const { kittens, searchField } = this.state;
    const filteredKittens = kittens.filter((kitten) => {
      return kitten.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="tc pt5">
        <h1 className="mt0">{!kittens.length ? "Loading..." : "Kitty Sea"}</h1>
        <SearchBox searchChange={this.onSearchChange} searchItem={"kittens"} />
        <Scroll>
          <ErrorBoundry>
            <CardList kittens={filteredKittens} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

// const KittySea = () => {
//   const [search, setSearch] = useState(kittens);

//   const onSearchChange = (e) => {
//     setSearch(
//       kittens.filter((kitten) => {
//         return kitten.name.toLowerCase().includes(e.target.value.toLowerCase());
//       })
//     );
//   };

//   return (
//     <div className="tc">
//       <h1>KittySea</h1>
//       <SearchBox searchChange={onSearchChange} />
//       <CardList kittens={search} />
//     </div>
//   );
// };

export default KittySea;
