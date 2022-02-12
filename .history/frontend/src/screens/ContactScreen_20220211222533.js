import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Table, Form, Button, Row, Col, FormGroup } from 'react-bootstrap'

const ContactScreen = () => {
  const form = useRef();

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
<Form  ref={form} onSubmit={sendEmail}> 
    <FormGroup>
        <Form.Label>Name</Form.Label>
    </FormGroup>
    <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>


</Form>


      </FormContainer>
      
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <Button type="submit" value="Send" />
    </form>
  
  );
};
export default ContactScreen;
