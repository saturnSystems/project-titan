import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      images: [],
      reviews: []
    };
  }
  /**
   * Use of Parameters:
  http://example.com/page?parameter=value&also=another
  **/
  // QUESTION: Put the helper function in a helper folder? //
  /////////////////// PRODUCTS ////////////////////////////////
  getAllProducts = () => {
    fetch(`http://3.134.102.30/products/list`) // CHANGE: default is 5. example: /?count=50 to get 50...
      .then(response => response.json())
      .then(data => console.log(data)) // CHANGE: to do what you want with it
      .catch(err => console.error(err));
    // returns array of objects with id, name, description, ...
  };

  getOneProduct = id => {
    fetch(`http://3.134.102.30/products/${id}`)
      .then(response => response.json())
      .then(data => console.log(data)) // CHANGE: to do what you want with it
      .catch(err => console.error(err));
    // returns object with id, name, description, ...
  };

  getOneProductStyle = id => {
    fetch(`http://3.134.102.30/products/${id}/styles`)
      .then(response => response.json())
      .then(data => console.log(data.results)) // CHANGE: to do what you want with it
      .catch(err => console.error(err));
    // returns object with style_id, name, prices, photos,...
  };

  getRelatedProducts = id => {
    fetch(`http://3.134.102.30/products/${id}/related`)
      .then(response => response.json())
      .then(data => console.log(data)) // CHANGE: to do what you want with it
      .catch(err => console.error(err));
    // This returns an array of related product id's
  };

  //////////////Questions And Answers///////////////////

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
