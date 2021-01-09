import React from "react";
import PropTypes from "prop-types";
function SectionHeader({ children }) {
  return (
    <div className="section-title pl-3">
      <h3>{children}</h3>
    </div>
  );
}

export default SectionHeader;
SectionHeader.prototype = {
  children: PropTypes.array,
};
