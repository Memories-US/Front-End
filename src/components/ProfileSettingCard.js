import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTravelerData } from '../actions';
import { ProfileSettingCardForm } from './ProfileSettingCardForm';
import styled from 'styled-components';
import './ProfileSettingCard.scss'

const FormBack = styled.div`
padding-top: 10%;
width: 80%;
height: 30vh;
margin: 0 auto;
`


export const ProfileSettingCard = props => {
    // console.log('ProfileSettingCard props', props)
    const travelerID = window.localStorage.getItem('traveler_id');
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const displayModal = () => {
        setShowModal(true)
    }

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
            <div className="user-edit-delete-div">
                <button className="userEditBtn" onClick={displayModal}>Edit</button>
                <ProfileSettingCardForm showModal={showModal} setShowModal={setShowModal}/>
                <NavLink to='/login'><button className="userDeleteBtn" onClick={handleDelete}>Delete</button> </NavLink>
            </div>
        </FormBack>
    )
}