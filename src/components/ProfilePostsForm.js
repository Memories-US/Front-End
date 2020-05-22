import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editPostData } from '../actions';

const initialState = {
    title: '',
    body: '',
    img_url: ''
}

export const ProfilePostsForm = props => {
    console.log('ProfilePostsForm props', props);
    const { id } = useParams();
    const travelerPosts = useSelector(state => state.travelerPosts);
    const dispatch = useDispatch();
 
    const [post, setPost] = useState(initialState);

    useEffect(() => {
        const postToUpdate = travelerPosts.find(posts => `${posts.id}` === id);
        if (postToUpdate) {
            setPost(postToUpdate);
        }
    }, [travelerPosts,id]);

    const handleChanges = event => {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
    }
    console.log('postToUpdate Post: ', post);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(editPostData(id, post)) 
        props.history.push('/profile');
    }

    const returnBack = event => {
        event.preventDefault();
        props.history.push('/profile');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Title' name='title' value={post.title} onChange={handleChanges}/>
                <input type='text' placeholder='Body' name='body' value={post.body} onChange={handleChanges}/>
                <input type='text' placeholder='Img URL' name='img_url' value={post.img_url} onChange={handleChanges}/>
                <button type="submit">Save Change</button>
            </form>
            <button onClick={returnBack}>Cancel</button>
        </div>
    )
}