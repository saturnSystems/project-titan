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
      <Container-fluid className="layout product-card-layout align-left">
      <Row className="layout">
        <Col  sm={{ span: 4 }} className="layout container align-left">
          <Row className="layout">IMAGE</Row>
          <Row className="layout category">CATEGORY</Row>
          <Row className="layout caption">
            Expanded Product Name with Extra Text
          </Row>
          <Row className="layout price">$123</Row>
          <Row className="layout stars">*****</Row>
        </Col>
      </Row>
      </Container-fluid>
    )
  }
}

export default ProductCard;
