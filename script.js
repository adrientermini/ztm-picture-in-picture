const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select a media stream, pass to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play();
        };
    } catch(error){
        console.error(error);
    }
}

button.addEventListener('click', async () => {
    try {
        //Enable button
        button.disable = true;
        //Start PIP
        await videoElement.requestPictureInPicture();
        //Disable the Button
        button.disable = false;
    } catch(error){
        console.error(error);
    }
});

//On Load
selectMediaStream();