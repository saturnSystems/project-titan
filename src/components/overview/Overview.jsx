import React from 'react';
import 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StarRatings from 'react-star-ratings'

function Overview (props){
  return(

  <Container-fluid className="layout container">
    <Col className="layout container">
      <Row className="layout">
        <Col className="layout" sm={8}>IMAGE CAROUSEL</Col>
        <Col className="layout">
          <Row className="layout"><StarRatings rating={props.reviewRating} starDimension="1em" starSpacing={"0"}/>  Read all reviews</Row>
          <Row className="layout">CATEGORY</Row>
          <Row className="layout">Expanded Product Name</Row>
          <Row className="layout">$369</Row>
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
          <Row className="layout">Product Slogan, Pithy Description Or Catchphrase.</Row>
          <Row className="layout">Description details.</Row>
        </Col>
        <Col className="layout" sm={3}>
          <Row className="layout">Quick Details</Row>
          <Row className="layout">Quick Details</Row>
          <Row className="layout">Quick Details</Row>
          <Row className="layout">Quick Details</Row>
        </Col>
      </Row>
    </Col>
  </Container-fluid>
  )}
  export default Overview