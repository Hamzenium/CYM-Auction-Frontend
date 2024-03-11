
import React, { useState } from 'react';
import { signUp } from './authService';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    streetNumber: '',
    streetAddress: '',
    postal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(formData);
      console.log('Sign Up Success:', response.data);
      
    } catch (error) {
      console.error('Sign Up Error:', error.response.data.error);
      
    }
  };

 
};
