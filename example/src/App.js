import React, { useState } from 'react'
import * as Yup from 'yup';

import { LoginForm } from 'react-asap-forms'
import 'react-asap-forms/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
    .min(2, "*Password must have at least 2 characters")
    .max(100, "*Password can't be longer than 100 characters")
    .required("*Password is required"),
    username: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  });

  const initialValues =  {
    password: '',
    username: '',
    rememberMe: false
  }

  const [formData, setFormData] = useState({});

  const formSubmit = (val, setSubmitting, resetForm) =>{
    setSubmitting(true);
    console.log("Submitted value: ", val);
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 5000);
  }


  var data = {
    // heading: "Register",
    loginFormSubmit: formSubmit,
    validationSchema,
    initialValues
  }


  return (
    <div className="App">
      <LoginForm {...data} />
    </div>
  );
}

export default App
