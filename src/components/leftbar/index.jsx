import React from "react";
import { Image, Navbar } from "react-bootstrap";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
import utils from "../../utils";
import { MENU_ITEMS } from "../../utils/dom-utils";
import meImg from "../../img/me.jpg";
const { SOCIAL_MEDIA, DETAILS } = utils;
const SOCIAL_ICON_SIZE = 20;
const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <header className="header text-center">
      <Link style={{ color: "inherit" }} to="/">
        <h3 className="mt-3"> {DETAILS.name}</h3>
      </Link>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Toggle style={{ marginTop: "-60px" }} />
        <Navbar.Collapse className="flex-column" id="basic-navbar-nav">
          <Image
            src={meImg}
            alt={DETAILS.name}
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
          <ul className="navbar-nav flex-column text-left">
            {Object.values(MENU_ITEMS).map(
              ({ text, key, link, icon: Icon }) => (
                <Link key={key} to={link}>
                  <li
                    className={
                      "menu-item p-2 " + (pathname === link ? "active" : "")
                    }
                  >
                    <Icon style={{ fontSize: "1.6rem" }} className="pr-1" />{" "}
                    {text}
                  </li>
                </Link>
              )
            )}
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
// Sidebar.propTypes = {
//   location: PropTypes.node,
// };

export default Sidebar;
