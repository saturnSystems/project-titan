import React from 'react';
import 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StarRatings from 'react-star-ratings'

class Overview extends React.Component{
constructor(props){
  super(props)
  this.state={}
  }

  conditionalReviews(){
    if(this.props.numReviews){
      return(
        <div>
          <StarRatings 
            rating={this.props.reviewRating}
            starDimension={"1em"} 
            starSpacing={"0"}
          />
          <a 
            href="" 
            onClick={(e)=>{this.props.scroll(), e.preventDefault()}} 
            style={{textDecoration:"underline"}}
          >
              Read all {this.props.numReviews} reviews
          </a>
        </div>
      )
    }else{
      return <br/>
    }
  }

  render(){
    return(
      <Container-fluid className="layout container">
        <Col className="layout container">
          <Row className="layout">
            <Col className="layout" sm={8}>IMAGE CAROUSEL</Col>
            <Col className="layout">
              <Row className="layout">
                {this.conditionalReviews()}
              </Row>
              <Row className="layout">{this.props.product.category}</Row>
              <Row className="layout">{this.props.product.name}</Row>
              <Row className="layout">${this.props.product.default_price}</Row>
              <Row className="layout">STYLE > SELECTED STYLE</Row>
              <Row className="layout">
                <Col className="layout">
                  <Row className="layout">STYLE PREVIEW BUTTONS</Row>
                  <Row className="layout">STYLE PREVIEW BUTTONS</Row>
                </Col>
              </Row>
              <Row className="layout">SELECT SIZE | 1</Row>
              <Row className="layout">ADD TO BAG | *</Row>
            </Col>
          </Row>
          <br></br>
          <Row className="layout">
            <Col className="layout" sm={{span:7,offset:1}}>
              <Row className="layout">{this.props.product.slogan}</Row>
              <Row className="layout">{this.props.product.description}</Row>
            </Col>
            <Col className="layout" sm={3}>
              {this.props.product.features && this.props.product.features.map((each,i)=><Row key={i} className="layout">&#10003; {each.feature}: {each.value}</Row>)}
            </Col>
          </Row>
        </Col>
      </Container-fluid>
    )
  }
}
export default Overview;