//your JS code here. If required.

let openModalBtn = document.getElementById("openModal");
let divModal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-modal");

openModalBtn.addEventListener("click",function(){
	divModal.style.display = "block"
})

closeBtn.addEventListener("click",function(){
	divModal.style.display = "none"
})

divModal.addEventListener("click",function(){
	divModal.style.display = "none"
})


