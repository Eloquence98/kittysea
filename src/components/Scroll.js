import React, { Component } from "react";

export class Scroll extends Component {
  render() {
    const { children } = this.props;
    return <div className="scroll-bar">{children}</div>;
  }
}

export default Scroll;
