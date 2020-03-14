// this component will go in RIAC.jsx
//   for use in both Related Products and Your Outfit
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }

  // ProductCard body
  render() {
    return (
      <Container-fluid className="product-card-layout">
      <Row className="layout">
        <Col className="layout">
          <Row className="layout">IMAGE</Row>
          <Row className="layout">CATEGORY</Row>
          <Row className="layout">
            Expanded Product Name with Extra Text
          </Row>
          <Row className="layout">$123</Row>
          <Row className="layout">*****</Row>
        </Col>
      </Row>
      </Container-fluid>
    )
  }
}

export default ProductCard;
