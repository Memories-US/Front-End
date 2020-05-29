// Component - Traveler's login page

import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const LogIn = styled.div`
  font-family: Poppins;
  background-image: url("https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1782&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`

const FormBack = styled.div`
background: rgba(255,255,255, 0.7);
width: 600px;
height: 320px;
border-radius: 10px;
margin: 0 auto;
@media (max-width: 375px) {
  width: 300px;
}
`

const FormIn = styled.div`
padding-top: 10%;
margin-top: 5%;
`

const Memories = styled.div`
color: #3C5955;
font-size: 50px;
font-family: Lobster;
padding-top: 10%;
`
const Button = styled.button`
background: #38A1DE;
border-radius: 5px;
width: 400px;
height: 35px;
@media (max-width: 375px) {
  width: 250px;
}
`
const Input = styled.input`
font    : 1.4em/1.5em 
border  : none;
padding : 2% 1%;
margin  : 0;
width   : 80%;
@media (max-width: 375px) {
    width: 250px;
  }
`

const Label = styled.label`
font-size: 2rem;
`

export const Login = props => {
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: ''
    })
  
    const handleChange = event => {
      setUserLogin({
        ...userLogin,
        [event.target.name]: event.target.value
    })}
    
    const submitLogin = event => {
      event.preventDefault();
      axiosWithAuth()
      .post('api/auth/login', userLogin)
      .then(res =>{
            window.localStorage.setItem('token', res.data.token);
            window.localStorage.setItem('traveler_id', res.data.id);
            const travelerID = window.localStorage.getItem('traveler_id');
            if(parseInt(travelerID) === 4) { 
              props.history.push('/internal-test'); 
            }
            else{
              props.history.push('/dashboard'); 
            };
      })
      .catch(err=>{
          if (err.response.status === 401)
          alert('Incorrect User/Password entered')
        });
    }
    
    return (
      <LogIn>
        <Memories>Memories</Memories>
       <FormBack>
        <form onSubmit={submitLogin}>
          <FormIn>
            <div>
            <Input name='username' type='text' placeholder='User Name' value={userLogin.username} onChange={handleChange} required /> 
            </div>
            <br/>
            <div>
            <Input name='password' type='password' placeholder='Password' value={userLogin.password} onChange={handleChange} required/>
            </div>
            <br/>
            <div>
            <Button>Login</Button>
            </div>
            <br/><br/>
            <Label>Don’t have an account?</Label>
            <br/><br/>
           <NavLink to="/"><button className='signUpBtn'>Sign up</button></NavLink>
          </FormIn>
        </form>
  </FormBack>
  </LogIn>
    )
  };