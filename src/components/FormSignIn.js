import React from 'react';

const formSign = {
  width: '400px',
  height: '65px',
  border: '1px solid #DDDDDD',
  borderRadius: '5px',
  clear: 'both'
}
const labelInput = {
  margin: '0',
  float: 'left',
  paddingLeft: '10px',
  paddingTop: '5px',
  color: '#555555',
  fontWeight: '500',

}
const inputControl = {
  width: '100%',
  paddingLeft: '10px',
  border: 'none',
  outline: 'none'
}
const submitBtn = {
    width: '400px',
    height: '65px',
    background: '#00BD56',
    border: '1px solid #DDDDDD',
    borderRadius: '5px',
    color: '#fff'
}
const faqSign = {
  color: '#000',
  textDecoration: 'underline'
}
class FormSingIn extends React.Component {
  render () {
    return <div className="d-flex flex-column align-items-center col-md-12">
      <div className="form-group mt-5" style={formSign}>
        <label style={labelInput}>Username</label>
        <div className="controls">
          <input style={inputControl} type="text" placeholder="Nguyen Van A"/>
        </div>
      </div>
      <div className="form-group" style={formSign}>
        <label style={labelInput}>Password</label>
        <div className="controls">
          <input style={inputControl} type="password" placeholder="****************"/>
        </div>
      </div>
      <div>
        <button style={submitBtn}>Signip to Coders-x</button>
      </div>
      <div className="form-group form-check pt-4">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Keep me signed in</label>
      </div>
      <div className="pt-4">
        <a href="#" style={faqSign} className="pr-3">Forgot username?</a>
        <a href="#" style={faqSign}>Forgot password?</a>
      </div>
    </div>
  }
};
export default FormSingIn;