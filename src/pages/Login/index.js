import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import { getAssessToken } from '../../config/helper';

import { Container, Button, ErrorMessage } from './styles';

const URL = "http://dev.rapptrlabs.com/Tests/scripts/user-login.php"

const LogIn = (props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [error, setError] = useState('');

  useEffect(() => {
    isAuthenticate();
  }, []);

  const history = useHistory()

  const isAuthenticate = () => {
    if(getAssessToken()) {
      history.push('/list');
    }
  }

  const handleEmailChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const emailValidation = /\S+@\S+\.\S+/;
    if(!emailValidation.test(value.trim())) {
      setEmail({value: value, error: 'Please enter valid email'}) 
    }
    else {
      setEmail({value, error: ''});
    }
  }

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    if(value.length < 4 || value.length > 16) {
      setPassword({
        value: e.target.value, 
        error: 'Password length range should be between 4 to 16'
      })
    } else {
      setPassword({value: e.target.value, error: ''})
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email.value,
      password: password.value
    }
    
    try {
      const response = await axios.post(URL, data);
      console.log('data ', response);
      localStorage.setItem('assess_token', response.user_token);
      history.push('/list')
    } catch(e) {
      console.log('err ', e)
      setError('Something went wrong');
    }
  }

  const handleButtonDisabled = () => {
    return !email.value.trim || !password.value.trim() || email.error || password.error;
  }

  return (
    <Container>
      <h1>Rapptr Labs</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          label={'Email'}
          name={'email'}
          max={50}
          type={'text'}
          placeholder={'​user@rapptrlabs.com'}
          error={email.error}
          value={email.value}
          icon={<FaUserAlt />}
          onChange={handleEmailChange}
        />
        <Input 
          label={'Password'}
          name={'password'}
          max={16}
          type={'text'}
          placeholder={'​*********'}
          error={password.error}
          value={password.value}
          icon={<FaLock />}
          onChange={handlePasswordChange}
        />
        <Button 
          disabled={handleButtonDisabled()}>
          Log In
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </Container>
  )
}

export default LogIn;