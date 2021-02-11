/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Button, Col } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';

import styles from './styles.module.css'

export const LoginForm = ({ logo = '', heading = 'Login', initialValues, validationSchema, loginFormSubmit }) => {
    return (
        <Container>
            <h1 className="text-center">{heading}</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm})=> {
                    console.log("onSubmit hit");
                    loginFormSubmit(values, setSubmitting, resetForm);
                    // setSubmitting(true);
                }}
                
            >
                {({ errors, touched, values, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field name="username" type="email"  className={`${errors.username && touched.username ? styles.err : ''} ${styles.input_control} mb-2`} />
                        {errors.username && touched.username ? <div className={`${styles.red} mb-1`} >{errors.username}</div> : null}
                        <Field name="password" className={`${errors.password && touched.password ? styles.err : ''} ${styles.input_control} mb-2`} />
                        {errors.password && touched.password ? (
                            <div className={`${styles.red} mb-1`} >{errors.password}</div>
                        ) : null}
                        <Col className="px-0">
                        <Field type="checkbox" name="rememberMe" />
                            <span className="pl-1">Remember me</span></Col>
                        <Button style={{backgroundColor: "#d53a3a"}} type="submit" disabled={isSubmitting} block>
                            Login
                        </Button>
                        <div>
                            <Button variant="link" xs={12}>Forgot Password?</Button>
                            <span className="float-right" xs={12}>
                                <span className={`${styles.v_align_middle}`}>Not a member yet? </span><Button variant="link">Sign Up</Button>
                            </span>
                        </div>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}