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

  setRelatedProductId = (newRelatedProductId) => { // (event) parameter not actually used
    this.props.setProductId(this.props.relatedProductId);
  }

  render() {
    // console.log("RIAC-DATE-TIME: render: ", new Date());

    let relatedProductsIds = this.props.relatedProductsIds;
    // console.log("RIAC: constr: rPIds: ", relatedProductsIds)
    
    let currentRelatedProductIndex = 2;  // HARD CODED
    let relatedProductId = this.props.relatedProductsIds[currentRelatedProductIndex];
    
    if (!relatedProductId) return null;
    // if (relatedProductId === undefined) relatedProductId = null;
    // if (relatedProductId === undefined) return;
    // console.log("RIAC: rPId: ", relatedProductId)

    // let productCard = null;
    // if (typeof relatedProductId === 'number') {
    //   console.log("RIAC***** pc; rPId: ", relatedProductId);
    //   productCard = (<Col className="layout col-3">
    //     <ProductCard 
    //       setProductId={this.props.setProductId}
    //       currentProduct={this.props.currentProduct}
    //       relatedProductId={relatedProductId}
    //       // reviewRating={this.props.reviewRating}
    //       // styles={this.props.styles}
    //     />
    //   </Col>);
    // }

      // let productCards = [];
    // FIX: if (typeof relatedProductId === 'number') {
    //   FIX: for (let productIdIndex = 0; productIdIndex < relatedProductsIds.length; productIdIndex++ ) {
    //     let productCard = (<Col className="layout col-3">
    //       <ProductCard 
    //         setProductId={this.props.setProductId}
    //         currentProduct={this.props.currentProduct}
    //         relatedProductId={relatedProductId} // MAKE dynamic
    //         reviewRating={this.props.reviewRating} // do not use
    //         styles={this.props.styles} // do not use
    //       />
    //     </Col>);
    //     productCards.push(productCard);      
    //   }
    // } 


    return (
      <Container-fluid className="layout container">
        <Col sm={{ span: 10, offset: 1 }} className="layout container">
          <strong><Row className="layout">Related Products</Row></strong>
          <Row className="layout">
            {/* {productCard}
            {productCard}
            {productCard}
            {productCard} */}
            <Col className="layout col-3">
              <ProductCard 
                setProductId={this.props.setProductId}
                currentProduct={this.props.currentProduct}
                relatedProductId={relatedProductId}
              />
            </Col>
            <Col className="layout col-3">
              <ProductCard 
                setProductId={this.props.setProductId}
                currentProduct={this.props.currentProduct}
                relatedProductId={relatedProductId}
              />
            </Col>
            <Col className="layout col-3">
              <ProductCard 
                setProductId={this.props.setProductId}
                currentProduct={this.props.currentProduct}
                relatedProductId={relatedProductId}
              />
            </Col>
            <Col className="layout col-3">
              <ProductCard 
                setProductId={this.props.setProductId}
                currentProduct={this.props.currentProduct}
                relatedProductId={relatedProductId}
              />
            </Col>
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
