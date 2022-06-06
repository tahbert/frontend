function showLeftBar() {
    var left = document.getElementById("leftBar");
    var mainContent = document.getElementById("mainContent");
    var overlay = document.getElementById("overlay");
    if(left.style.display == "flex") {
        left.style.display = "none";
        overlay.style.display = "none";
        mainContent.style.left = "0px";
    } else {
        left.style.display = "flex";
        overlay.style.display = "block";
        mainContent.style.left = "0";
    }
}
var left = document.getElementById("leftBar");
var overlay = document.getElementById("overlay");
overlay.onclick = function(event) {
    if (event.target == overlay) {
        left.style.display = "none";
        overlay.style.display = "none";
    }
}