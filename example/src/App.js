import React from 'react'

import { LoginForm } from 'react-asap-forms'
import 'react-asap-forms/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const formSubmit = () =>{
    alert('Submitted');
  }
  var data = {
    // heading: "Register",
    loginFormSubmit: formSubmit
  }


  return (
    <div className="App">
      <LoginForm {...data}/>
    </div>
  );
}

export default App
