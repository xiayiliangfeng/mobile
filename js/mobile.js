window.onload = function () {
    var headerButton = document.getElementsByClassName("menu-button")[0];
    var headerMenu = document.getElementsByClassName("header-menu-row")[0];
    var closeBtn = document.getElementsByClassName("closeBtn")[0];
    var mobileCall=document.getElementsByClassName("mobile-call")[0];
    var height=document.getElementsByClassName("height")[0];
    headerMenu.style.display = "none";
    headerButton.onclick = function () {
        if (headerMenu.style.display == "none") {
            headerMenu.style.display = "block";
        } else {
            headerMenu.style.display = "none";
        }
    }
    closeBtn.onclick = function () {
        headerMenu.style.display = "none";
    }
}