import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTravelerData, editTravelerData } from '../actions';

export const ProfileSettingCardForm = props => {
  
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const initialState = {
        username: user.username,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
    };

    const [profile, SetProfile] = useState(initialState);
    const travelerID = window.localStorage.getItem('traveler_id');
    
    const handleChanges = event => {
        SetProfile({
            ...profile,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(editTravelerData(travelerID, profile)) 
        dispatch(getTravelerData(travelerID));
        props.history.push('/setting');
    }

    const returnBack = event => {
        event.preventDefault();
        props.history.push('/setting');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='User Name' name='username' value={profile.username} onChange={handleChanges}/>
                <input type='password' placeholder='Password' name='password' value={profile.password} onChange={handleChanges}/>
                <input type='text' placeholder='First Name' name='first_name' value={profile.first_name} onChange={handleChanges}/>
                <input type='text' placeholder='Last Name' name='last_name' value={profile.last_name} onChange={handleChanges}/>
                <input type='email' placeholder='E-Mail' name='email' value={profile.email} onChange={handleChanges}/>
                <button type="submit">Save Change</button> 
            </form>
            <button onClick={returnBack}>Cancel</button>
        </div>
    )
}