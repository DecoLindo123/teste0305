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
        else(results)
        {
            console.log(results);
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
    
}

