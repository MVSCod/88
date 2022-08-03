var canvas = new fabric.Canvas('myCanvas');

ballX = 0;
ballY = 0;

holeX = 400;
holeY = 800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img){
        holeObj = Img;
        holeObj.scaleToWidth(50);
        holeObj.scaleToHeight(50);  
        holeObj.set({
            top:holeY,
            left:holeX
        });
        canvas.add(holeObj);
    });
	newImage();
}

function newImage()
{
	fabric.image.fromURL("ball.png", function(Img){
        ballObj = Img;
        ballObj.scaleToWidth(50);
        ballObj.scaleToHeight(50);  
        ballObj.set({
            top:ballY,
            left:ballX
        });
        canvas.add(ballObj);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballX==holeX)&&(ballY==holeY)){
        canvas.remove(ballObj);

        document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!"
        document.getElementById("myCanvas").style.borderColor="red";
    }
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY >=0)
	{
		ballrY =ballY - blockImageHeight;
		console.log("Altura da imagem do bloco = " + block_Image_Height);
		console.log("Quando a tecla direcional Cima for pressionada, X =  " + ballX + " , Y = "+ballY);
		canvas.remove(ballObj);
		newImage();
	}
	}

	function down()
	{
        if(ballY <=450)
        {
            ballrY =ballY - blockImageHeight;
            console.log("Altura da imagem do bloco = " + block_Image_Height);
            console.log("Quando a tecla direcional Cima for pressionada, X =  " + ballX + " , Y = "+ballY);
            canvas.remove(ballObj);
            newImage();
        }
	}

	function left()
	{
		if(ballX >5)
		{
            ballrX =ballX - blockImageHeight;
            console.log("Altura da imagem do bloco = " + block_Image_Height);
            console.log("Quando a tecla direcional Cima for pressionada, X =  " + ballX + " , Y = "+ballY);
            canvas.remove(ballObj);
            newImage();
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
            ballrX =ballX - blockImageHeight;
            console.log("Altura da imagem do bloco = " + block_Image_Height);
            console.log("Quando a tecla direcional Cima for pressionada, X =  " + ballX + " , Y = "+ballY);
            canvas.remove(ballObj);
            newImage();
		}
	}
	
}