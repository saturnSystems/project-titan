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

const yourOutfitBaseProductObj = {
  id: 0,
  name: "Click to add current product",
  slogan: null,
  description: null,
  category: null
}

class RIAC extends React.Component{
  constructor(props){
    super(props)
    this.state={
      cardType: "relatedProduct",
      yourOutfitIds: []
      // relatedProductId: null // So far, not needed
    }
  }

  setCardTypeToYourOutfit = () => {
      this.props.cardType("yourOutfit");
  }
  
  setCardTypeToRelatedProduct = () => {
    this.props.cardType("relatedProduct");
}


  addOutfitProductId = () => {
    console.log("RIAC: aOPI: t.p: ", this.props)
    if (!this.state.yourOutfitIds.includes(this.props.currentProduct.id) ) {
      this.setState({
        yourOutfitIds: [...this.state.yourOutfitIds, this.props.currentProduct.id]
      });   
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
    /*
    if currentProductId is in yourOutfitIds
      then image to show = alreadyInOutfit
      otherwise 
    */
    // console.log("RIAC-DATE-TIME: render: ", new Date());

    let yourOutfitImageToShow = "addToOutfitImage";



    if (!this.isReadytoRender()) return null;

    const { cardType, yourOutfitIds } = this.state;
    // const { setProductId, currentProduct, relatedProductsIds } = this.state;

    let relatedProductsIds = this.props.relatedProductsIds;
    // if (relatedProductsIds.length === 0) { 
    //   console.log("RIAC: no rPIds: ", relatedProductsIds); return null
    // };
    // console.log("RIAC: rPIds: ", relatedProductsIds)

    // YOUR OUTFIT
    /*
        const yourOutfitBaseProductObj = {
          id: 0,
          name: "Click to add current product",
          slogan: null,
          description: null,
          category: null
        }
    */

    const yourOutfitBaseProduct = yourOutfitBaseProductObj;
    console.log("RIAC: render: t.s.yOIds: ", this.state.yourOutfitIds);

     return (
      <Container-fluid class="layout container RIAC">

        <Col sm={{ span: 10, offset: 1 }} className="layout container">
          <strong><Row className="layout">Related Products</Row></strong>
          <Row className="layout"> {
              // relatedProductsIds.map(relatedProductId => { 
              relatedProductsIds.map((relatedProductId, index) => { 
                let indexProdIdStr = index.toString() + '-' + relatedProductId.toString();
                return (
                  // <Col className="layout col-3" key={relatedProductId}>
                  <Col className="layout col-3" key={indexProdIdStr}>
                    <ProductCard
                      currentProduct = {this.props.currentProduct}
                      setProductId={this.props.setProductId}
                      cardProductId={relatedProductId}
                      cardType={cardType}
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
              <div className="test" onClick={this.addOutfitProductId}>
                + <br /> Add current product to your outfits
              </div>
                {/* <ProductCard
                  currentProduct = {this.props.currentProduct}
                  setProductId={this.props.setProductId} // STRICTLY SPEAKING, NOT NEEDED
                  cardProductId={3}
                  cardType={this.state.cardType} 
                  cardImageName={yourOutfitImageToShow}
                  addOutfitProductId={this.addOutfitProductId}
                  >
                </ProductCard>               */}
            </Col>
          
            {
              // {setCardTypeToYourOutfit}
              yourOutfitIds.map((yourOutfitId, index) => { 
                index++;
                let indexOutfitIdStr = index.toString() + '-' + yourOutfitId.toString();
                return (
                  <Col className="layout col-3" key={indexOutfitIdStr}>
                    <ProductCard
                      currentProduct = {this.props.currentProduct}
                      setProductId={this.props.setProductId} // STRICTLY SPEAKING, NOT NEEDED
                      cardProductId={yourOutfitId}
                      cardType={this.state.cardType}
                    />
                  </Col>
                )
              })
            }
          </Row>
          {/* <Row className="layout">
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
          </Row> */}
        </Col>
      </Container-fluid>
    )
  }
}

export default RIAC;
