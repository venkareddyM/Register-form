import React, { useState } from 'react';
import './Style.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    gender: '',
    
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  const MyEvent=((e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  })

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(formData); 

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
    } else {
      console.log(formData);
      setPasswordMatch(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      password: '',
      ConfirmPassword: '',
      Email: '',
      gender: '',
    });
  };

  return (
    <div className="container">
      <h2>REGISTER FORM</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>username</label>
          <input type='text' name='name' placeholder="Enter the username" onChange={MyEvent} required/>
        </div>
        <div className="form-group">
          <label >password</label>
          <input type='password' name='password' placeholder="Enter the password" onChange={MyEvent} required/>
        </div>
        <div className="form-group">
          <label >Confirm Password</label>
          <input type='password' name='Confirm Password' placeholder="Confirm Password" onChange={MyEvent} required/>
          {!passwordMatch && <p className="error-message">Passwords do not match</p>}
        </div>
        <div className="form-group">
          <label >Email</label>
          <input type='text' name='Email' placeholder="Enter the your mail"onChange={MyEvent} required/>
        </div>
        <div className="form-group">
        <label>Gender</label>
        <div className="row">
          <label htmlFor="male" className="radio-label">
            Male
            <input type="radio"  name="gender" value="male" onChange={MyEvent} required />
          </label>
          <label htmlFor="female" className="radio-label">
            Female
            <input type="radio"  name="gender" value="female"onChange={MyEvent} required />
          </label>
        </div>
        </div>
        <div className="form-button">
          <button type="reset" className="reset-button" onClick={handleReset}>Reset</button>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
