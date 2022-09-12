var iconMenu = document.getElementById("icon-menu");
var sideNavWrapper = document.getElementById("side-nav-wrapper");
var sideNav = sideNavWrapper.querySelectorAll(".side-nav");
var main = document.getElementById("main");
var frame = document.getElementById("frame");
var mediaQueries = window.matchMedia('(max-width: 768px)');

// header-nav
var headerNav = document.getElementById("header-nav");
var headerNavItem = headerNav.querySelectorAll(".header-nav-item");
var current = headerNav.getElementsByClassName("active");

// initiate category
var classes = current[0].className;
var cat = classes.split(' ')[0];

headerNavItem.forEach((i) => {
    i.onclick = () => {
        current[0].className = current[0].className.replace(" active", "");
        i.classList.add("active");
        classes = i.className;
        cat = classes.split(' ')[0];

        // link header-nav to side-nav
        sideNav.forEach((i) => {
            if (i.id != cat && i.classList.contains("active")) {
                i.classList.remove("active");
            } else if (i.id == cat && !i.classList.contains("active")) {
                i.classList.add("active");
            } 
        })
    }
})

// active side-nav-item and iframe scripts
sideNav.forEach((i) => {
    var priUnit = i.querySelectorAll(".pri-unit");
    var panel = i.querySelectorAll(".panel");
    var current = i.getElementsByClassName("active");
    var allArrows = i.getElementsByClassName("arrow");

    priUnit.forEach((i) => {
        i.onclick = () => {
            current[0].className = current[0].className.replace(" active", "");
            i.classList.add("active");

            var url = i.innerText;
            frame.src = `${cat}/${url}.html`;
        }
    })

    panel.forEach((i) => {
        var secUnit = i.querySelectorAll(".sec-unit");
        var current = i.getElementsByClassName("sec-active");
        secUnit.forEach((i) => {
            i.onclick = () => {
                if(current.length > 0) {
                    current[0].className = current[0].className.replace(" sec-active", "");
                }
                i.classList.add("sec-active");

                var url = i.innerText;
                frame.src = `${cat}/${url}.html`;
            }
        })
    })

    // accordion scripts
    for(var i=0; i<priUnit.length; i++) {
        priUnit[i].addEventListener("click", function() {
            var current = this.nextElementSibling;
            var currentArrow = this.getElementsByClassName("arrow");

            if(current.style.display == "flex" && current.classList.contains("panel")) {
                current.style.display = "none";
                currentArrow[0].className = currentArrow[0].className.replace("fa-angle-up", "fa-angle-down")
            } else {
                for (var i=0; i<panel.length; i++) {
                    panel[i].style.display = "none";
                }
                for (var i=0; i<allArrows.length; i++) {
                    allArrows[i].className = allArrows[i].className.replace("fa-angle-up", "fa-angle-down")
                }
                current.style.display = "flex";
                currentArrow[0].className = currentArrow[0].className.replace("fa-angle-down", "fa-angle-up")
            }
        })
    }
})

// show and hide side-nav
iconMenu.onclick = () => {
    sideNavWrapper.classList.toggle("active");
    main.classList.toggle("active");
}

mediaQueries.onchange = (e) => {
    if (e.matches) {
        sideNavWrapper.classList.add("active");
        main.classList.add("active");
    } else {
        sideNavWrapper.classList.remove("active");
        main.classList.remove("active");
    }
}

window.onclick = (e) => {
    if(e.target == sideNavWrapper) {
        sideNavWrapper.classList.add("active");
    }
}