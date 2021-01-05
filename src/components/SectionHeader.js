import React from "react";
function SectionHeader({ children }) {
  return (
    <div className="section-title pl-3">
      <h3>{children}</h3>
    </div>
  );
}

export default SectionHeader;
