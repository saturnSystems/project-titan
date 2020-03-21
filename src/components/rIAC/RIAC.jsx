import React from 'react'
import 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCard from './comp/ProductCard/ProductCard'
import "./RIAC.css";

// props:
//   setProductId   ={this.setProductId}
//   currentProduct   ={this.state.currentProduct}
//   relatedProductsIds   ={this.state.relatedProductsIds}

class RIAC extends React.Component{
  constructor(props){
    super(props)
    this.state={
      relatedProductId: null
    }
  }

  render() {
    // console.log("RIAC-DATE-TIME: render: ", new Date());

    let relatedProductsIds = this.props.relatedProductsIds;
    if (relatedProductsIds.length === 0) { console.log("RIAC: no rPIds: ", relatedProductsIds); return null};
    console.log("RIAC: constr: rPIds: ", relatedProductsIds)
    // console.log("RIAC: rPI: ", relatedProductId) // PROBABLY DOES NOT EXIST

    let relatedProductIndexes = relatedProductsIds.map(id => relatedProductsIds.indexOf(id));
    console.log("RIAC: rPIxs: ", relatedProductIndexes);
    // pass index, compute Id at ProductCard

    // if (!relatedProductId) return null; // PROBABLY DOES NOT EXIST

    return (
      <Container-fluid className="layout container">
        <Col sm={{ span: 10, offset: 1 }} className="layout container">
          <strong><Row className="layout">Related Products</Row></strong>
          <Row className="layout"> {
              relatedProductsIds.map(relatedProductId => { 
                return (
                  <Col className="layout col-3" key={relatedProductId}>
                    <ProductCard
                      currentProduct = {this.props.currentProduct}
                      setProductId={this.props.setProductId}
                      relatedProductId={relatedProductId}
                    />
                  </Col>
                )
              })
            }
          </Row>
          <br></br>

          <Row className="layout">Your Outfit</Row>
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
            <Col className="layout">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col>
            <Col className="layout">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col>
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
        </Col>
      </Container-fluid>
    )
  }
}

export default RIAC;
