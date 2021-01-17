import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
function Skill({ icons, title, desc }) {
  return (
    <Container className="py-3" fluid>
      <Row className="justify-content-start">
        {icons.map(({ color, icon: Icon }) => (
          <Col key={Icon} xs="2" style={{ color }} className="skill-icon my-1">
            <Icon className="float-left" />
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="skill-title my-1">{title}</Col>
      </Row>
      <Row>
        <Col className="skill-desc my-1">{desc}</Col>
      </Row>
    </Container>
  );
}

export default Skill;

Skill.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  desc: PropTypes.string,
};
