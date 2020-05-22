// Component - Actions
import { axiosWithAuth } from '../utils'

export const SET_TRAVELER_ID = 'SET_TRAVELER_ID';

export const GET_POST_START = 'GET_POST_START';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const ADD_POST_START = 'ADD_POST_START';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const GET_TRAVELER_POST_START = 'GET_TRAVELER_POST_START';
export const GET_TRAVELER_POST_SUCCESS = 'GET_TRAVELER_POST_SUCCESS';
export const EDIT_POST_START = 'EDIT_POST_START';
export const EDIT_POST_SUCCESS = 'EDIT_POST_START';
export const DELETE_POST_START = 'DELETE_POST_START';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

export const GET_TRAVELER_START = 'GET_TRAVELER_START';
export const GET_TRAVELER_SUCCESS = 'GET_TRAVELER_SUCCESS';
export const EDIT_TRAVELER_START = 'EDIT_TRAVELER_START ';
export const DELETE_TRAVELER_START = 'DELETE_TRAVELER_START';
export const DELETE_TRAVELER_SUCCESS = 'DELETE_TRAVELER_SUCCESS';




export const setTravelerID = travelerID => dispatch => {
    dispatch({type: SET_TRAVELER_ID, payload: travelerID});
}

export const getPostData = data => dispatch => {
    dispatch({ type: GET_POST_START });
    axiosWithAuth()
    .get('/api/posts')
    .then(response => {
        console.log("Dashboard GET all traveler response", response);
        dispatch({type: GET_POST_SUCCESS, payload:response.data});
    })
    .catch(error => console.log("Dashboard GET all traveler respsonse error", error));
}

export const getTravelerPostData = userID => dispatch => {
    dispatch ( { type: GET_TRAVELER_POST_START})
    axiosWithAuth()
    .get(`/api/users/${userID}/posts`)
    .then(response=>{
        console.log("getTravelerPostData GET response",response );
        dispatch({type: GET_TRAVELER_POST_SUCCESS, payload: response.data})
    })
    .catch(error => console.log('getTravelerPostData GET error', error));
}

export const addPostData = data => dispatch => {
    dispatch ({ type: ADD_POST_START });
    axiosWithAuth()
    .post('/api/posts', data)
    .then(response => {
        console.log('Profile Page POST response', response);
        dispatch({type: ADD_POST_SUCCESS, payload:response.data});
    })
}

export const editPostData = (id,data) => dispatch => {
    dispatch({ type: EDIT_POST_START });
    axiosWithAuth()
    .put(`api/posts/${id}`,data)
    .then(response => {
        console.log('Profile Page PUT response', response);
        dispatch({type: EDIT_POST_SUCCESS, payload: response})
    })
}

export const deletePostData = id => dispatch => {
    dispatch({ type: DELETE_POST_START }); 
    axiosWithAuth()
    .delete(`/api/posts/${id}`)
    .then(response => {
        console.log('Profile Page DELETE response', response);
        dispatch({type: DELETE_POST_SUCCESS, payload:response});
    })
    .catch(error=> console.log('Profile Page GET error',error))
}

export const getTravelerData = id => dispatch => {
    dispatch({ type: GET_TRAVELER_START }); 
    axiosWithAuth()
    .get(`/api/users/${id}`)
    .then(response => {
        console.log('Profile Page GET response', response);
        dispatch({type: GET_TRAVELER_SUCCESS, payload:response.data});
    })
    .catch(error=> console.log('Profile Page GET error',error))
}

export const editTravelerData = (id,data) => dispatch => {
    dispatch({ type: EDIT_TRAVELER_START });
    axiosWithAuth()
    .put(`api/users/${id}`,data)
    .then(response => {
        console.log('Profile Page PUT response', response);
        // dispatch({type: PUT_TRAVELER_SUCCESS, payload: response})
    })
}

export const deleteTravelerData = id => dispatch => {
    dispatch({ type: DELETE_TRAVELER_START }); 
    axiosWithAuth()
    .delete(`/api/users/${id}`)
    .then(response => {
        console.log('Profile Page DELETE response', response);
        dispatch({type: DELETE_TRAVELER_SUCCESS, payload:response.data});
    })
    .catch(error=> console.log('Profile Page GET error',error))
}






















