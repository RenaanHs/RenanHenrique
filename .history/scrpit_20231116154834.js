const modal = document.querySelector("dialog");
const btnmodal = document.querySelectorAll("a");

btnmodal[0].onclick = function(){
    modal.showModal();
}
btnmodal[1].onclick = function(){
    modal.close();
}

modal.addEventListener("click", event => {
    if(event.target === modal){
        modal.close();
    }
});