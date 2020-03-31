var keypoints;
var tStamp = 0;
var minPartConfidence;
var count = 0;
var csvContent;
var encodedUri;
var link;
var iter;



video.addEventListener('loadeddata', function() {
    this.currentTime = tStamp; //current time is set to tStamp which is at 0 when loadeddata is started 
    console.log("Loading Completed!!")
    var duration = video.duration; //full time length of video
    console.log("Video Duration: ", duration)
    iter = 0;
    var interval = setInterval(function() {
        video.currentTime = iter;
        generateThumbnail(iter);
        iter = iter + 1;
        if (iter > duration) clearInterval(interval); //tStamp is the duration of the video
    }, 50);

});
/**
 * Creates stick figure 
 * @param {integer} tStamp 
 */
function generateThumbnail(tStamp) {

    var context = theCanvas.getContext('2d');

    context.drawImage(video, 0, 0, 320, 240);

    var dataURL = theCanvas.toDataURL();

    var img = document.createElement('img');

    img.setAttribute('src', dataURL);

    document.getElementById('theCanvas').appendChild(img); //Places the new generated image right next to 'thecanvas'

    posenet.load().then(function(net) { //Posenet
        const pose = net.estimateSinglePose(img, {
            flipHorizontal: false
        });
        return pose;
    }).then(function(pose) {

        console.log(pose);
        keypoints = pose.keypoints; 

        collect();
        var context = defaultCanvas0.getContext('2d');
        context.clearRect(0, 0, 320, 240);
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

        count++;
        console.log("Number of Poses: ", count);

        csvContent = "data:text/csv;charset=utf-8,";

        points.forEach(function(pArray) {
            p = pArray.join(",");
            csvContent += p + "\r\n";
        });

        var encodedUri = encodeURI(csvContent);
        link = document.createElement("a");
        link.setAttribute("href", encodedUri);

        //Let's download attach the real name
        // var vids = document.getElementsByTagName("video")[0].src;
        // var name;
        // for( var i = 0; i < vids.length; i++ ){ 
        //     name += vids.item(i).src;
        // }
        var posenet_name = "posenet_values.csv";
        link.setAttribute("download", posenet_name);
        document.body.appendChild(link); 

    })
}

var bits = [];
var points = [];

function collect() {
    for (var i = 0; i < keypoints.length; i++) {
        var keypoint = keypoints[i];
        if (keypoint.score > minPartConfidence) {
            if (i == posenet.partIds['leftWrist']) {
                var LWristX = keypoint.position.x;
                var LWristY = keypoint.position.y;
                bits[0] = LWristX;
                bits[1] = LWristY;
                points.push([count, LWristX, LWristY]);
            }
            if (i == posenet.partIds['rightWrist']) {
                var RWristX = keypoint.position.x;
                var RWristY = keypoint.position.y;
                bits[2] = RWristX;
                bits[3] = RWristY;
                points.push([count, RWristX, RWristY]);
            }
            if (i == posenet.partIds['leftElbow']) {
                var LElbowX = keypoint.position.x;
                var LElbowY = keypoint.position.y;
                bits[4] = LElbowX;
                bits[5] = LElbowY;
                points.push([count, LElbowX, LElbowY]);
            }
            if (i == posenet.partIds['rightElbow']) {
                var RElbowX = keypoint.position.x;
                var RElbowY = keypoint.position.y;
                bits[6] = RElbowX;
                bits[7] = RElbowY;
                points.push([count, RElbowX, RElbowY]);
            }
            if (i == posenet.partIds['leftHip']) {
                var LHipX = keypoint.position.x;
                var LHipY = keypoint.position.y;
                bits[8] = LHipX;
                bits[9] = LHipY;
                points.push([count, LHipX, LHipY]);
            }
            if (i == posenet.partIds['rightHip']) {
                var RHipX = keypoint.position.x;
                var RHipY = keypoint.position.y;
                bits[10] = RHipX;
                bits[11] = RHipY;
                points.push([count, RHipX, RHipY]);
            }
            if (i == posenet.partIds['leftKnee']) {
                var LKneeX = keypoint.position.x;
                var LKneeY = keypoint.position.y;
                bits[12] = LKneeX;
                bits[13] = LKneeY;
                points.push([count, LKneeX, LKneeY]);
            }
            if (i == posenet.partIds['rightKnee']) {
                var RKneeX = keypoint.position.x;
                var RKneeY = keypoint.position.y;
                bits[14] = RKneeX;
                bits[15] = RKneeY;
                points.push([count, RKneeX, RKneeY]);
            }
            if (i == posenet.partIds['leftAnkle']) {
                var LAnkleX = keypoint.position.x;
                var LAnkleY = keypoint.position.y;
                bits[16] = LAnkleX;
                bits[17] = LAnkleY;
                points.push([count, LAnkleX, LAnkleY]);
            }
            if (i == posenet.partIds['rightAnkle']) {
                var RAnkleX = keypoint.position.x;
                var RAnkleY = keypoint.position.y;
                bits[18] = RAnkleX;
                bits[19] = RAnkleY;
                points.push([count, RAnkleX, RAnkleY]);
            }
            if (i == posenet.partIds['leftShoulder']) {
                var LShoulderX = keypoint.position.x;
                var LShoulderY = keypoint.position.y;
                bits[20] = LShoulderX;
                bits[21] = LShoulderY;
                points.push([count, LShoulderX, LShoulderY]);
            }
            if (i == posenet.partIds['rightShoulder']) {
                var RShoulderX = keypoint.position.x;
                var RShoulderY = keypoint.position.y;
                bits[22] = RShoulderX;
                bits[23] = RShoulderY;
                points.push([count, RShoulderX, RShoulderY]);
            }
        }
    }
}

/**
    A seeked event is fired when a seek operation completed, the current playback position has changed
    and the boolean seeking attribute is changed to false 
**/
/**
 * Video has been seeked, so now current frames will show as we expect. 
 */
video.addEventListener('seeked', function() {

    generateThumbnail(iter);
    //when frame is captured, add 0.1 seconds 
    tStamp += 0.1;
    //If we haven't reached the end 

    /*if we have 0.1 added to this.duration, 
    we get an extra frame appened to CSV as compared to when we dont */
    if (tStamp <= this.duration) {
        //will trigger another seeked event 
        this.currentTime = tStamp;
    } else {
        setTimeout(function() {
            document.getElementById("progress").innerHTML += "<h4>Finished Computation - Downloading Now</h4>";
            link.click();
        }, (3 * 1000));

    }



});

window.onload = setup;