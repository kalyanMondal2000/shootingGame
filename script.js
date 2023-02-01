/*
class selectPlayer{
    constructor(images, area){
        this.images = images; 
        this.area = area; 
    };
    displayChoice(images, area){
        images.forEach(image => {
            area.appendChild(document.createElement("img").src = image)
        });
    }
}
*/

charArray = ["char1.png", "char4.png", "char5.png", "char6.png"];
choiceArea = document.getElementById("choiceArea");
 
charArray.forEach(element =>{
    image = document.createElement("img")
    image.src = element;
    image.id = "character";
    choiceArea.appendChild(image);
})
