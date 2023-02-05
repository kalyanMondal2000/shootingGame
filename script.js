
class menu{
    constructor(charArray, choiceArea, gameArea, newImgs, width, height, backgroundcolor){
        this.charArray = charArray;
        this.choiceArea = choiceArea;
        this.gameArea = gameArea;
        this.newImgs = newImgs;
        this.width = width
        this.height = height
        this.backgroundcolor = backgroundcolor
    }
    display(charArray, choiceArea){
        this.charArray.forEach(element =>{
            let image = document.createElement("img")
            image.src = element;
            image.id = "character";
            this.newImgs.push(image)
            this.choiceArea.appendChild(image);
        })
    }
    drawGame(gameArea, width, height, backgroundcolor){
        this.gameArea.style.width = this.width
        this.gameArea.style.height = this.height
        this.gameArea.style.backgroundColor= this.backgroundcolor
    }
    
    select(charArray, gameArea){
        this.newImgs.forEach(element =>{
            element.onclick = function(){
                const source = element.src
                const newImg = document.createElement("img")
                newImg.src = source;
                newImg.id = "character";
                document.getElementById("gameArea").appendChild(newImg)
                for(let x=0; x<newImgs.length; x++){
                    newImgs[x].onclick = function(){}
                }
            }

        })
        }
}
charArray = ["char1.png", "char5.png", "char6.png"];
choiceArea = document.getElementById("choiceArea");
gameArea = document.getElementById("gameArea")
let newImgs = [];

menuDisp = new menu(charArray, choiceArea, gameArea, newImgs, "1000px", "500px", "cornflowerblue")
disp= menuDisp.display();
select = menuDisp.select();
draw = menuDisp.drawGame();