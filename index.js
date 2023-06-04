    
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if ((document.body.scrollTop > 680 && document.body.scrollTop < 1680) || (document.documentElement.scrollTop > 680 && document.documentElement.scrollTop < 1680)) {
//     document.getElementById("nav-menu").style.height = "70px";
//     // document.getElementById("resume-button-1").style.backgroundColor = "#699bed"
//     // document.getElementById("nav-menu").style.background = "rgba(255, 255, 255, 0.719)";
//     // let a = document.getElementsByTagName('a')
//     // for (let x in a){
//     //   a[x].style.color = 'black'
//     // }
    
//     // document.getElementById("logo").style.fontSize = "25px";
//   }
//   else if ((document.body.scrollTop > 1680 && document.body.scrollTop < 2580) || (document.documentElement.scrollTop > 1680 && document.documentElement.scrollTop < 2580)){
//     document.getElementById("nav-menu").style.height = "70px";
//     // document.getElementById("resume-button-1").style.backgroundColor = "#2f7b90"
//     // document.getElementById("resume-button-1").style.hover.backgroundColor = "#222a36"
//   }
//   else if ((document.body.scrollTop > 2580 && document.body.scrollTop < 3400) || (document.documentElement.scrollTop > 2580 && document.documentElement.scrollTop < 3400)){
//     document.getElementById("nav-menu").style.height = "70px";
//     // document.getElementById("resume-button-1").style.backgroundColor = "#676cdb"
//   }
//   else if (document.body.scrollTop > 3400 || document.documentElement.scrollTop> 3400){
//     document.getElementById("nav-menu").style.height = "70px";
//     // document.getElementById("resume-button-1").style.backgroundColor = "#a891b7"
//   }
//   else {
//     document.getElementById("nav-menu").style.height = "85px";
//     // document.getElementById("resume-button-1").style.backgroundColor = "#a891b7"
//     // document.getElementById("nav-menu").style.backgroundColor = "#222a36";
//     // let a = document.getElementsByTagName('a')
//     // for (let x in a){
//     //   a[x].style.color = '#cae1db'
//     // }
//     // document.getElementById("logo").style.fontSize = "35px";
//   }
// }

let nav_menu = document.getElementById("nav-menu")
let togglePage = document.getElementById("toggle_navPageFull");
let togglePageHalf = document.getElementById("toggle_navPageHalf");
let clBtn = document.getElementById("close");
let burger = document.getElementById("burger");
burger.addEventListener("click", ()=>{
    open();
})
function open(){
    togglePage.style.left = '0%';
    togglePage.style.height = '100%'
    togglePage.style.transition = '.6s ease-in-out';
    burger.style.display = 'none';
    // nav_menu.style.display = 'none';
}
function clo(){  
    togglePage.style.left = '-100%';
    burger.style.display = 'block';
    // nav_menu.style.display = 'block';
}
clBtn.addEventListener("click", ()=>{
    clo();
})

function dis (){
    document.getElementById("res_btn").disabled = true
}


// Responsive Social Links
let responsive_social = document.getElementById("responsive_social")

let arrow_right_id = document.getElementById("arrow_right_id");
arrow_right_id.style.display = "none";

let link_icons_container = document.getElementById("link_icons_container")
link_icons_container.style.display = 'none';

let arrow_left_id = document.getElementById("arrow_left_id");
arrow_left_id.addEventListener("click", ()=>{
    responsive_social.style.left = "-7%";
    arrow_left_id.style.transition = '.6s ease-in-out';
    arrow_right_id.style.display = "block";
    arrow_left_id.style.display = "none";
    link_icons_container.style.display = 'block';
    style(arrow_right_id)
})
arrow_right_id.addEventListener("click", ()=>{
    responsive_social.style.left = "5%";
    arrow_left_id.style.display = "block";
    arrow_right_id.style.display = "none";
    style(arrow_left_id);
    link_icons_container.style.display = "none";
})

function style(param){
    param.style.display = "flex";
    param.style.alignItems = "center";
    param.style.justifyContent = "center";
}