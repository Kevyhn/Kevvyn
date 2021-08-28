const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', ()=>{
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	}else{
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
})

document.getElementById('icon-menu').addEventListener("click", mostrar_menu);

function mostrar_menu(){
	document.getElementById("move-ctn").classList.toggle('move-ctn-all');
	document.getElementById("show-menu").classList.toggle('show-lateral');

}