jQuery(window).on("load", function () {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');
});


jQuery(document).ready(function () {

    $(function () {
        for (var nk = window.location,
            o = $(".menu a, .settings-menu a").filter(function () {
                return this.href == nk;
            })
                .addClass("active")
                .parent()
                .addClass("active"); ;) {
            // console.log(o)
            if (!o.is("li")) break;
            o = o.parent()
                .addClass("show")
                .parent()
                .addClass("active");
        }

    });

    // Start back to top button
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
     // Show button after 100px
     var showAfter = 150;
     if ($(this).scrollTop() > showAfter ) {
      $('.back-to-top').fadeIn();
     } else {
      $('.back-to-top').fadeOut();
     }
    });

    //Click event to scroll to top
    $('.back-to-top').click(function(){
     $('html, body').animate({scrollTop : 0},200);
     return false;
    });
    // End back to top button


});


(function () {
    let onpageLoad = localStorage.getItem("theme") || "dark-theme";
    let element = document.body;
    element.classList.add(onpageLoad);
    // document.getElementById("theme").textContent =
    //     localStorage.getItem("theme") || "light";
})();

function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark-theme");

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-theme") {
        localStorage.setItem("theme", "");
    } else {
        localStorage.setItem("theme", "dark-theme");
    }
}










// //ripple effect on button
// Waves.init();
// Waves.attach('.wave-effect');
// Waves.attach('.btn');
// Waves.attach('button');
