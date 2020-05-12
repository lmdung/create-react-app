import React from 'react';
const textReturn = {
  fontWeight: '600',
  fontSize: '20px',
  paddingLeft: '5px'
};
const logo = {
  width: '220px',
  height: '40px'
};
const buttonSign = {
  width: '130px',
  height: '45px',
  border: '1px solid #555555',
  backgroundColor: '#fff',
  color: '#555555',
  fontWeight: '600',
  fontSize: '20px'
}
const imgStyle = {
  width: '20px',
  height: '10px'
}
class Return extends React.Component {
  render () {
    return <div className="col-md-12 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img style={imgStyle} src={process.env.PUBLIC_URL + '/return1.png'} alt={"returnImg"} />
        <div style={textReturn}>Go back</div>
      </div>
      <div>
        <img style={logo} src={process.env.PUBLIC_URL + '/logo@256 1.png'} alt={"logo@256"} />
      </div>
      <div>
        <button style={buttonSign}>Sign up</button>
      </div>
    </div> 
  }
}
export default Return;
