import React from "react";
import { Image, Navbar } from "react-bootstrap";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import utils from "../../utils";
const { SOCIAL_MEDIA, DETAILS } = utils;
const SOCIAL_ICON_SIZE = 20;
const Sidebar = () => {
  return (
    <header className="header text-center">
      <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
        <h3 className="mt-3"> {DETAILS.name}</h3>
      </Link>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Toggle style={{ marginTop: "-60px" }} />
        <Navbar.Collapse className="flex-column" id="basic-navbar-nav">
          <Image
            src={require("../../img/me.jpg")}
            alt="mahenadr hegde"
            fluid
            roundedCircle
            className="mb-3 mx-auto"
            style={{ maxWidth: "160px" }}
          />
          <div className="bio mb-3"> {DETAILS.shrotAbout} </div>
          <ul className="social-list list-inline py-2 mx-auto">
            <li className="list-inline-item">
              <a
                href={SOCIAL_MEDIA.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub
                  style={{ color: "gray", fontSize: SOCIAL_ICON_SIZE }}
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                rel="noopener noreferrer"
                href={SOCIAL_MEDIA.linkedIn}
                target="_blank"
              >
                <FaLinkedinIn
                  style={{ color: "#0e76a8", fontSize: SOCIAL_ICON_SIZE }}
                />
              </a>
            </li>

            <li className="list-inline-item">
              <a rel="noopener noreferrer" href={SOCIAL_MEDIA.gmail}>
                <SiGmail
                  style={{ color: "#D44638", fontSize: SOCIAL_ICON_SIZE }}
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                rel="noopener noreferrer"
                href={SOCIAL_MEDIA.fb}
                target="_blank"
              >
                <FaFacebook
                  style={{ color: "#3b5998", fontSize: SOCIAL_ICON_SIZE }}
                />
              </a>
            </li>
          </ul>

          <hr />
        </Navbar.Collapse>
      </Navbar>
      <style jsx>{``}</style>
    </header>
  );
};

export default Sidebar;
