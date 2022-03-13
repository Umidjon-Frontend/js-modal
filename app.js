const openBtn = document.querySelector(".modal-btn"),
    modalOverlay = document.querySelector(".modal-overlay"),
    closeBtn = document.querySelector(".close");

openBtn.addEventListener('click', ()=>{
    modalOverlay.classList.toggle('open-modal');
});
closeBtn.addEventListener('click', ()=>{
    modalOverlay.classList.toggle('open-modal');
});