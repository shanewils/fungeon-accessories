window.onscroll = function() {stickNav()};
          
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

const stickNav = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}