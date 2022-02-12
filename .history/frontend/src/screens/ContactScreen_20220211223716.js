import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormContainer from '../components/FormContainer'
import { Form, Button, Row, Col, FormGroup } from 'react-bootstrap'

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
           
            
          ></Form.Control>
    </FormGroup>
    <Form.Group controlId='user_email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
           
           
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='message'>
          <Form.Label>Message</Form.Label>
          <Form.Control
             as="textarea"
             row="4"
            placeholder='Enter text'
           
           
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
              SEND
            </Button>
        <Button type="submit" value="Send" />
</Form>


      </FormContainer>
      
    
  
  );
};
export default ContactScreen;
