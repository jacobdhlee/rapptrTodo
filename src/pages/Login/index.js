import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import { getAssessToken } from '../../config/helper';

import { 
  Container, 
  Button, 
  ErrorMessage, 
  CheckBoxWrapper 
} from './styles';

const URL = "http://dev.rapptrlabs.com/Tests/scripts/user-login.php"

const LogIn = (props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [showPassword, changeShowPassword] = useState(false);
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
      //I got a CORS issue when I call the login api 
      const response = await axios.post(URL, data);
      //assume that resonse is object 
      //{
      // "user_id": 16,
      // "user_email": "test@rapptrlabs.com",
      // "user_username": "testuser",
      // "user_is_active": 1,
      // "user_profile_image": "http://dev.rapptrlabs.com/Tests/images/taylor_avatar.png", 
      // "user_last_active_epoch": 1544680026,
      // "user_creation_epoch": 1544713200,
      // "user_is_new": 1,
      // "user_token": "6dd4737a8b7ec61313ae5e900420d46815e1d13b2902be71b97a8fbf1f421a3e"
      // }
      localStorage.setItem('access_token', response.user_token);
      history.push('/list')
    } catch(e) {
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
          type={showPassword ? 'text' : 'password'}
          placeholder={'​*********'}
          error={password.error}
          value={password.value}
          icon={<FaLock />}
          onChange={handlePasswordChange}
        />
        <CheckBoxWrapper>
          <input 
            type={'checkbox'} 
            id={'showPassword'} 
            name={'showPassword'} 
            checked={showPassword} 
            onChange={() => changeShowPassword(!showPassword)}
          />
          <label htmlFor={'showPassword'}>Show Password</label>
        </CheckBoxWrapper>
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