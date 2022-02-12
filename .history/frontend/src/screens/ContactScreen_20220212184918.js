import React, { useRef } from "react";
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import FormContainer from "../components/FormContainer";
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap";

const ContactScreen = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
       from_email:'',
        message: '',
       
      });
    
  const form = useRef();
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fevkgql",
        "template_36uohpl",
        form.current,
        "user_0Picsz6Huc1cjjnvFm9DM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Email sent!");
  };

  return (
    <FormContainer>
      <Form ref={form} onSubmit={sendEmail}>
        <FormGroup controlId="user_name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="user_name"
          ></Form.Control>
        </FormGroup>
        <Form.Group controlId="user_email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="user_email"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            row="4"
            placeholder="Enter text"
            name="message"
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          SEND
        </Button>
      </Form>
    </FormContainer>
  );
};
export default ContactScreen;
