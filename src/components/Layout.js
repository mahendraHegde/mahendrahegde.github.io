import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedinIn, FaGithub, FaCircle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Utils from "../utils/index";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Sidebar from "./leftbar";

const {
  MENU_ITEMS,
  SOCIAL_MEDIA,
  THEME: { color },
} = Utils;
const SOCIAL_ICON_SIZE = 22;
let prev = 1;
function Layout(props) {
  const [selectedMenu, setSelectedMenu] = useState(0);
  useEffect(() => {
    console.log(props);
    const loc = window.location.href.split("/");
    setSelectedMenu(loc[loc.length - 1]);
  }, [window.location.href]);
  return <>
  <Sidebar/>
  </>;
}

export default Layout;
