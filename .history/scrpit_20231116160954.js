// Adicione esta função ao final do seu script.js
function openModalWithText(casa, texto) {
    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalText = document.getElementById("modalText");

    modalTitle.textContent = casa;
    modalText.textContent = texto;

    modal.style.display = "block";
}
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
