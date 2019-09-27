window.addEventListener('scroll', function () {

    var video = document.getElementById("video");
    var posvideo = video.offsetTop;
    var alturavideo = video.offsetHeight;
    var currentScroll = window.pageYOffset;
    var windowh = window.innerHeight;

    if (posvideo + alturavideo < currentScroll + windowh && posvideo > currentScroll) {
        video.classList.add("play");
    } else {
        video.classList.remove("play");
    }
}
    /* console.log("posvideo", posvideo);
        console.log("currentScroll", currentScroll);
        console.log("windowh", windowh);*/
);