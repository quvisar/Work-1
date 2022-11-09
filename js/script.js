console.log("Я работаю!");

let btn = document.querySelector('.btn__video');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__links'); 
let items = document.querySelectorAll('.header__item'); 

burger.addEventListener("click",action);
menu.addEventListener("click",action);

if(window.innerWidth<=768)
{
	btn.innerHTML="Видео-ролик";
}
function action(){
	menu.classList.toggle('_active');  
}

console.log(items);