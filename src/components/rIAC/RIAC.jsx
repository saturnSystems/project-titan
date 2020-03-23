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

  isReadytoRender = () => {
    return (
      this.props.setProductId !== null &&
      this.props.currentProduct !== null &&
      this.props.relatedProductsIds !== null
    );
  }

  render() {
    // console.log("RIAC-DATE-TIME: render: ", new Date());

    if (!this.isReadytoRender()) return null;

    let relatedProductsIds = this.props.relatedProductsIds;
    // if (relatedProductsIds.length === 0) { 
    //   console.log("RIAC: no rPIds: ", relatedProductsIds); return null
    // };
    console.log("RIAC: rPIds: ", relatedProductsIds)

     return (
      <Container-fluid class="layout container RIAC">
        <Col sm={{ span: 10, offset: 1 }} className="layout container">
          <strong><Row className="layout">Related Products</Row></strong>
          <Row className="layout"> {
              // relatedProductsIds.map(relatedProductId => { 
              relatedProductsIds.map((relatedProductId, index) => { 
                  return (
                    // <Col className="layout col-3" key={relatedProductId}>
                    <Col className="layout col-3" key={index}>
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
