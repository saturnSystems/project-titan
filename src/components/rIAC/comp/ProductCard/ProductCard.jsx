// this component will go in RIAC.jsx
//   for use in both Related Products and Your Outfit
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }

  // const currentImage = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
  // https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80
  // ProductCard body
  render() {
    return (
      <Container-fluid className="layout product-card-layout align-left">
        <div className="card mb-3">
          <p>
            <a href="../../overview/Overview.jsx" class="card-link">Card link
              <img className="card-img-top" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Card image cap" />
            </a>
            {/* <a href="../../overview/Overview.jsx"> <img className="card-img-top" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Card image cap" />
            </a> */}
          </p>
        <div className="card-img-overlay">
            <p><a href="../../overview/Overview.jsx" className="btn btn-primary">X</a></p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
          <p className="card-text category">Jackets</p>
            <h5 className="card-title caption">Camo Onesie - Forest Green &amp; Black </h5>
            <p className="card-text price"><small className="text-muted"></small>$140</p>
            <p className="card-text">****</p>
          </div>
          {/* <img class="card-img-bottom" src="..." alt="Card image cap"> */}
        </div>
      {/* <Row className="layout">
        <Col  sm={{ span: 4 }} className="layout container align-left">
          <Row className="layout">IMAGE</Row>
          <Row className="layout category">CATEGORY</Row>
          <Row className="layout caption">
            Expanded Product Name with Extra Text
          </Row>
          <Row className="layout price">$123</Row>
          <Row className="layout stars">*****</Row>
        </Col>
      </Row> */}
      </Container-fluid>
    )
  }
}

export default ProductCard;
