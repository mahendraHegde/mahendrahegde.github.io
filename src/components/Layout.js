import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./leftbar";

function Layout({children}) {
  return (
    <>
      <Sidebar />
      <Container>
        <Row>
          <Col xs="12">{children}</Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
