import socket from 'socket.io-client'

const token = localStorage.getItem('barefootUserToken')

const io = socket.connect(`https://nomad-barefoot.herokuapp.com/`, {
    token: token,
    loggedInUser: localStorage.getItem('id')
})

export default io;