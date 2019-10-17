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
    for (var i = 0; i < keypoints.length; i++) {
        var keypoint = keypoints[i];
        if (keypoint.score > minPartConfidence) {
            if (i == posenet.partIds['leftWrist'] || i == posenet.partIds['rightWrist'])
            //P5 only starts after you call setup()
            //reason why we wrote window.onload = setup()
                fill(255, 0, 0);
            else
            //maybe instead of dots draw lines?
            // fill(255, 255, 0);

                ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        }
        //line(keypoint.postion.x[1], keypoint.position.y[1], keypoint.position.x[2], keypoint.position.y[2])
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