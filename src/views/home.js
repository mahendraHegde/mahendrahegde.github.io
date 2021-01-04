import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import Utils from "../utils/index";
import Layout from "../components/Layout";
import { Button, Container } from "react-bootstrap";
import IconButton from "../components/IconButton";

const { DETAILS } = Utils;

export default function Home() {
  return (
    <Container>
      <div className="profile-teaser media flex-column flex-lg-row">
        <div className="profile-teaser-body">
          <h2 className="name font-weight-bold mb-1">{DETAILS.name}</h2>
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
        </div>
      </div>
    </Container>
  );
}
