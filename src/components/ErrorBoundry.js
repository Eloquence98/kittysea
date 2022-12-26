import React, { Component } from "react";

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    return this.state.hasError ? (
      <div>Ooops this is not good</div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
