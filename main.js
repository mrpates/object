img="";
status="";

function preload()
{
  img=loadImage('dog_cat.jpg')  
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML="status: detecting object"; 
}

function draw()
{
    image(img,0,0,640,420);
    fill("#008080");
    text("motu",45,75);
    noFill();
    stroke("#9F2B68");
    rect(30,60,450,350);
    fill("#8000FF");
    text("Soup",320,120);
    noFill();
    stroke("#900C3F");
    circle(500,20,200);

}

function modalLoaded()
{
console.log("model loaded");
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
  if (error) 
  {
    console.log(error);
  }
  console.log(results);
}




