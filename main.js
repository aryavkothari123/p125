noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(560 ,400);
    video.position(20,150);

    canvas = createCanvas(800 ,500);
    canvas.position(600 ,100);

    posenet = ml5.poseNet(video ,modelLoaded);
    posenet.on('pose' , gotPoses);
}

function draw()
{
    background("#0ee647");
    document.getElementById("text_side").innerHTML = "Size of the text will be = " + difference+"px";
    textSize(difference);
    fill("#e80027");
    text("Aryav", 200, 200);
}

function modelLoaded()
{
    console.log('Posenet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX" + noseX + "noseY" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);   

        console.log("leftWristX = " + leftWristX + "rightWristX= " + rightWristX + "difference = " + difference);
    }
}