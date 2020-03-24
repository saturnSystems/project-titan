// this component is for use in RIAC.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';

import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col' // NOT YET USED
import StarRatings from "react-star-ratings";
import noImage from "./NoImageOnFile.jpg";
import noStyles from "./NoStylesOnFile.jpg";
import "./ProductCard.css";

// props as defined in calling parent
//   setProductId  ={this.props.setProductId}
//   currentProduct  ={this.props.currentProduct} USED ONLY FOR DEBUGGING
//   relatedProductId  ={relatedProductId}


const helper = require("../../../../helper/helper.js");

class ProductCardCD extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      relatedProduct: null, // change over time, requiring re-render
      relatedStyles: null, // change over time, requiring re-render
      relatedReviewRating: null, // change over time, requiring re-render
      // relatedStyleOriginalPrice: null, // QQQQ NEEDED?
      // relatedStyleSalePrice: null// QQQQ NEEDED?
    }

    // NO NEED TO BIND WHEN I HAVE <this>
    // arrow function; current this (that does not need to be overriden)
  }
  
  componentDidMount() {
    let relatedProductId = this.props.relatedProductId
    // console.log("+PC: cDM: if cRPId: ", relatedProductId)
    this.loadRelatedProductData();
  }

  // QQQQ needed??
  componentDidUpdate = (prevProps, prevState) => {
    // console.log("PC: cDU: rPI: ", relatedProductId);
    if (prevState.relatedProductId !== this.state.relatedProductId) {
      this.loadRelatedProductData();
    }
  }
  
  loadRelatedProductData = () => {
    helper.getOneProduct(this.props.relatedProductId, result => {
      this.setState({
        relatedProduct: result
      });
    });
    helper.getOneProductStyle(this.props.relatedProductId, result => {
      this.setState({
        relatedStyles: result.results
      });
    });

    helper.getReviewMetadata(this.props.relatedProductId, result => {
      this.setState({
        relatedReviewRating: helper.calculateReviewRating(result.ratings)
      });
    });
  }
  
  setProductId = () => { 
    this.props.setProductId(this.props.relatedProductId);
  }

    // Pre-method check if ready to render or null
    // function method
  isReadytoRender = () => {
    return (
      this.state.relatedProduct !== null &&
      this.state.relatedStyles !== null &&
      this.state.relatedReviewRating !== null
    );
  }

  render() {
    // console.log("PC-DATE-TIME: render: ", new Date());

    // Pre-method check if ready to render or null

    // Explicit method
    // if (this.state.relatedProduct === null) return null;
    // if (this.state.relatedStyles === null) return null;
    // if (this.state.relatedReviewRating === null) return null;

    // function method
    if (!this.isReadytoRender()) return null;

    let { relatedProduct, relatedStyles, relatedReviewRating } = this.state;

    // console.logs for DEBUGGING

    // console.log("PC: cP: ", currentProduct); // used only for debugging
    // console.log("PC: rPId: ", relatedProductId);
    // console.log("PC: rP: ", relatedProduct);
    // console.log("PC: rSs: ", relatedStyles);

    let relatedCategory = relatedProduct.category || null;
    // console.log("PC: rCat: ", relatedCategory);

    let relatedCaption = relatedProduct.name ? relatedProduct.name : null;
    // let relatedCaption = (relatedProduct.name === undefined || relatedProduct.slogan === undefined) ? null : relatedProduct.name + ' - ' + relatedProduct.slogan;
    // console.log("PC: rCap: ", relatedCaption);

    let relatedDefPrice = relatedProduct.default_price || null; // SUPERCEDED BY style data
    // console.log("PC: rDP: ", relatedDefPrice);

    // QQQQ is this appropriate: noDefault => 0;

    // let relatedStyle = relatedStyles.find(style => style["default?"] === 1) || relatedStyles[0];
    let relatedStyle = relatedStyles.find(style => style["default?"] === 1) || relatedStyles[0];
        // console.log("PC: rS: ", relatedStyle);

    // let relatedStylesIndex = 2; // HARD CODED - FALLBAK
    let relatedStyleOriginalPrice = relatedStyle.original_price || null;
    // console.log("PC: rStyleOPrice: ", relatedStyleOriginalPrice);

    let relatedStyleSalePrice = relatedStyle.sale_price || relatedDefPrice;
    // console.log("PC: rStyleSPrice: ", relatedStyleSalePrice);

    let relatedStyleImage = relatedStyle.photos[0].url || noImage;
    // console.log("PC: rSI: ", relatedStyleImage);

    // console.log("PC: render: rRR: ", relatedReviewRating);

    return (
      <Container-fluid class="layout product-card-layout align-left">


        <div id="product-card-div" onClick={this.setProductId}>
          <div>
            <div className="card mb-3 style-image">            
              <img className="card-img-top" src={relatedStyleImage}  alt="Display this style"/>
              {/* <img className="card-img-top" src={"https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}  alt=""/> */}
              <div className="card-img-overlay">
                <small><p className="btn btn-primary btn-star">&#x2605;</p></small>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">          
          <p className="card-text category">{relatedCategory}</p>
          <h5 className="card-title pc-caption">{relatedCaption}</h5>
          <small><p className="card-text text-muted price">${relatedStyleSalePrice} &nbsp; &nbsp; <del>${relatedStyleOriginalPrice}</del></p></small>
            <Row className="rating-stars">              
              <StarRatings
                rating={relatedReviewRating}
                starDimension="1em"
                starSpacing={"0"}
              />
            </Row>
          </div>
        </div>


        <CardDeck className="card-deck product-card">
          <Card>
            <Card.Img variant="top" src={noImage}/>
            <Card.Body>
              {/* <Card.Title>Card title</Card.Title> */}
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Img variant="top" src={noStyles} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80" />
            {/* <Card.Img className="short-image" variant="top" src="https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80" /> */}
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>


      </Container-fluid>

    )
  }
}

export default ProductCardCD;
