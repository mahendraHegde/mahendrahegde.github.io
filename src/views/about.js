import React, { useEffect } from "react";
import Utils from "../utils/index";
import Interaction from "../components/Interaction";

const { MENU_ITEMS } = Utils;

export default function About() {
  useEffect(() => {}, []);
  return (
    <>
      <div id={MENU_ITEMS.aboutMe.id} className="container">
        <div className="body">
          <Interaction
            emoji="0x1F44B"
            className="me"
            sideContent="Hello I'm"
            head="Mahendra"
          />
          <Interaction
            className="about"
            sideContent="I'm a Fullstack Javascript developer."
          />
        </div>
      </div>
      <style jsx>
        {`
          .body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 30vw;
            height: 60vh;
          }
        `}
      </style>
    </>
  );
}
