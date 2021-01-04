import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function IconButton({ variant, classes, children, icon,to }) {
    const Icon = icon;
  return (
    <Button variant={variant} className={classes}>
      {" "}
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={to}>
        {Icon && <Icon className="mr-1 mb-1"/>}
        {children}
      </Link>
    </Button>
  );
}

export default IconButton;
