import React, { useEffect } from "react";
import Utils from "../utils/index";
import Interaction from "../components/Interaction";

const { MENU_ITEMS } = Utils;

export default function Home() {
  useEffect(() => {}, []);
  return (
    <>
      <div id={MENU_ITEMS.home.id} className="container">
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
          .container {
            display: flex;
            align-items: space-between;
            width: 100vw;
            height: 90vh;
          }
          .body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 30vw;
            height: 60vh;
          }
          .me {
            transform: translateX(-100%);
            animation: slide-in 0.5s forwards;
            -webkit-animation: slide-in 0.5s forwards;
          }
          .about {
            transform: translateY(300%);
            animation: slide-in-bottom 0.9s forwards;
            -webkit-animation: slide-in-bottom 0.9s forwards;
            box-shadow: 1px 1px #fff;
            padding-top: 5px;
          }

          @keyframes slide-in-bottom {
            100% {
              transform: translate(40%, 40%);
            }
          }

          @-webkit-keyframes slide-in-bottom {
            100% {
              -webkit-transform: translateY(40%, 40%);
            }
          }

          @keyframes slide-in {
            100% {
              transform: translateX(0%);
            }
          }

          @-webkit-keyframes slide-in {
            100% {
              -webkit-transform: translateX(0%);
            }
          }
        `}
      </style>
    </>
  );
}
