import React, { Component } from "react";
import { render } from "react-dom";
import { Container } from "react-bootstrap";
import MyLibrary from "./MyLibrary";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Container className="my-auto">
        <MyLibrary />
      </Container>
    );
  }
}

render(<App />, document.getElementById("root"));
