/* eslint-disable prettier/prettier */
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export const LoginForm = ({ logo = '', heading = 'Login', handleFormChange, loginFormSubmit }) => {
    return (
      <Container>
        <h1 className="text-center">{heading}</h1>
        <Form className="mx-auto">
            <Form.Group controlId="formUsername">
                <Form.Control
                type="text"
                name="username"
                placeholder="Email/Username"
                onChange={handleFormChange}
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleFormChange}
                />
            </Form.Group>
            <Form.Group controlId="formRememberMe">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button style={{backgroundColor: "#d53a3a"}} type="submit" onClick={loginFormSubmit} block>
                Login
            </Button>
            <Form.Group>
                <Button variant="link" >Forgot Password?</Button>
                <span className="float-right">
                    <span>Not a member yet? </span><Button variant="link">Sign Up</Button>
                </span>
            </Form.Group>
        </Form>
      </Container>
    );
}