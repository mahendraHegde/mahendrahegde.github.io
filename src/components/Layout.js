import React from "react";
import {  Container } from "react-bootstrap";
import Sidebar from "./leftbar";

function Layout(props) {
  return <>
  <Sidebar/>
  <Container className="p-3 p-lg-5 theme-bg-light"> {props.children}</Container>
  </>;
}

export default Layout;
