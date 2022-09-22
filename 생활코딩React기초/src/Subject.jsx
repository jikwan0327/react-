import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subject}</h2>
      </header>
    );
  }
}

export default Subject;
