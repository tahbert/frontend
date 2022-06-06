// Accordion scripts
var u = document.getElementsByClassName("priUnits");
var p = document.getElementsByClassName("panel");
// diplay: none; all panels when clicking to every primary unit
for(var i=0; i<u.length; i++) {
    u[i].addEventListener("click", function() {
        var current = this.nextElementSibling;
        if(current.style.display == "flex" && current.classList.contains("panel")) {
            current.style.display = "none";
        } else {
            for (var i=0; i<p.length; i++) {
                p[i].style.display = "none";
            }
            current.style.display = "flex";
        }
    });
}