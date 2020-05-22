// Component - Reducers

import {
    SET_TRAVELER_ID,
    GET_POST_START,
    GET_POST_SUCCESS,
    ADD_POST_START,
    ADD_POST_SUCCESS,
    GET_TRAVELER_POST_START,
    GET_TRAVELER_POST_SUCCESS,
    GET_TRAVELER_START,
    GET_TRAVELER_SUCCESS,
    DELETE_TRAVELER_START,
    DELETE_TRAVELER_SUCCESS,
    DELETE_POST_START,
    DELETE_POST_SUCCESS 

} from '../actions';


const initialState = {
    isLoading: false,
    token: '',
    error: '',
    travelerID: 0,
    posts: [],
    travelerPosts: [],
    user: {
        id: 0,
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: ''
    },
    
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POST_START:
        return{
            ...state,
            isLoading: true
        }
        case GET_POST_SUCCESS:
        return{
            ...state,
            posts: action.payload,
        }
        case GET_TRAVELER_POST_START:
        return{
            ...state,
            isLoading: true
        }
        case GET_TRAVELER_POST_SUCCESS:
        return{
            ...state,
            travelerPosts: action.payload
        }

        case ADD_POST_START:
        return{
            ...state,
            isLoading: true
        }
        
        case ADD_POST_SUCCESS:
        return{
            ...state,
            post: action.payload,
            isLoading: false
        }

        case GET_TRAVELER_START:
        return {
            ...state,
            isLoading: true,
            error: ''
        }
        
        case GET_TRAVELER_SUCCESS:
        return {
            ...state,
            user: action.payload,
            isLoading: false,
            error: ''
        }

        case DELETE_TRAVELER_START:
        return {
            ...state,
            isLoading: true,
        }

        case DELETE_TRAVELER_SUCCESS:
        return {
            ...state,
            isLoading: false,
        }
            
        case DELETE_POST_START:
            return {
                ...state,
                isLoading: true,
            }
            
        case DELETE_POST_SUCCESS:
        return {
            ...state,
            post: action.payload,
            isLoading: false,
            error: ''
        }
    

        case SET_TRAVELER_ID:
            return {
                ...state,
                travelerID: action.payload,
                isLoading: false,
            }

        default:
            return state;
    }
}