import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import Utils from "../utils/index";
import { Button, Row, Container, Col } from "react-bootstrap";
import IconButton from "../components/IconButton";
import SectionHeader from "../components/SectionHeader";

const { DETAILS } = Utils;

export default function Home() {
  return (
    <Container className="p-lg-5 mx-lg-5" fluid>
      <Row className="profile-teaser mx-lg-4 justify-content-space-between">
        <Col lg="7">
          <h2 className="name mb-1">{DETAILS.name}</h2>
          <div className="designation mb-3">{DETAILS.designation}</div>
          <div className="bio mb-4">{DETAILS.about}</div>
          <div className="mb-4">
            <IconButton
              to="/about"
              classes="mr-2 mb-3"
              icon={FaArrowAltCircleRight}
            >
              Visit Portfolio
            </IconButton>
            <IconButton
              variant="secondary"
              classes="mb-3"
              icon={CgFileDocument}
              to="/about"
            >
              View Resume
            </IconButton>
          </div>
        </Col>
        {/* <Col xs="12" lg="5"></Col> */}
      </Row>
      <Row className="mx-lg-4 justify-content-center mt-3">
        <Col>
          <SectionHeader>What I Do?</SectionHeader>
        </Col>
      </Row>
      <Row className="mt-3 mx-lg-4">
        <Col>{DETAILS.about}</Col>
      </Row>
    </Container>
  );
}
