import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editPostData } from '../actions';
import './ProfilePostsForm.scss'

const initialState = {
    title: '',
    body: '',
    img_url: ''
}

export const ProfilePostsForm = props => {
    console.log('ProfilePostsForm props', props);

    const dispatch = useDispatch();
    const travelerPosts = useSelector(state => state.travelerPosts);
    const [post, setPost] = useState(initialState);

    useEffect(() => {
        const postToUpdate = travelerPosts.find(posts => posts.id === props.postID);
        if (postToUpdate) {
            setPost(postToUpdate);
        }
    }, []);

    const handleChanges = event => {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(editPostData(props.postID, post));
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
                        <div className='editPostTitle-div'>
                            <div className="editPostTitle">Edit Post</div>
                            <i id="closeIcon" className="far fa-times-circle fa-2x" onClick={cancelModal}></i>
                        </div>
                        <form onSubmit={handleSubmit} className='editPostForm'>
                            <label htmlFor='title'>Title</label>
                            <input id='title' type='text' placeholder='Title' name='title' value={post.title} onChange={handleChanges}/>
                            <label htmlFor='photo'>Photo</label>
                            <input id='photo' type='text' placeholder='Add image link' name='img_url' value={post.img_url} onChange={handleChanges}/>
                            <label htmlFor='story'>Story</label>
                            <textarea id='story' type='text' placeholder='Your story' name='body' value={post.body} onChange={handleChanges}/>
                            <button id='editBtn'>Save Change</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}