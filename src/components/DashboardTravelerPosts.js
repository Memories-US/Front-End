// Component - Render all traveler's posts

import React from 'react';
import './DashboardTravelerPosts.scss'

export const DashboardTravelerPosts = props => {
    return(
        <div className="dash-cards-div">
            <img src={props.imgURL} className='postImg' />
            <h3>{props.title}</h3>
            <h4>{props.body}</h4>
            <h4>{props.createdDate}</h4>
        </div>
    )
}