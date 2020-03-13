import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const helper = require("./helper/helper.js");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      currentProduct: [],
      images: [],
      reviews: [],
      questions: [],
      answers: []
    };
  }

  render() {
    return (
      <Container-fluid>
        <Row>
          <Col>First</Col>
          <Col>Second</Col>
          <Col>Third</Col>
        </Row>
        <Container>
          <Row>
            <Col>First</Col>
            <Col>Second</Col>
            <Col>Third</Col>
          </Row>
        </Container>
      </Container-fluid>
    );
  }
}

export default App;
