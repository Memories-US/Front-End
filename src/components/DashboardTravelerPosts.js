// Component - Render all traveler's posts

import React from 'react';
import './DashboardTravelerPosts.scss'

export const DashboardTravelerPosts = props => {
    console.log("DashboardTravelerPosts props", props)
    return(
        <div className="dash-cards-div">
            <h3>{props.title}</h3>
            <img src={props.imgURL} className='postImg' />
            <h4>{props.body}</h4>
        </div>
    )
}