import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedinIn, FaGithub, FaCircle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Utils from "../utils/index";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="content">
        {" "}
        <div className="social-media">
          <ul className="vertical-ul">
            <li>
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
            <li>
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

            <li>
              <a rel="noopener noreferrer" href={SOCIAL_MEDIA.gmail}>
                <SiGmail
                  style={{ color: "#D44638", fontSize: SOCIAL_ICON_SIZE }}
                />
              </a>
            </li>
            <li>
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
        </div>
        <div className="inner-content"> {props.children}</div>
        <div className="right-nav">
          <ul className="vertical-ul">
            {Object.values(MENU_ITEMS).map(({ id }, idx) => (
              <li key={idx}>
                <Link to={id}>
                  <FaCircle
                    style={{
                      ...(id === selectedMenu && { color: color.primary }),
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .content {
            display: flex;
            height: 100vh;
          }
          .inner-content {
            width: 94vw;
          }
          .right-nav {
            margin-left: auto;
            padding-right: 25px;
            position: fixed;
            right: 0;
            align-self: center;
          }
          .vertical-ul {
            diplay: flex;
            flex-direction: column;
            width: auto;
          }
          .vertical-ul li {
            padding: 5px;
            cursor: pointer;
          }
          .social-media {
            position: fixed;
            left: 0;
            align-self: center;
          }

          @keyframes social-item-slide {
            100% {
              transform: translate(0%, 0%);
            }
          }
  
          @-webkit-keyframes social-item-slide {
            100% {
              -webkit-transform: translate(0%, 0%);
            }
          }
        `.concat(
          Object.keys(SOCIAL_MEDIA)
            .map((e, idx) => {
              prev = idx % 2 === 0 ? -1 * prev : prev;
              return `
                  .social-media ul li:nth-child(${idx + 1}) {
                    transform: ${
                      idx % 2 === 0
                        ? `translateY(${prev * 300}%)`
                        : `translateX(${prev * -300}%)`
                    } ;
                    animation: social-item-slide 200ms forwards;
                    -webkit-animation: social-item-slide 200ms forwards;
                    animation-delay: ${200 + idx * 30}ms;
                  }`;
            })
            .join("\n")
        )}
      </style>
    </>
  );
}

export default Layout;
