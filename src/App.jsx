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
      <Col className="layout" sm={2}>Logo</Col>
      <Col className="layout" sm={{span:2, offset:8}}>Search</Col>
  </Row>

  <Row className="layout">
      <Col className="layout">Sitewide Announcement</Col>
  </Row>

  <Container-fluid className="layout container">
    <Row className="layout">
      <Col className="layout" sm={8}>IMAGE CAROUSEL</Col>
      <Col className="layout">
        <Row className="layout">***** Read all reviews</Row>
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
  </Container-fluid>
  <br></br>
  <Container-fluid className="layout container">
    <Col sm={{span:10,offset:1}} className="layout container">
      <Row className="layout">Related Products</Row>
      <Row className="layout">
        <Col className="layout">
          <Row className="layout">IMAGE</Row>
          <Row className="layout">CATEGORY</Row>
          <Row className="layout">Expanded Product Name with Extra Text</Row>
          <Row className="layout">$123</Row>
          <Row className="layout">*****</Row>
        </Col>
        <Col className="layout">
          <Row className="layout">IMAGE</Row>
          <Row className="layout">CATEGORY</Row>
          <Row className="layout">Expanded Product Name with Extra Text</Row>
          <Row className="layout">$123</Row>
          <Row className="layout">*****</Row>
        </Col>
        <Col className="layout">
          <Row className="layout">IMAGE</Row>
          <Row className="layout">CATEGORY</Row>
          <Row className="layout">Expanded Product Name with Extra Text</Row>
          <Row className="layout">$123</Row>
          <Row className="layout">*****</Row>
        </Col>
        <Col className="layout">
          <Row className="layout">IMAGE</Row>
          <Row className="layout">CATEGORY</Row>
          <Row className="layout">Expanded Product Name with Extra Text</Row>
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
          <Row className="layout">Expanded Product Name with Extra Text</Row>
          <Row className="layout">$123</Row>
          <Row className="layout">*****</Row>
        </Col>
        <Col className="layout">
          <Row className="layout">IMAGE</Row>
          <Row className="layout">CATEGORY</Row>
          <Row className="layout">Expanded Product Name with Extra Text</Row>
          <Row className="layout">$123</Row>
          <Row className="layout">*****</Row>
        </Col>
        <Col className="layout">
          <Row className="layout">IMAGE</Row>
          <Row className="layout">CATEGORY</Row>
          <Row className="layout">Expanded Product Name with Extra Text</Row>
          <Row className="layout">$123</Row>
          <Row className="layout">*****</Row>
        </Col>
        <Col className="layout">
          <Row className="layout">IMAGE</Row>
          <Row className="layout">CATEGORY</Row>
          <Row className="layout">Expanded Product Name with Extra Text</Row>
          <Row className="layout">$123</Row>
          <Row className="layout">*****</Row>
        </Col>
      </Row>
    </Col>
  </Container-fluid>
  <br></br>
  <Container-fluid className="layout container">
    <Col sm={{span:10,offset:1}} className="layout container">
      <Row className="layout">{"QUESTIONS & ANSWERS"}</Row>
      <Row className="layout">Search Bar</Row>
      <Row className="layout">
        <Col className="layout">
          <Row className="layout">Q:
            <Col className="layout" sm={9}>
              <Row className="layout">Who What When</Row>
            </Col>
            <Col className="layout">
              <Row className="layout">Helpful? | Add answer</Row>
            </Col>
          </Row>
          <Row className="layout">A:
            <Col className="layout" sm={9}>
              <Row className="layout">
                <Col className="layout">
                  <Row className="layout">Answer Text</Row>
                  <Row className="layout">Date | Helpful | Report</Row>
                </Col>
              </Row>
              <Row className="layout">
                <Col className="layout">
                  <Row className="layout">Answer to reply?</Row>
                  <Row className="layout">IMAGES</Row>
                  <Row className="layout">Date | Helpful | Report</Row>
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
            <Col className="layout" sm={9}>
              <Row className="layout">Who What When</Row>
            </Col>
            <Col className="layout">
              <Row className="layout">Helpful? | Add answer</Row>
            </Col>
          </Row>
          <Row className="layout">A:
            <Col className="layout" sm={9}>
              <Row className="layout">
                <Col className="layout">
                  <Row className="layout">Answer Text</Row>
                  <Row className="layout">Date | Helpful | Report</Row>
                </Col>
              </Row>
              <Row className="layout">
                <Col className="layout">
                  <Row className="layout">Answer to reply?</Row>
                  <Row className="layout">IMAGES</Row>
                  <Row className="layout">Date | Helpful | Report</Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>Load more answers</Col>
          </Row>
        </Col>
      </Row>
      <Row className="layout">MORE ANSWERED QUESTIONS | ADD A QUESTION +</Row>
    </Col>
  </Container-fluid>
  <br></br>
  <Container-fluid className="layout">
    <Col sm={{span:10,offset:1}} className="layout container">
      <Row className="layout">
        {"Ratings & Reviews"}
      </Row>
      <Row className="layout">
        <Col sm={4} className="layout">
          <Row className="layout">3.5*****</Row>
          <br></br>
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
          <br></br>
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
          <br></br>
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
          <br></br>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">
                <Col className="layout" sm={3}>
                  <Row className="layout">*****</Row>
                </Col>
                <Col className="layout" sm={{offset:6}}>
                  <Row className="layout">User1234, Date</Row>
                </Col>
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
          <br></br>
          <Row className="layout">
            <Col className="layout">
              <Row className="layout">
                <Col className="layout" sm={3}>
                  <Row className="layout">*****</Row>
                </Col>
                <Col className="layout" sm={{offset:6}}>
                  <Row className="layout">User1234, Date</Row>
                </Col>
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
    </Col>
  </Container-fluid>

</Container-fluid>
  );
}

export default App;
