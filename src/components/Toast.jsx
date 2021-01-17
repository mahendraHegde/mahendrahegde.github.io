import React from "react";
import { Toast } from "react-bootstrap";
import PropTypes from "prop-types";
const CustomToast = ({
  title,
  show,
  setShowToast,
  body,
  type,
  delay,
  autohide = true,
}) => {
  return (
    <>
      <Toast
        style={{
          position: "fixed",
          top: 90,
          right: show ? 0 : -500,
          transition: "1s",
        }}
        className={type === 1 ? "toast-success" : "toast-error"}
        onClose={() => setShowToast(false)}
        show={show}
        delay={delay || 4000}
        autohide={autohide}
      >
        <Toast.Header>
          <strong className="mr-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{body}</Toast.Body>
      </Toast>
    </>
  );
};

CustomToast.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  setShowToast: PropTypes.func,
  body: PropTypes.string,
  type: PropTypes.number,
  delay: PropTypes.number,
  autohide: PropTypes.bool,
};

export default CustomToast;
