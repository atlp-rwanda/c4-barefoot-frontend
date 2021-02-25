import axios from 'axios'

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const CHAT_USERS = 'CHAT_USERS';

export const NewMessage = (messageData) => dispatch => {
    const authToken = localStorage.getItem('BarefootUserToken')
    console.log('fetching')
    fetch('https://localhost:7000/api/v1/chat', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(messageData)
    })
    .then(res = res.json())
    .then(data => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: data
        })
        console.log(data)
    })
}

export const fetchUsersChat = () => dispatch => {
    const authToken = localStorage.getItem('barefootUserToken');
    return axios.get('http://localhost:7000/api/v1/chat/users', {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
    .then(data => {
        dispatch({
            type: 'CHAT_USERS',
            users: data.data
        })
    })
    .catch(err => {
        console.log(err.message)
    })
}