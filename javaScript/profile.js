document.addEventListener("DOMContentLoaded", function () {
    var owl = document.querySelector('.owl-carousel');
    
    new OwlCarousel(owl, {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

// Owl Carousel Constructor
function OwlCarousel(element, options) {
    this.element = element;
    this.options = options;
    this.init();
}

// Owl Carousel Initialization
OwlCarousel.prototype.init = function () {
    var items = this.options.items || 1;
    var responsive = this.options.responsive || {};
    var responsiveKeys = Object.keys(responsive);

    this.element.classList.add("owl-carousel");
    this.element.style.marginRight = this.options.margin + "px";

    for (var i = 0; i < responsiveKeys.length; i++) {
        var breakpoint = responsiveKeys[i];
        var screenWidth = window.innerWidth;

        if (screenWidth <= breakpoint) {
            items = responsive[breakpoint].items;
            break;
        }
    }

    var slides = this.element.children;
    var slideWidth = 100 / items;

    for (var j = 0; j < slides.length; j++) {
        slides[j].classList.add("item");
        slides[j].style.width = slideWidth + "%";
    }
};