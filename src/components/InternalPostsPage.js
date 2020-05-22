// Component - Fetch all travelers data and pass down to <ProfilePosts> component
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getPostData } from '../actions';
import { InternalPostsCard } from './InternalPostsCard'

export const InternalPostsPage = props => {
    const dispatch = useDispatch();
    const travelerID = window.localStorage.getItem('traveler_id');

    const logOut = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('traveler_id');
      }
    
    useEffect(() => {
        dispatch(getPostData(travelerID));
    },[getPostData])

    const posts = useSelector(state => state.posts);
    const firstName = useSelector(state => state.user.first_name);
    console.log("first name", firstName);

    return (
        <div>
            <header>
                 <NavLink onClick={logOut} to='/login' >Log out</NavLink>
            </header> 
            <h1>Users Posts</h1>
            <NavLink to='/internal-test'>Profiles</NavLink>
            <NavLink to='/internal-post'>Posts</NavLink>
            <NavLink to='/setting'>Setting</NavLink>
            {posts.map(posts=> {
                return <InternalPostsCard key={posts.id} id={posts.id} title={posts.title} body={posts.body} imgURL={posts.img_url}/>
            })}

        </div>
    )
}