var script = document.createElement('script'); 
script.src =  "./posenet.js"; 

var video_list      = ["/video/b1.mp4",
            "/video/g1.mp4",
            "/video/g2.mp4"
            ];


var video_index  = 0;
var video_player  = null;

function setup() {
    createCanvas(320, 240);
    tStamp = 0;
    minPartConfidence = 0.3;
}
function onload(){
    console.log("body loaded"); //load 
    video_player = document.getElementById("video");

    video_player.setAttribute("src", video_list[video_index]);
    video_player.load();
    video_player.play();
    document.head.appendChild(script) //run posenet.js 
}

function onVideoEnded(){
    console.log("video has ended"); 
    setTimeout(function() {
    video_player.pause(); 
    if(video_index < video_list.length - 1){
        video_index++;
    }
    else{
        video_index = 0;
    }
    video_player.setAttribute("src", video_list[video_index]);
    video_player.play();
    }, 8000); //wait an extra 8 seconds after posenet finishes so that csv downloads 

}