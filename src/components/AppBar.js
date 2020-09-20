import React from "react";
import Utils from "../utils";
import { Link } from "react-router-dom";
const {
  MENU_ITEMS,
  THEME: { color },
} = Utils;
function AppBar() {
  return (
    <>
      <div className="header">
        <span>Mahendra(Logo)</span>
        <ul className="menu">
          {Object.values(MENU_ITEMS).map(({ text, id }, idx) => (
            <Link to={id}>
              <li
                style={{
                  ...(idx === 0 && { color: color.primary }),
                }}
              >
                {text}
              </li>
            </Link>
            // <a
            //   key={id}
            //   onClick={(e) => {
            //     let ele = document.getElementById(id);
            //     e.preventDefault();
            //     ele && ele.scrollIntoView({ behavior: "smooth", block: "end" });
            //     window.history.pushState(id, id, "/#" + id);
            //   }}
            //   href={"/#" + id}
            // >
            //   <li>{text}</li>
            // </a>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          .menu {
            display: flex;
            margin: auto;
            width: 30vw;
            flex-direction: row;
          }
          .menu li {
            color: #868c94;
            cursor: pointer;
            padding-left: 15px;
          }
          .header {
            height: 50px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: center;
            position: sticky;
            top: 0px;
          }
        `}
      </style>
    </>
  );
}

export default AppBar;
