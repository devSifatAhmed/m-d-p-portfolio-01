$("address,a, img, h1, h2, h3, h4, h5, h6, p, span, label, li, i, button, input").hover(
    function () {
        $(".cursor").addClass("active");
    },
    function () {
        $(".cursor").removeClass("active")
    }
);
// cursor event start
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
// cursor event end