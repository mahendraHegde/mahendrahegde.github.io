import React from "react";
import { SOCIAL_MEDIA } from "../utils/dom-utils";
import PropTypes from "prop-types";

function SocialRow({ style }) {
  return (
    <ul className="social-list list-inline py-2 mx-auto">
      {Object.values(SOCIAL_MEDIA).map(({ link, icon }) => {
        const { Icon } = icon;
        return (
          <li key={link} className="list-inline-item">
            <a href={link} rel="noopener noreferrer" target="_blank">
              <Icon style={{ ...icon.style, ...style }} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
SocialRow.propTypes = {
  style: PropTypes.object,
};
export default SocialRow;
