# react-asap-forms

> Reuseable Login, Signup Forms

[![NPM](https://img.shields.io/npm/v/react-asap-forms.svg)](https://www.npmjs.com/package/react-asap-forms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-asap-forms
```

## Usage

```css
>You have to import this file at the top of app.js

import "react-asap-forms/dist/index.css";
```jsx
import React, { Component } from 'react'

import { LoginForm } from 'react-asap-forms'
import 'react-asap-forms/dist/index.css'

class Example extends Component {
   var data = {
    heading: "Register",    *optional bydefault it value 'Login'
    loginFormSubmit: formSubmit,
    validationSchema, *validation schema object to validate form
    initialValues *initial values to populate form fields
  }

  render() {
    return <LoginForm {...data} />
  }
}
```

## License

MIT © [SaqibJamil7866](https://github.com/SaqibJamil7866)
