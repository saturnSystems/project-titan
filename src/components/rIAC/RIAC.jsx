import React from 'react'
import 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import StarRatings from 'react-star-ratings'  // not yet used
// import Button from 'react-bootstrap/Button' // not yet used
import ProductCard from './comp/ProductCard/ProductCard'
import "./RIAC.css";

// const helper = require("../../../src/helper/helper.js");

class RIAC extends React.Component{
  constructor(props){
    super(props)
    this.state={
      // productCards: [],
      currentRelatedProductCard: null,
      // currProduct: this.props.currentProduct,
      // relatedProductsIds: this.props.relatedProductsIds,
      relatedProducts: null
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     let relatedProductsIds=[];
  //     for(let i=0; i< relatedProductsIdss.length; i++){
  //       if(this.props.[i]["default?"]){
  //         defaultStyle=this.props.styles[i]
  //       }
  //     }
  //     this.setState({
  //       currentStyle:defaultStyle
  //     });
  //   }
  // }
   
  render() {
    // console.log("R: t.p.cP: ", this.props.currentProduct);
    // let currProduct = this.props.currentProduct;
    // console.log("R: cP: ", currProduct);
// console.log("R: ENTER: t.p: ", this.props);
    // console.log("R: ENTER: currentProduct: ", currentProduct);
    // const currProd = this.props;
    // const currName = currProd.name;
    // console.log("R: cN: ", currName);
// console.log("R: t.p.cP: ", this.props.currentProduct);
// console.log("R: t.p.rP: ", this.props.relatedProductsIds);
// console.log("R: t.p.rPIds: ", this.props.relatedProductsIds)
let relatedProductsIds = this.props.relatedProductsIds;
// if (relatedProductsIds[0] !== undefined) {
  // console.log("R: rPIds: ", relatedProductsIds)
// }
let relatedProductId = relatedProductsIds[0];
// let allProds = this.state.allProducts;
// console.log("R: to: aPs: ", typeof allProds)
// console.log("R: keys: aPs: ", allProds.keys())

// console.log("R: aPs[1].id}: ", allProds[1].id)
if (this.props.styles[0] !== undefined) {
  // console.log("R: t.p.s: ", this.props.styles)
}

    return (

      <Container-fluid className="layout container">
        <Col sm={{ span: 10, offset: 1 }} className="layout container">
          <strong><Row className="layout">Related Products</Row></strong>
          <Row className="layout">
            <Col className="layout col-3">
            <ProductCard 
              currentProduct={this.props.currentProduct}
              // relatedProductId={this.props.relatedProductsIds[1]}
              relatedProductId={relatedProductId}
              // relatedProductsIds={this.state.relatedProductsIds}
              reviewRating={this.props.reviewRating}
              styles={this.props.styles}
              />
              {/* <Row className="layout">IMAGE</Row>
              <Row className="layout">Jackets</Row>
              <Row className="layout caption">
                Camo Onesie - Forest Green &amp; Black <br/>.
              </Row>
              <Row className="layout">$140</Row>
              <Row className="layout">****</Row> */}
            </Col>
            <Col className="layout col-3">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">Accessories</Row>
              <Row className="layout caption">
                Bright Future Sunglasses - Black Lenses &amp; Black Frame
              </Row>
              <Row className="layout">$69</Row>
              <Row className="layout">*****</Row>
            </Col>
            <Col className="layout col-3">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">Pants</Row>
              <Row className="layout caption">
                Morning Joggers - Black <br/>. <br/>.
              </Row>
              <Row className="layout">$40</Row>
              <Row className="layout">***</Row>
            </Col>
            <Col className="layout col-3">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">Pants</Row>
              <Row className="layout caption">
                Slacker's Slacks - Olive Green  <br/>. <br/>.
              </Row>
              <Row className="layout">$65</Row>
              <Row className="layout">*</Row>
              {/* <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row> */}
            </Col>
            {/* <Col className="layout col-3">
              <Row className="layout">IMAGE</Row>
              <Row className="layout">CATEGORY</Row>
              <Row className="layout">
                Expanded Product Name with Extra Text
              </Row>
              <Row className="layout">$123</Row>
              <Row className="layout">*****</Row>
            </Col> */}
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
