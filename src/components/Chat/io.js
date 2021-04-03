import socket from 'socket.io-client'

const token = localStorage.getItem('barefootUserToken')

const io = socket.connect('http://localhost:3000', {
    token: token,
    loggedInUser: localStorage.getItem('id')
})

export default io;