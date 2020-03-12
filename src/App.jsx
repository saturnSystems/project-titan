import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() { 
  return (

<Container-fluid className="layout">

  <Row className="layout">
      <Col className="layout">Header</Col>
  </Row>

  <Container-fluid className="layout">
    <Row className="layout">
      <Col className="layout" sm={8}>IMAGE CAROUSEL</Col>
      <Col className="layout" sm={4}>STYLES SELECTION</Col>
    </Row>
    <Container className="layout container">
      <Row className="layout">
        <Col className="layout" sm={8}>Slogan,Description,Catchphrase</Col>
        <Col className="layout" sm={4}>details</Col>
      </Row>
    </Container>
  </Container-fluid>
  
  <Container className="layout container">
    <Row className="layout">Related Products</Row>
    <Row className="layout">
      <Col className="layout">Product</Col>
      <Col className="layout">Product</Col>
      <Col className="layout">Product</Col>
      <Col className="layout">Product</Col>
    </Row>
    <Row className="layout">Your Outfit</Row>
    <Row className="layout">
      <Col className="layout">Outfit</Col>
      <Col className="layout">Outfit</Col>
      <Col className="layout">Outfit</Col>
      <Col className="layout">Outfit</Col>
    </Row>
  </Container>

  <Container className="layout container">
    <Row className="layout">{"Questions & Answers"}</Row>
    <Row className="layout">Search Bar</Row>
    <Row className="layout">
      <Col className="layout">
        <Row className="layout">Q:
          <Col className="layout" sm={9}>Who What When</Col>
          <Col className="layout">Helpful? Add answer</Col>
        </Row>
        <Row className="layout">A:
          <Col className="layout" sm={9}>
            <Row className="layout">
              <Col className="layout">
                <Row className="layout">Answert Text</Row>
                <Row className="layout">Date Helpful Report</Row>
              </Col>
            </Row>
            <Row className="layout">
              <Col className="layout">
                <Row className="layout">Answer to reply</Row>
                <Row className="layout">Date Helpful Report</Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>Load more answers</Col>
        </Row>
      </Col>
    </Row>
    <Row className="layout">
      <Col className="layout">
        <Row className="layout">Q:
          <Col className="layout" sm={9}>Who What When</Col>
          <Col className="layout">Helpful? Add answer</Col>
        </Row>
        <Row className="layout">A:
          <Col className="layout" sm={9}>
            <Row className="layout">
              <Col className="layout">
                <Row className="layout">Answert Text</Row>
                <Row className="layout">Date Helpful Report</Row>
              </Col>
            </Row>
            <Row className="layout">
              <Col className="layout">
                <Row className="layout">Answer to reply</Row>
                <Row className="layout">Date Helpful Report</Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="layout">
          <Col className="layout">Load more answers</Col>
        </Row>
      </Col>
    </Row>
    <Row className="layout">MORE ANSWERED QUESTIONS ADD A QUESTION</Row>
  </Container>

  <Container className="layout">
    <Row className="layout">
      {"Ratings & Reviews"}
    </Row>
    <Row className="layout">
      <Col sm={4} className="layout">
        <Row className="layout">3.5*****</Row>
        <Row className="layout">100% of reviews recommend</Row>
        <Row classname="layout">
          <Col>
            <Row>5 Stars ||||||||</Row>
            <Row>4 Stars ||||||</Row>
            <Row>3 Stars |||||||||||</Row>
            <Row>2 Stars ||||||</Row>
            <Row>1 Stars ||||</Row>
          </Col>
        </Row>
        <Row className="layout">
          <Col>
            <Row>
              Size
            </Row>
            <Row>
              ||||||||||||||||||
            </Row>
            <Row>
              Too small | Perfect | Too Large
            </Row>
          </Col>
        </Row>
        <Row className="layout">
          <Col>
            <Row>
              Comfort
            </Row>
            <Row>
              ||||||||||||||||||
            </Row>
            <Row>
              Poor | Perfect
            </Row>
          </Col>
        </Row>
      </Col>
      <Col className="layout">
        <Row className="layout">248 reviews, sorted by relevance</Row>
        <Row className="layout">
          <Col className="layout">
            <Row className="layout">
              <Col className="layout" sm={3}>*****</Col>
              <Col className="layout" sm={{offset:6}}>User1234Date</Col>
            </Row>
            <Row className="layout">
              <Col className="layout" sm={9}>
                <Row className="layout">
                  Review Title
                </Row>
                <Row className="layout">
                  ...title continuation
                </Row>
                <Row className="layout">
                  Review content
                </Row>
                <Row className="layout">
                  Review Recommended
                </Row>
              </Col>
            </Row>
            <Row className="layout">
              <Col className="layout">
                <Row className="layout">
                  Response:
                </Row>
                <Row className="layout">
                  Response content
                </Row>
              </Col>
            </Row>
            <Row className="layout">
              Helpful? | Report
            </Row>
          </Col>
        </Row>
        <Row className="layout">
          <Col className="layout">
            <Row className="layout">
              <Col className="layout" sm={3}>*****</Col>
              <Col className="layout" sm={{offset:6}}>User1234 Date</Col>
            </Row>
            <Row className="layout">
              <Col className="layout" sm={9}>
                <Row className="layout">
                  Review Title
                </Row>
                <Row className="layout">
                  ...title continuation
                </Row>
                <Row className="layout">
                  Review content
                </Row>
                <Row className="layout">
                  Review Recommended
                </Row>
              </Col>
            </Row>
            <Row className="layout">
              <Col className="layout">
                <Row className="layout">
                  Response:
                </Row>
                <Row className="layout">
                  Response content
                </Row>
              </Col>
            </Row>
            <Row className="layout">
              Helpful? | Report
            </Row>
          </Col>
        </Row>

        <Row className="layout">
          MORE REVIEWS | ADD A REVIEW +
        </Row>

      </Col>
    </Row>
  </Container>

</Container-fluid>
  );
}

export default App;
