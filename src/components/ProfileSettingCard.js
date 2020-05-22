import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTravelerData } from '../actions';
import styled from 'styled-components'

const Button1 = styled.button`
background: #38A1DE;
border-radius: 5px;
width: 400px;
height: 35px;
`
const Button2 = styled.button`
background: #37B1DE;
border-radius: 5px;
width: 400px;
height: 35px;
`
const FormBack = styled.div`
padding-top: 10%;
width: 690px;
height: 30vh;
margin: 0 auto;
`


export const ProfileSettingCard = props => {
    console.log('ProfileSettingCard props', props)
    const travelerID = window.localStorage.getItem('traveler_id');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = event => {
        event.preventDefault();
        dispatch(deleteTravelerData(travelerID));
        history.push('/login')
    }

    return (
        <FormBack>
            <h1>Personal Information</h1>
            <h2>User Name: {props.user.username}</h2>
            <h2>First Name: {props.user.first_name}</h2>
            <h2>Last Name: {props.user.last_name}</h2>
            <h2>E-mail: {props.user.email}</h2>
            <NavLink to={'/update-setting'}><Button1>Edit</Button1></NavLink>
            <br/>
            <NavLink to='/login'><Button2 onClick={handleDelete}>Delete</Button2> </NavLink>
        </FormBack>
    )
}