import React, { useState } from 'react';
import { signIn } from './authService';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn(email, password);
      console.log('Sign In Success:', response.data);
      
    } catch (error) {
      console.error('Sign In Error:', error.response.data.error);
     
    }
  };

  // Render form with onChange for email and password, and onSubmit for the form
};
