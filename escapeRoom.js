var readlineSync = require('readline-sync');
var playerName = readlineSync.question ("May I Have Your Name Please ?");
var message= (`Welcome, ${playerName}, to the Escape Room Game Simulation!`);
console.log (message)
var isLifeLeft = true;
var hasFoundKey = false;
while (isLifeLeft == true){

    const menuId = readlineSync.keyIn('Select 1 to put hand in hole \n Select 2 to find the key \n Select 3 to Open the door', {limit: '$<1-3>'});
if(menuId == 1){
console.log(`${playerName}, sorry you are Dead. Game Is Over`);
isLifeLeft = false;
}
 else if (menuId == 2 && hasFoundKey == false){
    hasFoundKey = true;
console.log(`${playerName}, you have found the key successfully. Move to the next option.`);

}
else if (menuId == 2 && hasFoundKey == true){
    hasFoundKey = true;
console.log(`${playerName}, you have found the key earlier. Please proceed to the next option.`);

}
else if (menuId == 3 && hasFoundKey == false){
console.log(`${playerName}, you need to find the key first`);
}
else if (menuId == 3 && hasFoundKey == true){
console.log(`${playerName}, you have found the key successfully and have opened the door successfully. Gami Is Over.`);
isLifeLeft = false;
}
}