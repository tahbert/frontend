var sectionHead = document.querySelectorAll(".section-head");
sectionHead.forEach((i) => {
    const arrow = i.querySelector(".arrow");
    const table = i.nextElementSibling;
    arrow.onclick = () => {
        table.classList.toggle("hidden");
        if(arrow.classList.contains("fa-angle-right")) {
            arrow.classList.replace("fa-angle-right", "fa-angle-down");
        } else {
            arrow.classList.replace("fa-angle-down", "fa-angle-right");
        }
    }
});

// insert default text for h3
var h3 = document.querySelectorAll("h3");
h3.forEach((i) => {
    i.insertAdjacentText("afterbegin", "|| ");
});

// insert default text for h4
var h4 = document.querySelectorAll("h4");
h4.forEach((i) => {
    i.insertAdjacentText("afterbegin", "// ");
});

// insert default text result
var result = document.querySelectorAll(".text-result");
result.forEach((i) => {
    i.insertAdjacentText("afterbegin", "// result: ");
});

// style the <pre> tag
document.querySelectorAll("pre").forEach((i) => {
    let text = i.innerHTML;
    let pattern = text.match(/\s+/);
    i.innerHTML = text.replace(new RegExp(pattern, "g"),'')        
})

// popup_code
document.querySelectorAll(".code_btn").forEach((i) => {
    let codePopup = i.nextElementSibling;
    let close = codePopup.querySelector('.close');
    i.onclick = () => {
        codePopup.classList.toggle("active");
    }
    close.onclick = () => {
        codePopup.classList.remove("active");
    }
    document.addEventListener('click', (e) => {
        if(e.target == codePopup) {
            codePopup.classList.remove("active");
        }
    })
})
