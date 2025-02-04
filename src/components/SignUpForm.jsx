import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../sass/styles.css';

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Handle input change
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signup', formData);
      console.log('Saved username succesfully into DB', response.data);
    } catch (err) {
      console.log('Error saving user', err);
    }
  };

  return (
    <div className='signup-container'>
      <form onSubmit={handleSubmit} className='signup-form'>
        <label>Username : </label>
        <input
          className='signup-input'
          id='username'
          name='username'
          type='text'
          value={formData.username}
          onChange={handleInputChange}
          placeholder='Create Username'
          required
        />
        <label>Password :</label>
        <input
          id='password'
          className='signup-input'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleInputChange}
          placeholder='Create Password'
          required
        />
        <button id='loginbutton' type='submit'>
          Create account
        </button>
      </form>
      <Link to='/'>Back To Login</Link>
    </div>
  );
}

export default SignUpForm;
