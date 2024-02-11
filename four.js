const header = document.querySelection("header");

window.addEventListener ("scroll", function(){
    header.classList.taggle ("sticky", window.scrollY > 0);

});
  let navbar = document.querySelector('.navbar');
menubar.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}