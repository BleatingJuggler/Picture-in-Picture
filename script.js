const videoElement = document.querySelector("#video");
const button = document.querySelector("#button  ");

// Prompt to select media stream, pass to video element and then play

async function selectMediaStream(){
    // console.log(navigator);
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        console.log("whoops!", error);
    }
}


button.addEventListener("click", async () => {
    // Disable button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disables = false;
})


// On Load
selectMediaStream();

