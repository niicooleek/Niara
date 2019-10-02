// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playersVars: { 'autoplay': 5 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event){
       //event.target.playVideo();
    }
    function onPlayerStateChange(){
       
    }

var isPlay = false;
window.addEventListener('scroll', function () {

    var video = document.getElementById("video");
    var posvideo = video.offsetTop;
    var alturavideo = video.offsetHeight;
    var currentScroll = window.pageYOffset;
    var windowh = window.innerHeight;

    if (posvideo + alturavideo < currentScroll + windowh && posvideo > currentScroll) {
        if (!isPlay) {
            player.playVideo();
            isPlay = true;
        }
    } else {
        if (isPlay) {
            player.pauseVideo;
            isPlay = false;
        }
    }
}
    /* console.log("posvideo", posvideo);
        console.log("currentScroll", currentScroll);
        console.log("windowh", windowh);*/
);