import { SERVER_URL } from '../utils/URL'

export default class GameEngine{
    constructor(name, userEmail){
        this.name = name;
        this.userEmail = userEmail;
        this.socket = io.connect(`${SERVER_URL}`);

        if(this.userEmail){
            connectionHandler();
        }
    }

    connectionHandler(){
        let self = this;

        this.socket.on('connect', function() {
            console.log("Connection established");
        })
    }
}