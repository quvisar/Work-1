console.log("Я работаю!");

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__links'); 
let items = document.querySelectorAll('.header__item'); 

burger.addEventListener("click",action);
menu.addEventListener("click",action);



function action(){
	menu.classList.toggle('_active'); 
}

console.log(items);