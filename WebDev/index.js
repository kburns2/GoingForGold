// import * as posenet from '@tensorflow-models/posenet';

// // arr = ["tennis1","tennis2" ];
// async function estimatePoseOnImage(imageElement) {

//     const net = await posenet.load();

//     const pose = await net.estimateSinglePose(imageElement, {
//         flipHorizontal: false
//     });
//     return pose;
// }

// // for (i = 0; i < arr.length; i++){
// //     const imageElement = document.getElementById(arr[i]);
// //     const pose = estimatePoseOnImage(imageElement);

// //     console.log(pose);
// // }

// const imageElement = document.getElementById('tennis1');

// const pose = estimatePoseOnImage(imageElement);

// console.log(pose);

var videoSize = 800;
var capture;
var keypoints = [];

function setup() {
    createCanvas(800, 600);
    background(10, 0, 0);
    i = 0;
    minPartConfidence = 0.3;

}
video.addEventListener('loadeddata', function() {
    this.currentTime = i;
    console.log(i);
});

video.addEventListener('loadeddata', function() {
    var duration = video.duration;
    var i = 0;
    var interval = setInterval(function() {
        video.currentTime = i;
        generateThumbnail(i);
        i = i + 1;
        if (i > duration) clearInterval(interval);
    }, 200);
});



function generateThumbnail(i) {

    var context = thecanvas.getContext('2d');
    context.drawImage(video, 0, 0, 800, 600);
    var dataURL = thecanvas.toDataURL();
    var img = document.createElement('img');
    img.setAttribute('src', dataURL);
    document.getElementById('thecanvas').appendChild(img);
    posenet.load().then(function(net) {
        const pose = net.estimateSinglePose(img, {
            flipHorizontal: true
        });
        return pose;
    }).then(function(pose) {
        console.log(pose);
        keypoints = pose.keypoints;
        draw();
    })
}

function draw() {
    background(0); //sets a black background
    for (var i = 0; i < keypoints.length; i++) { //array length 
        var keypoint = keypoints[i];
        if (keypoint.score > minPartConfidence) {
            if (i == posenet.partIds['leftWrist'] || i == posenet.partIds['rightWrist']) {
                //P5 only starts after you call setup()
                //reason why we wrote window.onload = setup()
                fill(255, 0, 0);
                rectMode(CENTER);
                noStroke();
                rect(keypoint.position.x, keypoint.position.y, 10, 10);
            } else {
                //maybe instead of dots draw lines?
                // fill(255, 255, 0);
                fill(0, 255, 0);
                noStroke();
                ellipse(keypoint.position.x, keypoint.position.y, 10, 10); //draws the dot  
            }
            if (i == posenet.partIds['leftWrist']) {
                var pointX = keypoint.position.x;
                var pointY = keypoint.position.y;
            }
            if (i == posenet.partIds['leftElbow']) {
                var ptX = keypoint.position.x;
                var ptY = keypoint.position.y;
            }
            stroke(255);
            strokeWeight(4);
            line(pointX, pointY, ptX, ptY);
        }
    }
}

video.addEventListener('seeked', function() {
    generateThumbnail(i);
    i += 0.5;
    if (i <= this.duration) {
        this.currentTime = i;
    } else {
        // Do something idk 
    }
});
//onload call setup
window.onload = setup;

}