import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPostData } from '../actions';
import './PostCreateForm.scss';

export const PostCreateForm = props => {

    const travelerID = window.localStorage.getItem('traveler_id');
    const dispatch = useDispatch();

    const [addPost, setAddPost] = useState({
        user_id: parseInt(travelerID),
        title: '',
        body: '',
        img_url: '',
    })

    const handleChanges = event => {
        setAddPost({
            ...addPost,
            [event.target.name]: event.target.value
        })
    }

    console.log(addPost);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addPostData(addPost));
        setAddPost({
            title: '',
            body: '',
            img_url: ''
        })
        props.setShowModal(false);
    }

    const cancelModal = () => {
        props.setShowModal(false);
    }

    return(
        <div>
            {props.showModal && (
                <div className='modal-div'>
                    <div className='modal-container'> 
                        <div className='addPostTitle-div'>
                            <div className="addPostTitle">Add Post</div>
                            <i id="closeIcon" class="far fa-times-circle fa-2x" onClick={cancelModal}></i>
                        </div>
                        <form onSubmit={handleSubmit} className='addPostForm'>
                            <label for='title'>Title</label>
                            <input id='title' type='text' placeholder='Title' name='title' value={addPost.title} onChange={handleChanges}/>
                            <label for='photo'>Photo</label>
                            <input id='photo' type='text' placeholder='Add image link' name='img_url' value={addPost.img_url} onChange={handleChanges}/>
                            <label for='story'>Story</label>
                            <textarea id='story' type='text' placeholder='Your story' name='body' value={addPost.body} onChange={handleChanges}/>
                            <button id='addBtn'>Add Story</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
