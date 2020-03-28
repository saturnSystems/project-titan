import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// import Container from "react-bootstrap/Container";
import "react-bootstrap/Container";
// import Card from "react-bootstrap/Card"; // NEVER USED
// import CardDeck from "react-bootstrap/CardDeck"; // NEVER USED


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ProductCard from './comp/ProductCard/ProductCard'
import "./RIAC.css";

// import noImage from "./NoImageOnFile.jpg"; // NEVER USED
// import noStyles from "./NoStylesOnFile.jpg"; // NEVER USED


// props:
//   setProductId   ={this.setProductId}
//   currentProduct   ={this.state.currentProduct}
//   relatedProductsIds   ={this.state.relatedProductsIds}

class RIAC extends React.Component{
  constructor(props){
    super(props)
    this.state={
      cardType: "relatedProduct",
      // yourOutfitIds: []  // OR
      // yourOutfitIds: JSON.parse(localStorage.getItem("yourOutfitIds")) OR
      yourOutfitIds: this.reinstateOutfitIds() || []
      // relatedProductId: null // So far, not needed
    }
  }

  // NOT YET USED
  // componentDidMount() {
  //   if (this.reinstateOutfitIds()) { // in general, retrieved SHOULD be validated
  //     this.setState({
  //       yourOutfitIds: this.reinstateOutfitIds()
  //     });
  //   }
  // }

  componentDidUpdate = (prevProps, prevState) => {
    // console.log("PC: cDU: t.p: ", prevState, this.state);
    if (prevState.yourOutfitIds !== this.state.yourOutfitIds) {
      this.storeOutfitIds()
    }
  }

  storeOutfitIds = () => {
    return localStorage.setItem("yourOutfitIds", JSON.stringify(this.state.yourOutfitIds))
  }


  reinstateOutfitIds = () => {
    return JSON.parse(localStorage.getItem("yourOutfitIds"));
  }

  setCardTypeToYourOutfit = () => {
      this.props.cardType("yourOutfit");
  }
  
  setCardTypeToRelatedProduct = () => {
    this.props.cardType("relatedProduct");
}


  addOutfitProductId = () => {
    // console.log("RIAC: aOPI: t.p: ", this.props)
    if (!this.state.yourOutfitIds.includes(this.props.currentProduct.id) ) {
      this.setState({
        yourOutfitIds: [...this.state.yourOutfitIds, this.props.currentProduct.id]
      });   
    }
  }

  removeOutfitProductId = (toBeRemovedOutfitId) => { 
    let revisedOutfitIds = this.state.yourOutfitIds.filter(element => element !== toBeRemovedOutfitId);
    this.setState({
      yourOutfitIds: revisedOutfitIds
    });
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

    const { yourOutfitIds } = this.state;
    // const { setProductId, currentProduct, relatedProductsIds } = this.state;

    let relatedProductsIds = this.props.relatedProductsIds;
    // console.log("RIAC: rPIds: ", relatedProductsIds)

    // YOUR OUTFIT
    // console.log("RIAC: render: t.s.yOIds: ", this.state.yourOutfitIds);

     return (
      <Container-fluid class="layout container RIAC">

        <Col sm={{ span: 10, offset: 1 }} className="layout container">
          <strong><Row className="layout">Related Products</Row></strong>
          <Row className="layout"> {
              relatedProductsIds.map((relatedProductId, index) => { 
                let indexProdIdStr = index.toString() + '-' + relatedProductId.toString();
                return (
                  <Col className="layout col-3" key={indexProdIdStr}>
                    <ProductCard
                      currentProduct = {this.props.currentProduct}
                      setProductId={this.props.setProductId}
                      cardProductId={relatedProductId}
                      cardType={"relatedProduct"}
                      removeOutfitProductId={this.removeOutfitProductId}
                    />
                  </Col>
                )
              })
            }
          </Row>
          <br></br>

          <strong><Row className="layout">Your Outfit</Row></strong>
          <Row className="layout"> 
            <Col className="layout col-3" key={"0-0"}>
              <div className="add-current-product" onClick={this.addOutfitProductId}>
                <b>+</b><br /> Add current product to your outfits <br />(Limit: one of each product)
              </div>
            </Col>
          
            {
              yourOutfitIds.map((yourOutfitId, index) => { 
                index++;
                let indexOutfitIdStr = index.toString() + '-' + yourOutfitId.toString();
                return (
                  <Col className="layout col-3" key={indexOutfitIdStr}>
                    <ProductCard
                      currentProduct = {this.props.currentProduct}
                      setProductId={this.props.setProductId} // STRICTLY SPEAKING, NOT NEEDED
                      cardProductId={yourOutfitId}
                      cardType={"yourOutfits"}
                      removeOutfitProductId={this.removeOutfitProductId}
                    />
                  </Col>
                )
              })
            }
          </Row>
        </Col>
      </Container-fluid>
    )
  }
}

export default RIAC;
