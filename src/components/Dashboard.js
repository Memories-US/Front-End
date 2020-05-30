// Component - Traveler's dashboard, fetch posts from all traveler's in the API database and pass down to <DashboardTravelerPosts>

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getPostData } from '../actions';
import { DashboardTravelerPosts } from './DashboardTravelerPosts';
import './Dashboard.scss';

export const Dashboard = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);

    
    const logOut = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('traveler_id');
      }
    
    useEffect(() => {
        dispatch(getPostData());
    },[getPostData])

    const posts = useSelector(state => state.posts);
    
    return (
        <div className='main-container'>
            <header>
                <div className="navDiv">
                    <a href='#' className='MemoriesLogo'>Memories</a>
                    <NavLink className='logOut' onClick={logOut} to='/login' >Log Out</NavLink>
                </div>
            </header> 
            <div className='main-container-body'>
                <div className='main-container-menu'>
                    <div className='main-container-menu-dashboard'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9998 0.666626C6.64784 0.666626 0.666504 6.64796 0.666504 14C0.666504 21.352 6.64784 27.3333 13.9998 27.3333C21.3518 27.3333 27.3332 21.352 27.3332 14C27.3332 6.64796 21.3518 0.666626 13.9998 0.666626ZM3.33317 14C3.33317 12.8013 3.54117 11.6506 3.90784 10.5746L5.99984 12.6666L8.6665 15.3333V18L11.3332 20.6666L12.6665 22V24.5746C7.4145 23.9146 3.33317 19.4293 3.33317 14ZM22.4398 20.4973C21.5692 19.796 20.2492 19.3333 19.3332 19.3333V18C19.3332 17.2927 19.0522 16.6144 18.5521 16.1143C18.052 15.6142 17.3737 15.3333 16.6665 15.3333H11.3332V11.3333C12.0404 11.3333 12.7187 11.0523 13.2188 10.5522C13.7189 10.0521 13.9998 9.37387 13.9998 8.66663V7.33329H15.3332C16.0404 7.33329 16.7187 7.05234 17.2188 6.55224C17.7189 6.05215 17.9998 5.37387 17.9998 4.66663V4.11863C21.9038 5.70396 24.6665 9.53329 24.6665 14C24.6663 16.3529 23.8829 18.6388 22.4398 20.4973Z" fill="#206A60"/>
                        </svg>
                        <NavLink to='/dashboard' className='main-container-menu-buttons'>Dashboard</NavLink>
                    </div>
                    <div className='main-container-menu-button-dashboard'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9998 0.666626C6.63984 0.666626 0.666504 6.63996 0.666504 14C0.666504 21.36 6.63984 27.3333 13.9998 27.3333C21.3598 27.3333 27.3332 21.36 27.3332 14C27.3332 6.63996 21.3598 0.666626 13.9998 0.666626ZM13.9998 4.66663C16.2132 4.66663 17.9998 6.45329 17.9998 8.66663C17.9998 10.88 16.2132 12.6666 13.9998 12.6666C11.7865 12.6666 9.99984 10.88 9.99984 8.66663C9.99984 6.45329 11.7865 4.66663 13.9998 4.66663ZM13.9998 23.6C10.6665 23.6 7.71984 21.8933 5.99984 19.3066C6.03984 16.6533 11.3332 15.2 13.9998 15.2C16.6532 15.2 21.9598 16.6533 21.9998 19.3066C20.2798 21.8933 17.3332 23.6 13.9998 23.6Z" fill="#206A60"/>
                        </svg>
                        <NavLink to='/profile' className='main-container-menu-buttons'>Profile</NavLink>
                    </div>
                    <div className='main-container-menu-button-dashboard'>
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9988 9.375C13.0099 9.375 12.0432 9.66825 11.2209 10.2177C10.3987 10.7671 9.75783 11.548 9.37939 12.4616C9.00095 13.3752 8.90193 14.3805 9.09486 15.3505C9.28779 16.3204 9.76399 17.2113 10.4633 17.9105C11.1625 18.6098 12.0534 19.086 13.0233 19.2789C13.9932 19.4719 14.9986 19.3728 15.9122 18.9944C16.8258 18.616 17.6067 17.9751 18.1561 17.1529C18.7055 16.3306 18.9988 15.3639 18.9988 14.375C18.9948 13.0501 18.4668 11.7807 17.5299 10.8438C16.5931 9.90701 15.3237 9.37896 13.9988 9.375ZM24.7938 14.375C24.7912 14.8422 24.7569 15.3087 24.6913 15.7712L27.7344 18.1537C27.867 18.2632 27.9563 18.4162 27.9864 18.5854C28.0165 18.7546 27.9854 18.9291 27.8988 19.0775L25.02 24.0475C24.9325 24.1946 24.7959 24.3062 24.6343 24.3625C24.4726 24.4189 24.2963 24.4165 24.1363 24.3556L20.5582 22.9181C19.8131 23.4919 18.9977 23.968 18.1319 24.335L17.5969 28.1338C17.567 28.3039 17.4789 28.4584 17.3477 28.5708C17.2164 28.6832 17.0503 28.7465 16.8775 28.75H11.12C10.9504 28.7467 10.787 28.686 10.6563 28.5778C10.5257 28.4696 10.4355 28.3204 10.4007 28.1544L9.86566 24.3556C8.99746 23.9929 8.18151 23.516 7.43941 22.9375L3.86129 24.375C3.70134 24.4359 3.52505 24.4384 3.36342 24.3822C3.20178 24.3259 3.06515 24.2145 2.97754 24.0675L0.0987867 19.0981C0.0121354 18.9497 -0.0189079 18.7753 0.0112044 18.606C0.0413167 18.4368 0.130622 18.2838 0.263162 18.1744L3.30629 15.7919C3.24138 15.3223 3.20714 14.849 3.20379 14.375C3.20639 13.9078 3.24063 13.4413 3.30629 12.9788L0.263162 10.5962C0.130622 10.4868 0.0413167 10.3338 0.0112044 10.1646C-0.0189079 9.99536 0.0121354 9.82094 0.0987867 9.6725L2.97754 4.7025C3.06505 4.55537 3.20164 4.44382 3.36329 4.38746C3.52493 4.3311 3.70127 4.33355 3.86129 4.39437L7.43941 5.83187C8.18449 5.25813 8.99984 4.78198 9.86566 4.415L10.4007 0.61625C10.4306 0.446093 10.5187 0.291616 10.6499 0.179215C10.7811 0.0668147 10.9473 0.00346796 11.12 0H16.8775C17.0471 0.00330096 17.2106 0.0639945 17.3413 0.172173C17.4719 0.280351 17.562 0.429624 17.5969 0.595625L18.1319 4.39437C19.0012 4.75686 19.8182 5.23378 20.5613 5.8125L24.1363 4.375C24.2962 4.31412 24.4725 4.31158 24.6342 4.36782C24.7958 4.42406 24.9324 4.53548 25.02 4.6825L27.8988 9.6525C27.9854 9.80094 28.0165 9.97536 27.9864 10.1446C27.9563 10.3138 27.867 10.4668 27.7344 10.5763L24.6913 12.9587C24.7562 13.4281 24.7904 13.9012 24.7938 14.375Z" fill="#206A60"/>
                        </svg>
                        <NavLink to='/setting' className='main-container-menu-buttons'>Setting</NavLink>
                    </div>
                </div>
                <div className="dashboard-div">
                    <div className="dashboard-mobile-div">
                       <NavLink to='/dashboard' className='main-container-menu-buttons'>Dashboard</NavLink>
                       <NavLink to='/profile' className='main-container-menu-buttons'>Profile</NavLink>
                       <NavLink to='/setting' className='main-container-menu-buttons'>Setting</NavLink>
                    </div>
                    <div className="dashboard-title">Our Memories</div>
                    <div className='main-container-posts'>       
                        {posts.sort(({id: prevID}, {id: currID})=>
                            currID - prevID).map(posts=> {
                            return <DashboardTravelerPosts key={posts.id} title={posts.title} body={posts.body} imgURL={posts.img_url} createdDate={posts.created_date}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
