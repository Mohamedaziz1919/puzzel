
var rows = 3;
var columns = 3;

var currTile;
var otherTile; //tile

var turns = 0;

// var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];


window.onload=function (){
    for (var i=0; i<rows ;i++){
        for(var j=0;j<columns ;j++){

               
            var tile=document.createElement("img")
            tile.id =i.toString()+"-"+j.toString();
            tile.src =imgOrder.shift() + ".jpg";
            
            document.getElementById("board").append(tile);
           
            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);   
            tile.addEventListener("dragenter", dragEnter);  
            tile.addEventListener("dragleave", dragLeave);  
            tile.addEventListener("drop", dragDrop);        
            tile.addEventListener("dragend", dragEnd);      

            document.getElementById("board").append(tile);

        }
    }
}
// wanna i click in image we start dragging
function dragStart() {
    currTile = this; //this it's img tile beforf dragged
}
//move image  after clicked 
function dragOver(e) {
    e.preventDefault();
}
//drag image in another img 
function dragEnter(e) {
    e.preventDefault();
}
// switch img
function dragLeave() {

}
// swap the two tile
function dragDrop() {
    otherTile = this; //this it's img tile after dropped
}

function dragEnd() {

    var cords = currTile.id.split("-"); 
    var i = parseInt(cords[0]);
    var j = parseInt(cords[1]);

    var otherCoords = otherTile.id.split("-");
    var i2 = parseInt(otherCoords[0]);
    var j2 = parseInt(otherCoords[1]);

    // this a conditions to  the rows and columns it will sure or not for swap img at ( left right up down )

    var Left =  (i == i2 && j2 == j-1);
    var Right =( i == i2 && j2 == j+1);

    var Up = (j == j2 && i2 == i-1);
    var Down = ( j == j2 && i2 == i+1)  ;

    var res = Left || Right || Up || Down;
 
    //counter of turns just if swap img turns it will be add 
    if (res) {
        var currImg = currTile.src;
        var otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }


}




 // this function did  not work
// var rows = 3;
// var columns = 3;

// var imgOrder = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
// var turns
// window.onload = function() {
//   for (var i = 0; i < rows; i++) {
//     for (var j = 0; j < columns; j++) {
//       var tile = document.createElement("img");
//       tile.src = imgOrder[i * columns + j];
//       document.getElementById("board").appendChild(tile);
//     }
//   }
// };

















