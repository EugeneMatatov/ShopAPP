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
    <FormGroup controlId="user_name">
        <Form.Label>Name</Form.Label>
        <Form.Control
            type='text'
            placeholder='Enter name'
            value={user_name}
            
          ></Form.Control>
    </FormGroup>
    <Form.Group controlId='user_email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
           
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='message'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter text'
           
           
          ></Form.Control>
        </Form.Group>
        <Button type="submit" value="Send" />
</Form>


      </FormContainer>
      
    
  
  );
};
export default ContactScreen;
