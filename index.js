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
var minPartConfidence = 0.3;
var capture;
var keypoints = [];

function draw() {
    capture = createCapture({
        video: {
          width: videoSize,
          height: videoSize
        }
    });
    capture.size(videoSize, videoSize);
    capture.hide();

    background(255);
    image(capture, 0, 0, 800, 600);

    noStroke();
    // draw keypoints
    for (var i = 0; i < keypoints.length; i++) {
        var keypoint = keypoints[i];
        // filter out keypoints that have a low confidence
        if (keypoint.score > minPartConfidence) {
            // for wrists, make the part red
            if (i == posenet.partIds['leftWrist'] || i == posenet.partIds['rightWrist'])
                fill(255, 0, 0);
            // all other parts are yellow
            else
                fill(255, 255, 0);

            ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        }
    }

    // get skeleton, filtering out parts wtihout
    // a high enough confidence level
    // if (keypoints.length > 0) {
    //     stroke(255, 255, 0);
    //     var skeleton = posenet.getAdjacentKeyPoints(keypoints, minPartConfidence);
    //     for (var i = 0; i < skeleton.length; i++) {
    //         // draw each line in the skeleton
    //         var segment = skeleton[i];
    //         line(
    //             segment[0].position.x, segment[0].position.y,
    //             segment[1].position.x, segment[1].position.y
    //         );
    //     }
    // }
}