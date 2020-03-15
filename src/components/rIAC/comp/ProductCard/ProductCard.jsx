// this component will go in RIAC.jsx
//   for use in both Related Products and Your Outfit
import React from 'react';
// import Row from 'react-bootstrap/Row'; // not yet used
// import Col from 'react-bootstrap/Col'; // not yet used

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
        <div id="product-card-div">
          <a href="../../overview/Overview.jsx">
          <div className="card mb-3">
            <p>
              {/* <a className="card-link"> */}
                {/* <img className="card-img-top" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Card image cap" /> */}
                <img className="card-img-top" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt=""/>
                {/* <a href="../../overview/Overview.jsx"> <img className="card-img-top" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Card image cap" />
                </a> */}
              {/* </a> */}
            </p>
            <div className="card-img-overlay">
              {/* <p><a href="../../overview/Overview.jsx" className="btn btn-primary">X</a></p> */}
              <small><p className="btn btn-primary">x</p></small>
            </div>
          </div>
        </a>
        </div>
        <div className="card">
          <div className="card-body">
          <p className="card-text category">Jackets</p>
            <h5 className="card-title caption">Camo Onesie - Forest Green &amp; Black </h5>
            {/* <small><p className="card-text price" className="text-muted">$140</p></small> */}
            <small><p className="card-text text-muted price">$140</p></small>
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
