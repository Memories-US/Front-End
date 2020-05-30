// Component - Traveler's sign up page

import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


const SignUp = styled.div`
font-family: Poppins;
background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80");
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
`

const FormBack = styled.div`
background: rgba(255,255,255, 0.7);
width: 30%;
border-radius: 10px;
margin: 0 auto;
@media (max-width: 375px) {
    width: 300px;
  }
`

const FormIn = styled.div`
padding: 10% 0;
`
const Memories = styled.div`
color: #3C5955;
font-size: 50px;
font-family: Lobster;
padding-top: 10%;
`
const Input = styled.input`
font    : 1.4em/1.5em 
border  : none;
padding : 1% 1%;
margin  : 0;
width   : 80%;
@media (max-width: 375px) {
    width: 250px;
  }
`

const Label = styled.label`
font-size: 1rem;
`
const Button = styled.button`
background: #38A1DE;
border-radius: 5px;
width: 50%;
height: 35px;
@media (max-width: 375px) {
    width: 250px;
  }
`


export const Signup = props => {
    const [userSignUp, setUserSignUp] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: ''
    })

    const handleChange = event => {
        setUserSignUp({
          ...userSignUp,
          [event.target.name]: event.target.value
      })}

    const submitForm = event => {
        event.preventDefault();

        axios
        .post('https://memories-usa.herokuapp.com/api/auth/register', userSignUp)
        .then(response => {
            props.history.push('/login');
        })
        .catch(err => {
            if (err.response.status === 500)
            alert('User/Email already exist')
        })

        setUserSignUp({
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: ''
        })
    }




    return (
        <SignUp className='signup-container'>
                <Memories>Memories</Memories>
                <FormBack>
                <form onSubmit={submitForm}>
                    <FormIn>
                    <div>
                    <Input name='username' type='text' placeholder='Username' value={userSignUp.username} onChange={handleChange} required/> 
                    </div>
                    <br/>
                    <div>
                    <Input name='password' type='password' placeholder='Password' value={userSignUp.password} onChange={handleChange} required/>
                    </div>
                    <br/>
                    <div>
                    <Input name='first_name' type='text' placeholder='First Name' value={userSignUp.first_name} onChange={handleChange} required />
                    </div>
                    <br/>
                    <div>
                    <Input name='last_name' type='text' placeholder='Last Name' value={userSignUp.last_name} onChange={handleChange} required/>
                    </div>
                    <br/>
                    <div>
                    <Input name='email' type='email' placeholder='Email' value={userSignUp.email} onChange={handleChange} required />
                    </div>
                    <br/>
                    <Button>Sign Up</Button>
                    <br/><br/>
                    <Label>Already have an account?</Label>
                    <NavLink to='/login'><button>Log in</button></NavLink>
                    </FormIn>
                </form>
                </FormBack>
        </SignUp>
    )
}