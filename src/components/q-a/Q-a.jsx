// Q-a.jsx stub
import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Qa() {
    return (
        <div>
            <Container-fluid className="layout container">
                <Col sm={{ span: 10, offset: 1 }} className="layout container">
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
        </div>
    )
}

export default Qa;