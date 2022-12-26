import React, { Component } from "react";
import Card from "./Card";

export class CardList extends Component {
  render() {
    const { kittens } = this.props;
    return (
      <div>
        {kittens.map(({ id, name, username }, i) => {
          return <Card key={id} id={id} name={name} owner={username} />;
        })}
      </div>
    );
  }
}

export default CardList;
