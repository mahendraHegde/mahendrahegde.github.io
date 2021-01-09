import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GrInProgress } from "react-icons/gr";
function WIP({ startTime, delay }) {
  const [remaining, setRemaining] = useState(Date.now() - startTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(
        Math.round((delay+1000)/1000  - (Date.now() / 1000 - startTime / 1000))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, delay]);
  return (
    <Container fluid>
      <Row className="justify-content-center ">
        <Col style={{ fontSize: 60 }} className="col-auto">
          <GrInProgress />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="col-auto">
          <h3>
            Its a Work in Progress.Feel free to vist though. You will be
            redirected in {remaining}
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default WIP;
