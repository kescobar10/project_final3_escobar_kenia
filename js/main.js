// JavaScript: Back to Top button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 160) {
        document.getElementById('top-button').style.display = 'block';
    } else {
        document.getElementById('top-button').style.display = 'none';
    }
}

function topFunction () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// jQuery: Smooth Scroll
$(document).ready(function () {
    var scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});

// jQuery: Changing element content in the "December Promotion" container to show a coupon code.
$(document).ready(function () {
    $('#btn-coupon').click(function () {
        $('#click-coupon').html('<h4>XMASBOGO</h4>');
    });
});

// Plugin 1: Backstretch
// Will make the header image behind the h2 and h3 responsive and fill the container
$('.header-image').backstretch('img/bread-hero.jpg');


// Plugin 2: Fresco
// Gallery to display under the Cake Gallery section
// Found in index.html

// Plugin 3: FitText
// It will make the h2 and h3 responsive
$('.responsive_headline').fitText();
