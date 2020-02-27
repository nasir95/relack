import React, { Component } from "react";

import styles from "./Register.module.css";

import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import SignupButton from "../Buttons/signupButton";

class SignupForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConf: ""
    };
  }

  isFormValid = () => {
    return (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password &&
      this.state.password === this.state.passwordConf
    );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    // try {
    //   const { name, email, password } = this.state;
    //   await userService.signup({ name, email, password });
    //   this.setState(this.getInitialState(), () => {
    //     alert("user signed up!");
    //   });
    // } catch (error) {}
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                id="firstName"
                name="firstName"
                type="name"
                placeholder="First name"
                onChange={this.handleChange}
                value={this.state.firstName}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                id="lastName"
                name="lastName"
                type="name"
                placeholder="Last name"
                onChange={this.handleChange}
                value={this.state.lastName}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label htmlFor="passwordConf">Password Confirmation</Form.Label>
          <Form.Control
            id="passwordConf"
            name="passwordConf"
            type="password"
            placeholder="Password Confirmation"
            onChange={this.handleChange}
            value={this.state.passwordConf}
          />
        </Form.Group>
        <Modal.Footer>
          <Button
            disabled={!this.isFormValid()}
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </Modal.Footer>
      </Form>
    );
  }
}

export default SignupForm;