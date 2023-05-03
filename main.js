objetos = [];
status = "";

function preload()
{
    video = createVideo("video.mp4")
}

function iniciar()
{
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "status dedectando objetos"
}

function modelLoaded()
{
    console.log("modelLoaded");
    status = "true";
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error, results)
{
        if(error)
        {
            console.error(error);
        }
        else
        {
            console.log(results);
            objetos = results;
        }
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();

}

function draw()
{
    image(video,0,0,480,380);
    if(staus != "")
    {
        objectDetector.detect(video, gotResult);
        for(i= 0; i<objetos.length; i++ ){
        document.getElementById("status").innerHTML = "objetos detectados";
        document.getElementById("objetos").innerHTML = "Quantidade de objetos detectados: " + objetos.length;
        fill("red");
        porcentagem = floor(objetos[i].confidence * 100);
        text(objetos[i].label + " " + porcentagem + "%" , objetos[i].x + 15, objetos[i].y +15);
        } 
    }
}

