// JQuery JavaScript API: $(selector).action()
$(document).ready(function() { // .ready(handler) checks if browser supports DOMContentLoaded event
    $('.menu').on('click', function() {     // .on() attach event handler function for 1+ events to the selected elements
        $(this).toggleClass('open');    // .toggleClass() add or remove 1+ classes from each element in the set of matched elements
        $('.nav').toggleClass('open');
    });

    $('.nav .nav-link').on('click', function() {
        $('.menu').removeClass('open');
        $('.nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {  // all elements with href attribute value containing '#'
        $('html, body').animate(    // performs a custom animation
            {scrollTop: $($(this).attr('href')).offset().top},
            {duration: 1618}
        );
    });

    $('#back-top').on('click', function() {
        $('html, body').animate(    // performs a custom animation
            {scrollTop: 0},
            {duration: 1618}
        );
    });

    // AOS animation libary
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});



// Javacript smtp form function
function sendEmail() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var templateParams = {
        email: email,
        message: message
    };

    emailjs.send('gmail_shawnlcwang', 'template_shawnlcwang', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert("Email sent successfully");
        }, function(error) {
           console.log('FAILED...', error);
           alert("Email sent ERROR");
       });


}
