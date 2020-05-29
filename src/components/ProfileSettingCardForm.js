import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTravelerData, editTravelerData } from '../actions';
import './ProfileSettingCardForm.scss'

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

    const cancelModal = () => {
        props.setShowModal(false);
    }

    return(
        <div>
            {props.showModal && (
                <div className='modal-div'>
                    <div className='modal-container'> 
                        <div className='editPostTitle-div'>
                            <div className="editPostTitle">Personal Information</div>
                            <i id="closeIcon" className="far fa-times-circle fa-2x" onClick={cancelModal}></i>
                        </div>
                        <form onSubmit={handleSubmit} className='editPostForm'>
                        <label htmlFor='username'>Username</label>
                        <input id='username' type='text' placeholder='username' name='username' value={profile.username} onChange={handleChanges}/>
                        <label htmlFor='password'>Password</label>
                        <input id='password' type='password' placeholder='Password' name='password' value={profile.password} onChange={handleChanges}/>
                        <label htmlFor='firstname'>First Name</label>
                        <input id='firstname' type='text' placeholder='First Name' name='first_name' value={profile.first_name} onChange={handleChanges}/>
                        <label htmlFor='lastname'>Last Name</label>
                        <input id='lastname' type='text' placeholder='Last Name' name='last_name' value={profile.last_name} onChange={handleChanges}/>
                        <label htmlFor='email'>E-mail</label>
                        <input id='email' type='email' placeholder='E-Mail' name='email' value={profile.email} onChange={handleChanges}/>
                        <button id='editBtn'>Save Change</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}