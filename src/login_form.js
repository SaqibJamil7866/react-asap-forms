/* eslint-disable prettier/prettier */
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export const LoginForm = ({ logo = '', heading = 'Login', loginFormSubmit}) => {
    return (
      <Container>
        <h1 className="text-center">{heading}</h1>
        <Form className="mx-auto">
            <Form.Group controlId="formUsername">
            <Form.Control
                type="text"
                name="username"
                placeholder="Email/Username"
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                />
            </Form.Group>
            <Form.Group controlId="formRememberMe">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button style={{backgroundColor: "#d53a3a"}} type="submit" onClick={loginFormSubmit} block>
                Login
            </Button>
        </Form>
      </Container>
    );
}