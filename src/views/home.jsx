import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { DETAILS } from "../utils/index";
import { MENU_ITEMS, SKILLS } from "../utils/dom-utils";
import { Image, Row, Container, Col } from "react-bootstrap";
import IconSpinnerButton from "../components/IconSpinnerButton";
import SectionHeader from "../components/SectionHeader";
import Skill from "../components/Skill";
import meImg from "../img/me2.jpg";

export default function Home() {
  return (
    <Container className="py-lg-5 mx-1 mb-5" fluid>
      <Row className="profile-teaser mx-lg-4 theme-bg-light">
        <Col xs="12" lg="7">
          <Row>
            <Col>
              <h2 className="name">{DETAILS.name}</h2>
            </Col>
          </Row>
          <div className="designation mb-3">{DETAILS.designation}</div>
          <div className="bio mb-4">{DETAILS.about}</div>
          <Row className="py-3">
            <Col xs="6" md="3">
              <IconSpinnerButton
                to={MENU_ITEMS.portfolio.link}
                icon={FaArrowAltCircleRight}
              >
                Portfolio
              </IconSpinnerButton>
            </Col>
            <Col xs="6" md="3">
              <IconSpinnerButton
                variant="secondary"
                icon={CgFileDocument}
                to="/"
                buttonProps={{
                  onClick: () =>
                    window.open(
                      "https://drive.google.com/file/d/1nErKwcVe1kICSJrOS9ZKc8Xf2kl3XLsY/view?usp=drive_link",
                      "_blank",
                      "noopener,noreferrer"
                    ),
                }}
              >
                Resume
              </IconSpinnerButton>
            </Col>
          </Row>
        </Col>
        <Col xs="12" lg="5">
          <Image style={{ maxHeight: 300 }} fluid src={meImg} />
        </Col>
      </Row>
      <Row className="mx-lg-4 mt-3">
        <Col>
          <SectionHeader>What I Do?</SectionHeader>
        </Col>
      </Row>
      <Row className="mt-3 mx-lg-4">
        <Col>{DETAILS.intro}</Col>
      </Row>
      <Row className="mt-3 mx-lg-4">
        {SKILLS.map(({ icons, title, desc }) => (
          <Col key={title} xs="6" md="4" lg="3">
            <Skill icons={icons} title={title} desc={desc} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
