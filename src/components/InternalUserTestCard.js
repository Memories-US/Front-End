import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTravelerData } from '../actions';
import './InternalUserTestCard.scss';


export const InternalUserTestCard = props => {
    console.log('InternalUserTestCard props', props)
    const dispatch = useDispatch();


    const handleDelete = event => {
        event.preventDefault();
        dispatch(deleteTravelerData(props.id));
    }
    
    return(
    
        <div className="userCard">
            <button onClick={handleDelete}><NavLink to='/internal-test' > Delete </NavLink></button>
            <p>id: {props.id}</p>
            <p>Username: {props.username}</p>
            <p>Password: {props.password}</p>
            <p>First Name: {props.first_name}</p>
            <p>Last Name: {props.last_name}</p>
            <p>E-mail: {props.email}</p>
        </div>
    )
}