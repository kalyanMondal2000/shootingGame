const gameSpace = document.getElementById("gameSpace");
const images = ['char1.png', 'char4.png', 'char5.png', 'char6.png', ]
const characterChange = (image) =>{
    const character = document.createElement("img")
    character.src = images[image];
    character.id = "playCharacter";
    document.getElementById("gameSpace").appendChild(character);
    document.getElementById("character").onclick = function(){}
}