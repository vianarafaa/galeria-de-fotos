$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown()
    })

    $('#cancel-button').click(function () {
        $('form').slideUp()
    })

    $('form').on('submit', (e) => {
        e.preventDefault()

        const enderecoDaNovaImagem = $('#input-new-image').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(500)

        $('#input-new-image').val('')
    })
})
