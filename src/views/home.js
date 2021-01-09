import React from "react";
import { SiJavascript, SiKubernetes } from "react-icons/si";
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGitSquare,
  FaGitlab,
  FaDocker,
  FaSass,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import Utils from "../utils/index";
import { Image, Row, Container, Col } from "react-bootstrap";
import IconButton from "../components/IconButton";
import SectionHeader from "../components/SectionHeader";
import Skill from "../components/Skill";

const { DETAILS } = Utils;

export default function Home() {
  return (
    <Container className="py-lg-5" fluid>
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
              <IconButton to="/" icon={FaArrowAltCircleRight}>
                Visit Portfolio
              </IconButton>
            </Col>
            <Col xs="6" md="3">
              <IconButton variant="secondary" icon={CgFileDocument} to="/">
                View Resume
              </IconButton>
            </Col>
          </Row>
        </Col>
        <Col xs="12" lg="5">
          <Image
            style={{ maxHeight: 300 }}
            fluid
            src={require("../img/me2.jpg")}
          />
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

const SKILLS = [
  {
    icons: [
      {
        color: "#F1DE4F",
        icon: SiJavascript,
      },
    ],
    title: "Vanilla JavaScript",
    desc: "Having strong work experience on Vanilla Javascript including es6",
  },
  {
    icons: [{ color: "#54B689", icon: FaNodeJs }],
    title: "Node.js & Golang",
    desc:
      "Having strong work experience and knowledge of building server side solutions using Node.js Golang",
  },
  {
    icons: [{ icon: FaReact, color: "#62D4FA" }],
    title: "React",
    desc: "Have been building front-end solution using React.js",
  },
  {
    icons: [
      { icon: FaHtml5, color: "#DE6E3C" },
      { color: "#53A7DC", icon: FaCss3 },
      { color: "#BF6B97", icon: FaSass },
    ],
    title: "HTML5 & CCS3(Sass & Scss)",
    desc:
      "Extensively worked on HTML, css and other css preprocessors to build user friendly websites",
  },
  {
    icons: [{ icon: FaGitSquare, color: "#f1502f" }],
    title: "GIT",
    desc:
      "Every project uses GIT version control so that rollback and code management is gonna be easy",
  },
  {
    icons: [{ icon: FaDocker, color: "#0db7ed" }],
    title: "Docker",
    desc:
      "Source code will be containerised during both development and deployment so that platform descrepencies are not a problem for me.",
  },
  {
    icons: [{ icon: SiKubernetes, color: "#00f" }],
    title: "Kubernetes",
    desc: "I use Kubernetes to sail in the ocean of Microservices.",
  },
  {
    icons: [{ icon: FaGitlab, color: "#FC6D27" }],
    title: "Gitlab",
    desc:
      "I achieve continuous integration and continuous deployment with gitlab",
  },
];
