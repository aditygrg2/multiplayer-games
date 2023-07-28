import { SERVER_URL } from '../utils/URL'
import { io } from 'socket.io-client'

export default class GameEngine{
    constructor(gameName, userEmail){
        this.gameName = gameName;
        this.userEmail = userEmail;
        this.socket = io(`${SERVER_URL}`);

        if(this.userEmail){
            this.connectionHandler();
        }
    }

    get io(){
        return this.socket;
    }

    connectionHandler(){
        const self = this;

        this.socket.on('connect', function() {
            console.log("Connection established");
            
            self.socket.emit('GAME_JOIN_REQUEST', {
                userEmail: self.userEmail,
                gameName: self.gameName,
                timestamp: Date.now(),
            })

            // GAME_JOIN_SUCCESSFUL is handled on GameBox Page.
        })
    }
}