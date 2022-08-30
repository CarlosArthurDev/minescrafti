var canvas=new fabric.Canvas("myCanvas");
var heigthblocking=30;
var widthblocking=30;
var xp=10
var yp=15
var playobject="";


function updateplayer(){
    fabric.Image.fromURL("player.png",function(Img){
        playobject=Img;
        playobject.scaleToWidth(150);
        playobject.scaleToHeight(140);
        playobject.set({
            top:yp,left:xp
        })
        canvas.add(playobject)
    })



}

function newimage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
       blockimgobject=Img;
       blockimgobject.scaleToWidth(150);
       blockimgobject.scaleToHeight(140);
       blockimgobject.set({
            top:yp,left:xp
        })
        canvas.add(blockimgobject)
    })



}

window.addEventListener("keydown",baixokey)
function baixokey(e){
    keyPressed=e.keyCode;
    if(e.shiftKey && keyPressed == '80'){

        console.log("as telcas p e shift foram pressionadas juntas");
        widthblocking = widthblocking + 10;
        heigthblocking = heigthblocking + 10;
        document.getElementById("widthatual").innerHTML = widthblocking;
        document.getElementById("heigthatual").innerHTML = heigthblocking;
    }

    if(e.shiftKey && keyPressed == '77'){

        console.log("as telcas m e shift foram pressionadas juntas");
        widthblocking = widthblocking - 10;
        heigthblocking = heigthblocking - 10;
        document.getElementById("widthatual").innerHTML = widthblocking;
        document.getElementById("heigthatual").innerHTML = heigthblocking;
    }

    if(keyPressed == '38'){
        up()
 
    }

    if(keyPressed == '40'){
        down()
 
    }
    if(keyPressed == '37'){
        left()
 
    }
    if(keyPressed == '39'){
        right()
 
    }
    if(keyPressed == '76'){
        newimage("light_green.png")
 
    }
   
    if(keyPressed == '71'){
        newimage("ground.png")
 
    }

    if(keyPressed == '84'){
        newimage("trunk.jpg")
 
    }

    if(keyPressed == '82'){
        newimage("roof.jpg")
 
    }
    if(keyPressed == '85'){
        newimage("unique.png")
 
    }
    if(keyPressed == '87'){
        newimage("wall.jpg")
 
    }if(keyPressed == '89'){
        newimage("yellow_wall.png")
 
    }
    if(keyPressed == '67'){
        newimage("cloud.jpg")
 
    }
    if(keyPressed == '68'){
        newimage("dark_green.png")
 
    }
}
function right(){
    if(xp<=850){
       xp=xp+widthblocking;
       canvas.remove(playobject)
       updateplayer()
    }
}
    function left(){
        if(xp>0){
           xp=xp-widthblocking;
           canvas.remove(playobject)
           updateplayer()
        }
    }
    function down(){
        if(yp<=850){
           yp=yp+heigthblocking;
           canvas.remove(playobject)
           updateplayer()
        }
    }
    function up(){
        if(yp>0){
           yp=yp-heigthblocking;
           canvas.remove(playobject)
           updateplayer()
        }
    }