import * as posenet from '@tensorflow-models/posenet';

// arr = ["tennis1","tennis2" ];
async function estimatePoseOnImage(imageElement) {

    const net = await posenet.load();

    const pose = await net.estimateSinglePose(imageElement, {
    flipHorizontal: false
    });
    return pose;
}


// for (i = 0; i < arr.length; i++){
//     const imageElement = document.getElementById(arr[i]);
//     const pose = estimatePoseOnImage(imageElement);

//     console.log(pose);
// }

const imageElement = document.getElementById('tennis1');

const pose = estimatePoseOnImage(imageElement);

console.log(pose);

