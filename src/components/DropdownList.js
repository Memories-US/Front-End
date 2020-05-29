import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePostData } from '../actions';
import { ProfilePostsForm } from './ProfilePostsForm';
import './DropdownList.scss'

export const DropdownList = (props) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const displayModal = () => {
        setShowModal(true)
    }

    const handleDelete = event => {
        event.preventDefault();
        dispatch(deletePostData(props.id));
        history.push('/profile')
    }


    return (
        <div className="dropdown-container">
            <i className="fas fa-caret-down fa-3x"></i>
            <div className='dropdown-edit-delete-div'>
                <button className="editBtn" onClick={displayModal}>Edit</button>
                <ProfilePostsForm postID={props.id} showModal={showModal} setShowModal={setShowModal}/>
                <button className="deleteBtn" onClick={handleDelete}>Delete </button>
                <a href={props.imgURL} className="downloadBtn" target="_blank" download>Download</a>
            </div>
        </div>
    )
};