import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { DropdownList } from './DropdownList';
import { useDispatch } from 'react-redux';
import { deletePostData } from '../actions';
import './ProfilePosts.scss';
import { ProfilePostsForm } from './ProfilePostsForm';

export const ProfilePosts = props => {
    // console.log("ProfilePosts props", props)

    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const handleDelete = event => {
        event.preventDefault();
        dispatch(deletePostData(props.id));
        history.push('/profile')
    }

    const displayModal = () => {
        setShowModal(true)
    }

    return(
        <div className="post-cards-div">
            <DropdownList id={props.id} imgURL={props.imgURL}/>
            <img src={props.imgURL} alt='Not found' className='postImg'/>
            <h3>{props.title}</h3>
            <h4>{props.body}</h4>
            <h4>{props.createdDate}</h4>
        </div>
    )

}


    // return(
    //     <div className="post-cards-div">
    //         <img src={props.imgURL} alt='Not found' className='postImg'/>
    //         <h3>{props.title}</h3>
    //         <h4>{props.body}</h4>
    //         <div className='post-edit-delete-div'>
    //             <NavLink to={`/update-post/${props.id}`}> <button className='post-btns'>Edit </button></NavLink>
    //             <NavLink to='/dashboard'><button className='post-btns' onClick={handleDelete}>Delete </button></NavLink>
    //         </div>
    //     </div>
    // )