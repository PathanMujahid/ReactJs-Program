const games = [
    {
        name: "GTA5",
        Storage: "25GB",
        mode: "both",
        release_year: "2018",
        category: "Action",
    },

    {
        name: "volvorent",
        Storage: "15GB",
        mode: "online",
        release_year: "2019",
        category: "Action"

    },

    {
        name: "Asphalt9",
        Storage: "2GB",
        mode: "both",
        release: "2020",
        category: "Racing"
    },
    {
        name: "Candy Cursh",
        Storage: "500MB",
        mode: "offline",
        release_year: "2018",
        category: "puzzle"

    },
]
let newGames = {
    name: "BGMI",
    Storage: "2GB",
    mode: "online",
    release_year: "2018",
    category: "Avtion"
};
//  new data add in array of object using push 

games.push(newGames)

// checking game already exiest

if (newGames.hasOwnproperty('name')) {

    console.log("Game already exiset");
}
else {
    newGames['name'] = 'FR';

}
let gameExist = false;

for (const game of games) {
    if (game.name == newGames.name) {
        gameExist = true;
    }
}
if (!gameExist) {
    games.push(newGame);
}

const onlineGames = [];
const offlineGames = [];
const bothGames = [];

for (let game of games) {
    if (game.mode == "online") {
        onlineGames.push(game);
    } elseif(game.mode == "offline")
    {
        offlineGames.push(game);
    }
    else
    {
        bothGames.push(game);
    }
}

console.log({ onlineGames, offlineGames, bothGames })
console.log(`Total Games: ${games.length}`)