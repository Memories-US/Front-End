import React,{ useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { InternalUserTestCard } from './InternalUserTestCard';

export const InternalUserTest = () =>{

    const [testUsers, setTestUsers] = useState([]);
    const isLoading = useSelector(state => state.isLoading);



    const logOut = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('traveler_id');
    }

    useEffect(()=>{
        axiosWithAuth()
        .get('/api/users')
        .then(response => {
            console.log('InternalUserTest GET response', response);
            setTestUsers(response.data);
        })
        .catch(error=> console('InternalUserTest GET response', error));
    },[isLoading]);

    console.log('testUsers', testUsers);
    return (
        <div>
            <header>
                <NavLink onClick={logOut} to='/login' >Log out</NavLink>
            </header> 
            <h1>Users Database</h1>
            <NavLink to='/internal-test'>Profiles</NavLink>
            <NavLink to='/internal-post'>Posts</NavLink>
            <NavLink to='/setting'>Setting</NavLink>
            {testUsers.map(users => {
                return <InternalUserTestCard 
                    key={users.id} 
                    id={users.id}
                    username={users.username}
                    password={users.password}
                    first_name={users.first_name}
                    last_name={users.last_name}
                    email={users.email}
                    />
            })}
        </div>
    )
}