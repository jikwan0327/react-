import React, { Component } from "react";
import Content from "./Content";
import Subject from "./Subject";
import TOC from "./TOC";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "World Wid Web!" },
    };
  }
  render() {
    return (
      <div>
        <Subject title={this.state.subject.title} subject={this.state.subject.sub}></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
