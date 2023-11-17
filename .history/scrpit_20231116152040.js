// Função para abrir o modal
function openModal(casa) {
    // Obtém o modal
    var modal = document.getElementById("myModal");

    // Define o conteúdo do modal
    var modalContent = document.getElementById("modalContent");
    var casaContent;

    switch (casa) {
        case 'Grifinória':
            casaContent = "Lar dos bravos e cavalheiros...";
            break;
        case 'Lufa-Lufa':
            casaContent = "Os estudantes da Lufa-Lufa são dedicados...";
            break;
        case 'Corvinal':
            casaContent = "Os bruxos pertencentes à Corvinal se destacam...";
            break;
        case 'Sonserina':
            casaContent = "Sonserina é a Casa com a pior reputação...";
            break;
        default:
            casaContent = "Informações não disponíveis.";
    }

    modalContent.innerHTML = `<h2>${casa}</h2><p>${casaContent}</p>`;

    // Abre o modal
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Agora, adicionaremos o código para fechar o modal quando o usuário clicar fora dele
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
};
