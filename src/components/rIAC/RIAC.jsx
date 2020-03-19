import React from 'react'
import 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductCard from './comp/ProductCard/ProductCard'
import "./RIAC.css";

class RIAC extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
}

  render() {
    console.log("RIAC-DATE-TIME: render: ", new Date());

    let currentRelatedProductIndex = 0;  // HARD CODED
    let relatedProductId = this.props.relatedProductsIds[currentRelatedProductIndex];
    console.log("----- R: rPI: ", relatedProductId)
    let productCard = null;
    if (typeof relatedProductId === 'number') {
      productCard = (<Col className="layout col-3">
        <ProductCard 
          setProductId={this.props.setProductId}
          currentProduct={this.props.currentProduct}
          relatedProductId={relatedProductId}
          // reviewRating={this.props.reviewRating}
          // styles={this.props.styles}
        />
      </Col>);
    }

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
                // reviewRating={this.props.reviewRating}
                // styles={this.props.styles}
              />
            </Col>

            {/* <Col className="layout col-3">
              <ProductCard 
                setProductId={this.props.setProductId}
                currentProduct={this.props.currentProduct}
                relatedProductId={relatedProductId}
                reviewRating={this.props.reviewRating}
                styles={this.props.styles}
              />
            </Col>
            <Col className="layout col-3">
              <ProductCard 
                setProductId={this.props.setProductId}
                currentProduct={this.props.currentProduct}
                relatedProductId={relatedProductId}
                reviewRating={this.props.reviewRating}
                styles={this.props.styles}
              />
            </Col>
            <Col className="layout col-3">
              <ProductCard 
                setProductId={this.props.setProductId}
                currentProduct={this.props.currentProduct}
                relatedProductId={relatedProductId}
                reviewRating={this.props.reviewRating}
                styles={this.props.styles}
              />
            </Col> */} */}
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

{/* <Col className="layout col-3">
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
</Col> */}
