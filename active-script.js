// Active scripts
var unit = document.getElementsByClassName("units");
for (var i = 0; i < unit.length; i++) {
    unit[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    })
}