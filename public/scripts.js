const modalOverlay = document.querySelector('.modal-overlay')
const modalContent = document.querySelector('.modal-content')
const maxModal = document.querySelector('.maximize-modal')
const closeModal = document.querySelector('.close-modal')
const cards = document.querySelectorAll('.card')

// Adiciona ou remove a classe 'active' para abrir e fechar o modal
// Quando clicar em qualquer um dos 6 cards, abre o modal
for (let card of cards) {
    // Clicando na imagem do card, abre o modal
    card.querySelector('.card_image-container').addEventListener('click', function() {
        const videoId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`
        document.getElementById('iframe-content').src = `https://rocketseat.com.br/${videoId}`
    })
    // Clicando na info do card, abre outra pagina
    card.querySelector('.card_info').addEventListener('click', function() {
        const videoId = card.getAttribute('id')
        if (videoId == "starter" || videoId == "launchbase" || videoId == "gostack") {
            window.location.href = `/course/${videoId}`
        } else {
            window.location.href = `/video?id=${videoId}`
        }
    })
}

// Fecha o modal quando clica no x
document.querySelector('.close-modal').addEventListener('click', function() {
    modalContent.querySelector('iframe').src = ''
    modalOverlay.classList.remove('active')
    modalContent.classList.remove('maximize')
    maxModal.classList.remove('maximize')
    closeModal.classList.remove('maximize')
})

// Maximizar e minimizar
document.querySelector('.maximize-modal').addEventListener('click', function() {
    if (modalContent.classList.contains('maximize')) {
        modalContent.classList.remove('maximize')
        maxModal.classList.remove('maximize')
        closeModal.classList.remove('maximize')
    } else {
        modalContent.classList.add('maximize')
        maxModal.classList.add('maximize')
        closeModal.classList.add('maximize')
    }
})