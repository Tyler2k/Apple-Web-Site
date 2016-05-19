$(document).ready(function(){
    var width = 1895;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({
                'margin-left': '-=' + width
            }, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    startSlider();
    
});
