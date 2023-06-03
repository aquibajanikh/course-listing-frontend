import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";

const HelpPage = () => {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [helpMessage, setHelpMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
    }

    setValidated(true);
    axios
      .post("http://localhost:3001/supportMessage", {
        firstName: firstName,
        lastName: lastName,
        supportMessage: helpMessage,
        responseText: "",
      })
      .then(setUserMessage("Submitted!"));
  };

  return (
    <>
      <Container className="mt-5">
        <h2>What can we help you with?</h2>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="mt-5"
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                required
                type="text"
                placeholder="First name"
                value={firstName}
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="8" controlId="validationCustom01">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                onChange={(e) => setHelpMessage(e.target.value)}
                value={helpMessage}
                required
                as="textarea"
                style={{ height: "100px" }}
                placeholder="Message"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit">Submit form</Button>
        </Form>
        <h4>{userMessage}</h4>
      </Container>
    </>
  );
};

export default HelpPage;
