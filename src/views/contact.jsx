import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import SocialRow from "../components/SocialRow";

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: {
          branding: { brandColor: "#20c997" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  // const [validated, setValidated] = useState(false);
  // const [sending, setSending] = useState(false);
  // const [showToast, setShowToast] = useState(false);
  // const [toastTitle, setToastTitle] = useState("");
  // const [toastBody, setToastBody] = useState("");
  // const [toastType, setToastType] = useState(1);

  // const [sendMail] = useMutation(SEND_CONTACTUS_EMAIL);

  // const fieldNames = {
  //   name: "name",
  //   email: "email",
  //   subject: "subject",
  //   detail: "detail",
  // };

  // const displayToast = ({ title = "Success", body, type = 1, show = true }) => {
  //   setShowToast(show);
  //   setToastBody(body);
  //   setToastTitle(title);
  //   setToastType(type);
  // };

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   event.preventDefault();
  //   event.stopPropagation();
  //   if (form.checkValidity() === true) {
  //     setSending(true);
  //     const body = Object.values(fieldNames).reduce((res, curr) => {
  //       res[curr] = form[curr].value;
  //       return res;
  //     }, {});

  //     sendMail({ variables: body })
  //       .then(() => {
  //         form.reset();
  //         displayToast({
  //           body: "Thanks for contacting ME. I'll get back to you shortly",
  //         });
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         displayToast({
  //           title: "Something is Wrong!",
  //           body: "Failed to Send Email",
  //           type: 0,
  //         });
  //       })
  //       .finally(() => {
  //         setSending(false);
  //         setValidated(false);
  //       });
  //   }
  //   setValidated(true);
  // };

  return (
    <>
      <Container className="py-lg-5 theme-bg-light" fluid>
        <Row>
          <Col xs="12">
            <Row>
              <Col>
                <h2 className="name text-center">Contact</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="bio mb-1 text-center">
                  Interested to work with or understand how i can solve your
                  problem? You can either contact me on below social platforms
                  or directly schedule a meet.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs="12">
            <div className="bio mb-2 text-center">
              Want to get connected? Follow me on the social channels below.
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center" xs="12">
            <SocialRow style={{ background: "none" }} />
          </Col>
        </Row>
      </Container>
      <Container className="p-5" fluid>
        {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
            <IconSpinnerButton
              buttonProps={{ type: "submit" }}
              showSpinner={sending}
              icon={RiMailSendLine}
            >
              send
            </IconSpinnerButton>
          </Form.Row>
        </Form> */}
        {/* <Toast
          title={toastTitle}
          show={showToast}
          setShowToast={setShowToast}
          body={toastBody}
          type={toastType}
        /> */}
        <Cal
          calLink="mahendra-hegde/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{
            layout: "month_view",
          }}
        />
      </Container>
    </>
  );
}
