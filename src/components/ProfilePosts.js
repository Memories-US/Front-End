import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTravelerPostData, deletePostData } from '../actions';
import './ProfilePosts.scss';

export const ProfilePosts = props => {
    console.log("ProfilePosts props", props)
    const dispatch = useDispatch();
    const history = useHistory();
    const handleDelete = event => {
        event.preventDefault();
        dispatch(deletePostData(props.id));
        history.push('/profile')
    }
    return(
        <div className="post-cards-div">
            <h3>{props.title}</h3>
            <img src={props.imgURL} alt='Not found' className='postImg'/>
            <h4>{props.body}</h4>
            <div className='post-edit-delete-div'>
                <NavLink to={`/update-post/${props.id}`}> <button className='post-btns'>Edit </button></NavLink>
                <NavLink to='/dashboard'><button className='post-btns' onClick={handleDelete}>Delete </button></NavLink>
            </div>
        </div>
    )
}