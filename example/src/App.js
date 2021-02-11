import React, { useState } from 'react'

import { LoginForm } from 'react-asap-forms'
import 'react-asap-forms/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [formData, setFormData] = useState({});

  const formSubmit = () =>{
    console.log("Submitted value: ", formData);
    alert("submitted");
  }

  const handleFormChange = (e) =>{
    console.log("e: ", e.currentTarget.value);
    setFormData({...formData, [e.currentTarget.name]: e.currentTarget.value})
  }

  var data = {
    // heading: "Register",
    handleFormChange: handleFormChange,
    loginFormSubmit: formSubmit
  }


  return (
    <div className="App">
      <LoginForm {...data}/>
    </div>
  );
}

export default App
