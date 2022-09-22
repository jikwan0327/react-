import React, { Component } from "react";
import Content from "./Content";
import Subject from "./Subject";
import TOC from "./TOC";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "World Wid Web!" },
      contents: [
        { id: 1, title: "html", desc: "HTML is HyperTextMarkupLanguage" },
        { id: 2, title: "html", desc: "HTML is HyperTextMarkupLanguage" },
        { id: 3, title: "html", desc: "HTML is HyperTextMarkupLanguage" },
      ],
    };
  }
  render() {
    return (
      <div>
        <Subject title={this.state.subject.title} subject={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
