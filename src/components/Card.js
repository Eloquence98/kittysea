import React, { Component } from "react";

class Card extends Component {
  render() {
    const { id, name, owner } = this.props;
    return (
      <div className="dib br3 pa3 ma2 grow bw2 shadow-5 tc">
        <img
          className="w5"
          // src={`https://robohash.org/${name}?set=set4?100x100`}
          src={`https://robohash.org/${id}?set=set4`}
          alt="Kittens"
        />
        <div>
          <h2>{owner}</h2>
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

export default Card;
