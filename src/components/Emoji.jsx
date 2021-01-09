import React from "react";
import PropTypes from "prop-types";
const Emoji = React.memo(({ className, label, symbol }) => (
  <>
    <span className={className} role="img" aria-label={label}>
      <h1>{String.fromCodePoint(symbol)}</h1>
    </span>
    <style jsx>{`
      h1 {
        font-size: 2.3em;
      }
    `}</style>
  </>
));

export default Emoji;

Emoji.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  symbol: PropTypes.any,
};
Emoji.displayName = "Emoji";
