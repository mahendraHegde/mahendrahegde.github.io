import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";

function IconSpinnerButton({
  variant,
  classes,
  children,
  icon: Icon,
  to,
  showSpinner,
  spinnerText,
  buttonProps,
}) {
  if (showSpinner) {
    return (
      <Button variant={variant} className={"px-1 " + classes} {...buttonProps}>
        <Spinner animation="border" role="status">
          <span className="sr-only">
            {spinnerText && spinnerText.length ? spinnerText : "Loading..."}
          </span>
        </Spinner>
      </Button>
    );
  }
  const iconButton = () => (
    <Button variant={variant} className={"px-1 " + classes} {...buttonProps}>
      {Icon && <Icon className="mr-2 mb-1" />}
      <span>{children}</span>
    </Button>
  );

  if (to && to.length) {
    return <Link to={to}>{iconButton()}</Link>;
  }
  return iconButton();
}

export default IconSpinnerButton;
IconSpinnerButton.propTypes = {
  variant: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.object,
  to: PropTypes.string,
  showSpinner: PropTypes.bool,
  spinnerText: PropTypes.string,
};
