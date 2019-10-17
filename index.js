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


//NEW
var bits = [];

function collect() {
    for (var i = 0; i < keypoints.length; i++) {
        var keypoint = keypoints[i];
        if (keypoint.score > minPartConfidence) {
            if (i == posenet.partIds['leftWrist']) {
                var LWristX = keypoint.position.x;
                var LWristY = keypoint.position.y;
                bits[0] = LWristX;
                bits[1] = LWristY;
            }
            if (i == posenet.partIds['rightWrist']) {
                var RWristX = keypoint.position.x;
                var RWristY = keypoint.position.y;
                bits[2] = RWristX;
                bits[3] = RWristY;
            }
            if (i == posenet.partIds['leftElbow']) {
                var LElbowX = keypoint.position.x;
                var LElbowY = keypoint.position.y;
                bits[4] = LElbowX;
                bits[5] = LElbowY;
            }
            if (i == posenet.partIds['rightElbow']) {
                var RElbowX = keypoint.position.x;
                var RElbowY = keypoint.position.y;
                bits[6] = RElbowX;
                bits[7] = RElbowY;
            }
            if (i == posenet.partIds['leftHip']) {
                var LHipX = keypoint.position.x;
                var LHipY = keypoint.position.y;
                bits[8] = LHipX;
                bits[9] = LHipY;
            }
            if (i == posenet.partIds['rightHip']) {
                var RHipX = keypoint.position.x;
                var RHipY = keypoint.position.y;
                bits[10] = RHipX;
                bits[11] = RHipY;
            }
            if (i == posenet.partIds['leftKnee']) {
                var LKneeX = keypoint.position.x;
                var LKneeY = keypoint.position.y;
                bits[12] = LKneeX;
                bits[13] = LKneeY;
            }
            if (i == posenet.partIds['rightKnee']) {
                var RKneeX = keypoint.position.x;
                var RKneeY = keypoint.position.y;
                bits[14] = RKneeX;
                bits[15] = RKneeY;
            }
            if (i == posenet.partIds['leftAnkle']) {
                var LAnkleX = keypoint.position.x;
                var LAnkleY = keypoint.position.y;
                bits[16] = LAnkleX;
                bits[17] = LAnkleY;
            }
            if (i == posenet.partIds['rightAnkle']) {
                var RAnkleX = keypoint.position.x;
                var RAnkleY = keypoint.position.y;
                bits[18] = RAnkleX;
                bits[19] = RAnkleY;
            }
            if (i == posenet.partIds['leftShoulder']) {
                var LShoulderX = keypoint.position.x;
                var LShoulderY = keypoint.position.y;
                bits[20] = LShoulderX;
                bits[21] = LShoulderY;
            }
            if (i == posenet.partIds['rightShoulder']) {
                var RShoulderX = keypoint.position.x;
                var RShoulderY = keypoint.position.y;
                bits[22] = RShoulderX;
                bits[23] = RShoulderY;
            }
        }
    }
}

function draw() {
    collect();
    background(0);
    fill(0, 150, 150);
    noStroke();
    for (i = 0; i <= bits.length; i += 2) {
        ellipse(bits[i], bits[i + 1], 10, 10);
    }

    strokeWeight(4);

    // Left side
    stroke(0, 0, 255);
    line(bits[0], bits[1], bits[4], bits[5]); // left wrist to left elbow
    line(bits[4], bits[5], bits[20], bits[21]); // left elbow to left shoulder
    line(bits[20], bits[21], bits[8], bits[9]); // left shoulder to left hip
    line(bits[8], bits[9], bits[12], bits[13]); // left hip to left knee
    line(bits[12], bits[13], bits[16], bits[17]); //left knee to left ankle

    // Right side
    stroke(255, 0, 0);
    line(bits[2], bits[3], bits[6], bits[7]); // right wrist to right elbow
    line(bits[6], bits[7], bits[22], bits[23]); // right elbow to right shoulder
    line(bits[22], bits[23], bits[10], bits[11]); // right shoulder to right hip
    line(bits[10], bits[11], bits[14], bits[15]); // right hip to right knee
    line(bits[14], bits[15], bits[18], bits[19]); // right knee to right ankle

    // Middle side
    stroke(128, 0, 128);
    line(bits[20], bits[21], bits[22], bits[23]); // left shoulder to right shoulder
    line(bits[8], bits[9], bits[10], bits[11]); // left hip to right hip

}