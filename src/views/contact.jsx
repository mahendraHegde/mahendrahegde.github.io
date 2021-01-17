import React from "react";
import { Row, Container, Col, Form, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import Toast from "../components/Toast";

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [sending, setSending] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastBody, setToastBody] = useState("");
  const [toastType, setToastType] = useState(1);

  const fieldNames = {
    name: "name",
    email: "email",
    subject: "subject",
    detail: "detail",
  };

  const displayToast = ({ title = "Success", body, type = 1, show = true }) => {
    setShowToast(show);
    setToastBody(body);
    setToastTitle(title);
    setToastType(type);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setSending(true);
      const body = Object.values(fieldNames).reduce((res, curr) => {
        res[curr] = form[curr].value;
        return res;
      }, {});

      setTimeout(() => {
        console.log(body);
        setSending(false);
        setValidated(false);
        form.reset();
        displayToast({
          body: "Thanks for contacting ME. I'll get back to you shortly",
        });
      }, 3000);
    }
    setValidated(true);
  };

  return (
    <>
      <Container className="py-lg-5 theme-bg-light" fluid>
        <Row className="">
          <Col xs="12">
            <Row>
              <Col>
                <h2 className="name text-center">Contact</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="bio mb-4 text-center">
                  Interested in hiring me for your project or just want to say
                  hi? You can fill in the contact form below, i&apos;ll get in
                  touch with you shortly.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="p-5" fluid>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="5" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name={fieldNames.name}
                required
                minLength={3}
                type="text"
                placeholder="Your Name Here"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationCustom02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name={fieldNames.email}
                required
                type="email"
                placeholder="Your Email Id"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="10" controlId="validationCustom02">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                name={fieldNames.subject}
                required
                minLength={3}
                type="text"
                placeholder="Brief here"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-center">
            <Form.Group as={Col} md="10" controlId="validationCustom02">
              <Form.Label>Detail</Form.Label>
              <Form.Control
                name={fieldNames.detail}
                required
                minLength={6}
                placeholder="Describe here"
                as="textarea"
                rows="7"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-end pr-md-5 mr-md-5 mt-2">
            <Button type="submit">
              {sending ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                "Send"
              )}
            </Button>
          </Form.Row>
        </Form>
        <Toast
          title={toastTitle}
          show={showToast}
          setShowToast={setShowToast}
          body={toastBody}
          type={toastType}
        />
      </Container>
    </>
  );
}
