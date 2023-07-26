import socket from 'socket.io-client'
import serverURL from './utils/URL';

export const socket = io(serverURL, {
    autoConnect: false
});