import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function skilll({ icons, title, desc }) {
  return (
    <Container className="py-3" fluid>
      <Row className="justify-content-start">
        {icons.map(({color,icon:Icon})=><Col xs="2" style={{color}} className="skill-icon my-1"><Icon className="float-left"/></Col>)}
      </Row>
      <Row>
        <Col className="skill-title my-1" >{title}</Col>
      </Row>
      <Row>
        <Col className="skill-desc my-1">{desc}</Col>
      </Row>
    </Container>
  );
}

export default skilll;
