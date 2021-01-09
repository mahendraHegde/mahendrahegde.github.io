import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./leftbar";
import WIP from "./WIP";

function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  const delay = 4000
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, delay);
  }, []);
  if (loading) {
    return <WIP startTime={Date.now()} delay={delay}/>
  }
  return (
    <Container className="m-0 p-0" fluid>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col xs="12" md="10">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
