import React from "react";
import Emoji from "./Emoji";
function Interaction({ className, emoji, sideContent, head }) {
  return (
    <>
      <div className={className + " block"}>
        {emoji && <Emoji label="Hi" symbol={emoji} />}
        <div className="content-body">
          <span>{sideContent}</span>
          <span className="head">{head}</span>
        </div>
      </div>
      <style jsx>
        {`
          .head {
            font-weight: bold;
            font-size: 1.3em;
            padding: 15px;
            padding-bottom: 0;
          }
          .content-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: auto;
            padding: 5px 5px 5px 10px;
          }
          .block {
            background-color: #fff;
            display: flex;
            width: auto;
            border-radius: 10px;
            box-shadow: 2px 4px #888888;
          }
        `}
      </style>
    </>
  );
}

export default Interaction;
