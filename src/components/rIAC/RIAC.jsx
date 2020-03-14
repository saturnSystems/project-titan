import React from 'react'
import 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StarRatings from 'react-star-ratings'
import Button from 'react-bootstrap/Button'

class RIAC extends React.Component{
  constructor(props){
    super(props)
    this.state={}
    }
  
  render() {
    return (

      <Container-fluid className="layout container">
      <Col sm={{ span: 10, offset: 1 }} className="layout container">
        <Row className="layout">Related Products</Row>
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
