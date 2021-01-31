import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { RiSendPlaneFill } from "react-icons/ri";

import IconSpinnerButton from "../components/IconSpinnerButton";
import ProjectDeck from "../components/projects/ProjectDeck";

import { DETAILS, PROJECTS } from "../utils";
import { MENU_ITEMS } from "../utils/dom-utils";

export default function Portfolio() {
  return (
    <Container className="py-lg-5 mb-5" fluid>
      <Row className="mx-md-5 px-md-5 theme-bg-light">
        <Col xs="12">
          <Row>
            <Col>
              <h2 className="name text-center mx-md-5 px-md-5">Portfolio</h2>
            </Col>
          </Row>
          <div className="bio mb-4 text-center mx-md-5 px-md-5">
            {DETAILS.portfolio}
          </div>
          <Row className="py-3">
            <Col xs="12" className="d-flex justify-content-center">
              <IconSpinnerButton
                to={MENU_ITEMS.contact.link}
                classes="px-3"
                iconClasses="text-white"
                icon={RiSendPlaneFill}
              >
                Hire Me
              </IconSpinnerButton>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mx-lg-4 mt-3">
        <Col>
          <ProjectDeck projects={PROJECTS} />
        </Col>
      </Row>
    </Container>
  );
}
