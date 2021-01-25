const carousel = Object.create(null);

carousel.init = function () {
    var w = window.innerWidth;
    var video = document.getElementsByTagName("video")[0];
    video.height = 0.347 * w;
    video.width = 0.347 * w;
};

export default Object.freeze(carousel);