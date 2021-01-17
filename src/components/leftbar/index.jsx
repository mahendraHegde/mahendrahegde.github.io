import React from "react";
import { Image, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
import utils from "../../utils";
import { MENU_ITEMS } from "../../utils/dom-utils";
import meImg from "../../img/me.jpg";
import SocialRow from "../SocialRow";
const { DETAILS } = utils;
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
          <SocialRow />
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
