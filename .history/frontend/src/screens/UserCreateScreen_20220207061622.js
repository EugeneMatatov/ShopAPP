import React, { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";

const UserCreateScreen = ({ location, history }) => {
 

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
      
    </Row>
  );
};

export default UserCreateScreen;
