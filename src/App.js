import React from 'react';
import logo from './logo.svg';
import './App.css';
import Return from './components/Return'
import FormSingIn from './components/FormSignIn'

function App() {
  return (
    <div className="container App">
      <div className="row">
        <Return/>
      </div>
      <div className="row col-md-12 signIn">Sign in</div>
      <div className="row">
        <FormSingIn />
      </div>
    </div>
  );
}

export default App;
