const gameMap = new Map();

setUsersList = (gameName, userEmail) => {
    if(!gameMap.has(gameName)){
        gameMap.set(gameName, [userEmail]);
    }
    else{
        gameMap.get(gameName).push(userEmail);
    }
}

removeUserFromList = (gameName, userEmail) => {
    if(gameMap.has(gameName)){
        gameMap.get(gameName).delete(userEmail);
    }
}

selectRandomPeople = (gameName, userEmail) => {
    let usersList = gameMap.get(gameName);

    if(usersList.length<2){
        // maybe a set timeout here? Or what we can do else?
        return [];
    }

    const index1 = Math.floor(Math.random() * usersList.length);
    let index2 = Math.floor(Math.random() * usersList.length);

    while(index1 === index2){
        index2 = Math.floor(Math.random() * usersList.length);
    }

    let randoms = [usersList[index1], usersList[index2]]

    // usersList.delete(usersList[index1], usersList[index2]);

    return randoms;
}

const handleSocket =  (io) => {
    io.on('connection', (socket) => {
        socket.on('GAME_JOIN_REQUEST', ({userEmail, gameName, timestamp}) => {
            // TODO: The algorithm should do this according to the timestamp.

            socket.join(userEmail);
            socket.join(gameName);
            
            setUsersList(gameName, userEmail);
            console.log(gameMap);

            let randoms = selectRandomPeople(gameName, userEmail);
            console.log(randoms);

            io.to(userEmail).emit('GAME_JOIN_SUCCESSFUL', userEmail, gameName);
        })
    })


}

module.exports = {handleSocket};