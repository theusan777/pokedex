const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        const idPokemonSelecionado = pokemon.attributes.id.value;
        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado;
        
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir);
        cartaoPokemonParaAbrir.classList.add('aberto');

        const pokemonAtivoNaLista = document.querySelector('.ativo');
        pokemonAtivoNaLista.classList.remove('ativo');

        const pokemonSelecionadoNaLista = document.getElementById(idPokemonSelecionado);
        pokemonSelecionadoNaLista.classList.add('ativo');
    });
});


