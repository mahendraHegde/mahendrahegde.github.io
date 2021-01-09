import React from "react";
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
