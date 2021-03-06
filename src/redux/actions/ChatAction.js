import axios from 'axios'

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const CHATTED_USERS = 'CHATTED_USERS';
export const GETALL_CHATS = 'GETALL_CHATS';
export const LAST_MESSAGE = 'LAST_MESSAGE';
export const VISITOR_MESSAGE = 'VISITOR_MESSAGE';
export const GET_VISITORS = 'GET_VISITORS';
export const GETV_MESSAGES = 'GETV_MESSAGES';
export const SUPPORT_RESPONDS = 'SUPPORT_RESPONDS';
export const GETSUPPORT_RESPONSE = 'GETSUPPORT_RESPONSE';
export const CHAT_PENDING = 'CHAT_PENDING';
export const CHAT_ERROR = 'CHAT_ERROR';
export const ALL_USERS = 'ALL_USERS';

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
        if(err.message === "Network Error"){
            dispatch({
                type: 'CHATTED_USERS',
                error: 'Network Error'
            })
        }
        if(err.response){
            dispatch({
                type: 'CHATTED_USERS',
                error: err.response
            })
        }
    })
}

// Get list of all users
export const fetchUsers = () => dispatch => {
    const authToken = localStorage.getItem('barefootUserToken');
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/chat/users`, {
        headers: {
            authorization: `Bearer ${authToken}`
        }
    })
    .then(res => {
        console.log(res)
        dispatch({
            type: 'ALL_USERS',
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err.message)
    })
}

//Get all chats between two users.
export const getChats = () => dispatch => {
    dispatch({
        type: CHAT_PENDING
    })
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

//Get visitors list
export const getVisitorsList = () => dispatch => {
    const authToken = localStorage.getItem('barefootUserToken');
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/chat/visitors`, {
        headers: {
            authorization: `Bearer ${authToken}`
        }
    })
    .then(res => {
        dispatch({
            type: GET_VISITORS,
            payload: res.data
        })
    })
    .catch(err => console.log(err.message))
}

//Get visitor's messages 
export const getVisitorsMessages = () => dispatch => {
    const authToken = localStorage.getItem('barefootUserToken');
    const visitor = localStorage.getItem('userId')
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/chat/support?visitor=${visitor}`, {
        headers: {
            authorization: `Bearer ${authToken}`
        }
    })
    .then(res => {
        dispatch({
            type: GETV_MESSAGES,
            payload: res.data
        })
    })
    .catch(err => console.log(err.message))
}

//support responds to the visitor
export const supportResponds = (message) => dispatch =>{
    const authToken = localStorage.getItem('barefootUserToken');
    return axios.post(`${process.env.REACT_APP_BACKEND_LINK}/chat/support`, message, {
        headers: {
            authorization: `Bearer ${authToken}`
        }
    })
    .then(res => dispatch({
        type: SUPPORT_RESPONDS,
        payload: res.data
    }))
    .catch(err => console.log(err.message))
}

// Visitor gets support response
export const getSupportResponse = () => dispatch => {
    const visitor = localStorage.getItem('visitorEmail')
    return axios.get(`${process.env.REACT_APP_BACKEND_LINK}/chat/visitor?visitor=${visitor}`)
    .then(res => dispatch({
        type: GETSUPPORT_RESPONSE,
        payload: res.data
    }))
}