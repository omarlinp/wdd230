let o_last_modif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML= o_last_modif


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});