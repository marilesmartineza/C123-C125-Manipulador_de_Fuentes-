difference=0;
rightWristX=0;
leftWristX=0;

    function setup(){
        video=createCapture(VIDEO);
        video.size(300,300);
        video.position(800,150);
        canvas=createCanvas(500,300);
        canvas.position(100,150);
        poseNet=ml5.poseNet(video,modelLoaded);
        poseNet.on('pose',gotPoses);
            //(x,y) X=ancho, Y=altura//
    }

    function modelLoaded(){
        console.log("¡Modelo Cargado! :D");
    }

    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);

            console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);    
        }
    }

    function draw(){
        background("rgb(92, 191, 198)");
        textSize(difference);
        document.getElementById("square_side").innerHTML= "El tamaño de fuente es: " + difference + "px";
        fill("rgb(20, 123, 110)");
        stroke("rgb(20, 123, 110)");
        text("Que difícil es esto de programar ಥ⁠‿⁠ಥ", 10, 10, difference);
    }  


    function prueba() {
        window.alert("Hola criatura (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧ Esto salió de puro milagro (⁠・⁠-⁠・⁠;⁠)");
    }
