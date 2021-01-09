import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function IconButton({ variant, classes, children, icon, to }) {
  const Icon = icon;
  return (
    <Link style={{ color: "inherit", textDecoration: "inherit" }} to={to}>
      <Button variant={variant} className={"px-1 "+classes}>
        {Icon && <Icon className="mr-1 mb-1" />}
        <span>{children}</span>
      </Button>
    </Link>
  );
}

export default IconButton;
