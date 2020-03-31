/**
 * We want to call posenet.js so we create an element and attach it as its source 
 */
var script = document.createElement('script');
script.src = "./posenet.js";

// All videos will be called from the video folder 
var video_list = ["/video/g20.mp4"
    // "/video/b1.mp4",
    //                     // "/video/g1.mp4",
    //                     "/video/g2.mp4"
];

var video_index = 0;
var video_player = null;


/**
 * For P5.min, you need to instantiate the canvas size within setup()
 */
function setup() {
    createCanvas(320, 240);
    tStamp = 0;
    minPartConfidence = 0.3;
}

function onload() {
    console.log("[Cont.js] body loaded"); //load 

    video_player = document.getElementById("video");

    //We want to iterate through the list of videos 
    video_player.setAttribute("src", video_list[video_index]);
    video_player.load();
    video_player.play();
    document.head.appendChild(script) //run posenet.js on this specific video while it runs 
}

/**
 * This functions pauses the video once it has ended which allows posenet.js to download the csv 
 */
function onVideoEnded() {
    console.log("Video has ended, posenet csv should be downloading");
    setTimeout(function() {
        video_player.pause();

        if (video_index < video_list.length - 1) {
            video_index++; //go to next video 
        } else {
            return;
        }
        video_player.setAttribute("src", video_list[video_index]); //change to next video  
        video_player.play(); //play again 
    }, 8000); //wait an extra 8 seconds after posenet finishes so that csv downloads 

}