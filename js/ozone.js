const contentContainer = document.querySelector(".content-container");
const vid = document.querySelector(".vid"); 

const playbackSpeed = 50;
var frameNumber = 0;


vid.addEventListener('loadedmetadata', function() {
    contentContainer.style.height = Math.floor(vid.duration) * playbackSpeed + "px";
});

function scrollPlay(){  
    var frameNumber  = window.pageYOffset/playbackSpeed;
    vid.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);