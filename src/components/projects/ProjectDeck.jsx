import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Nav, Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PROJECT_CATEGORIES } from "../../utils";
import ProjectCard from "./ProjectCard";

function ProjectDeck({ projects }) {
  const [selectedFilter, setSeletedFilter] = useState(PROJECT_CATEGORIES.all);
  return (
    <Container fluid>
      <Row className="no-gutters w-100 justify-content-center">
        <Nav
          variant="tabs"
          defaultActiveKey={PROJECT_CATEGORIES.all}
          onSelect={(filter) => setSeletedFilter(filter)}
        >
          {Object.keys(PROJECT_CATEGORIES).map((cat) => (
            <Nav.Item key={cat}>
              <Nav.Link eventKey={PROJECT_CATEGORIES[cat]}>
                {PROJECT_CATEGORIES[cat]}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Row>
      <TransitionGroup
        className="row no-gutters mt-5 justify-content-center d-none d-lg-flex"
        transitionname="example"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={400}
      >
        {projects
          .filter(({ categories }) => categories.includes(selectedFilter))
          .map((data) => (
            <CSSTransition
              timeout={300}
              style={{ backgroundColor: "red" }}
              className="col theme-bg-light m-1 col-xs-12 col-md-5 py-3"
              classNames="project-item"
              key={data.title}
            >
              <Container fluid>
                <ProjectCard projectData={data} />
              </Container>
            </CSSTransition>
          ))}
      </TransitionGroup>
      <Row className="no-gutters d-flex d-lg-none mt-5 justify-content-center">
        {projects
          .filter(({ categories }) => categories.includes(selectedFilter))
          .map((data) => (
            <Col
              className="d-flex theme-bg-light m-1 py-3"
              key={data.title}
              xs={12}
              md={5}
            >
              <ProjectCard projectData={data} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}
ProjectDeck.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default ProjectDeck;
