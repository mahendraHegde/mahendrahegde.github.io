import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import IconSpinnerButton from "../IconSpinnerButton";
const ProjectCard = ({
  projectData: { title, imageUrl, description, link, github },
}) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  return (
    <Container className="h-100">
      <Row
        className="h-100"
        onMouseEnter={() => setOverlayVisible(true)}
        onMouseLeave={() => setOverlayVisible(false)}
      >
        <Col className="d-flex h-100 align-items-center" xs={5}>
          <Image fluid src={imageUrl} />
        </Col>
        <Col className="h-100 d-flex align-items-center" xs={7}>
          <Row>
            <Col xs={12}>
              <h4 className="w-100 text-center project-title">
                {" "}
                <a
                  href={link || github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </a>
              </h4>
            </Col>
            <Col xs={12}>
              <span className="w-100 pt-2 text-justify pt-2 project-description">
                {description}
              </span>
            </Col>
          </Row>
        </Col>
        <div
          className={
            "d-none  d-lg-flex project-card-overlay " +
            (overlayVisible ? "visible" : "hidden")
          }
        >
          <Container fluid>
            <Row className="h-100">
              <Col
                xs={12}
                className="d-flex border justify-content-center align-items-center"
              >
                <IconSpinnerButton externalLink={link || github} icon={FaEye}>
                  Visit
                </IconSpinnerButton>
              </Col>
            </Row>
          </Container>
        </div>
      </Row>
    </Container>
  );
};

ProjectCard.propTypes = {
  projectData: PropTypes.objectOf({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    github: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default ProjectCard;
