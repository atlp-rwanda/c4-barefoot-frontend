import axios from 'axios'

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const CHATTED_USERS = 'CHATTED_USERS';
export const GETALL_CHATS = 'GETALL_CHATS';
export const LAST_MESSAGE = 'LAST_MESSAGE';
export const VISITOR_MESSAGE = 'VISITOR_MESSAGE';

// send a new message to the user
export const newMessageAction = (messageData) => dispatch => {
    const authToken = localStorage.getItem('barefootUserToken')
    fetch(`${process.env.REACT_APP_BACKEND_LINK}/chat`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(messageData)
    })
    .then(res => res.json())
    .then(data => dispatch({
            type: 'NEW_MESSAGE',
            payload: data
        })
    )
    .catch(err => console.log(err.message))
}

// Get list of people you've chatted with
export const fetchUsersChat = () => dispatch => {
    const authToken = localStorage.getItem('barefootUserToken');
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/chat/chatlist`, {
        headers: {
            authorization: `Bearer ${authToken}`
        }
    })
    .then(res => dispatch({
            type: 'CHATTED_USERS',
            payload: res.data
        })
    )
    .catch(err => {
        console.log(err.message)
    })
}

export const getLastMessage = (idData) => dispatch => {
    const authToken = localStorage.getItem('barefootUserToken');
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/chat/last?id=${idData}`, {
        headers: {
            authorization: `Bearer ${authToken}`
        }
    })
    .then(res => dispatch({
        type: LAST_MESSAGE,
        payload: res.data
    }))
    .catch(err => console.log(err.message))
}

//Get all chats between two users.
export const getChats = () => dispatch => {
    const authToken = localStorage.getItem('barefootUserToken');
    const idData = localStorage.getItem('userId');
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/chat?id=${idData}`, {
        headers: {
            authorization: `Bearer ${authToken}`
        }
    })
    .then(res => {
        dispatch({
            type: GETALL_CHATS,
            payload: res.data.chats
        })
    })
    .catch(err => console.log(err.message))
}

// post a new visitor's message
export const visitorsMessage = (message) => dispatch =>{
    return axios.post(`${process.env.REACT_APP_BACKEND_LINK}/chat/visitor`, message)
    .then(res => dispatch({
        type: VISITOR_MESSAGE,
        payload: res.data
    }))
    .catch(err => console.log(err.message))
}