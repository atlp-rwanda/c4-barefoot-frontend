import socket from 'socket.io-client';

const token = localStorage.getItem('barefootUserToken');

export const io = socket(`${process.env.REACT_APP_BACKEND_LINK}/chat`, {query: token})



