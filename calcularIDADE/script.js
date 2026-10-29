const inputIdade = document.getElementById('idade');
const resultado = document.getElementById('resultado');
const historico = document.getElementById('historico');
const botoes = document.querySelectorAll('.botoes button');

// Fatores de conversão média para idade animal
const animais = {
    'Cachorro': { fator: 7, emoji: '🐶' },
    'Gato': { fator: 6, emoji: '🐱' },
    'Coelho': { fator: 8, emoji: '🐰' },
    'Hamster': { fator: 25, emoji: '🐹' },
    'Cavalo': { fator: 3, emoji: '🐴' },
    'Tartaruga': { fator: 1.5, emoji: '🐢' }
};

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const idadeHumana = parseFloat(inputIdade.value);
        
        if (isNaN(idadeHumana) || idadeHumana <= 0) {
            resultado.className = 'erro';
            resultado.textContent = '⚠️ Digite uma idade válida maior que 0!';
            return;
        }

        const nomeAnimal = botao.getAttribute('data-animal');
        const info = animais[nomeAnimal];

        if (info) {
            const idadeCalculada = Math.round(idadeHumana * info.fator);

            // Atualiza a caixa de resultado
            resultado.className = 'sucesso';
            resultado.innerHTML = `Com <strong>${idadeHumana} anos humanos</strong>, sua idade em anos de <strong>${nomeAnimal}</strong> seria <strong>~${idadeCalculada} anos</strong>! ${info.emoji}`;

            // Adiciona ao histórico (item mais recente no topo)
            const li = document.createElement('li');
            li.innerHTML = `${info.emoji} <strong>${idadeHumana} anos</strong> ➔ ${idadeCalculada} anos de ${nomeAnimal}`;
            historico.prepend(li);
        }
    });
});