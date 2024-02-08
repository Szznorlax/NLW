const perguntas = [
    {
        pergunta: "Qual é o nome do campeão que é conhecido como o Espírito do Vento?",
        respostas: [
            "Yasuo",
            "Teemo",
            "Zed",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a classe de campeões mais especializada em causar danos à distância?",
        respostas: [
            "Tanque",
            "Assassino",
            "Atirador",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o objetivo principal do jogo League of Legends?",
        respostas: [
            "Destruir a base inimiga",
            "Matar o maior número possível de minions",
            "Capturar o Barão Nashor",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do mapa principal de League of Legends?",
        respostas: [
            "Academia de Batalha",
            "Summoner's Rift",
            "Planalto do Dragão",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o recurso mais importante para comprar itens durante uma partida?",
        respostas: [
            "Ouro",
            "Experiência",
            "Pontos de Vida",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do evento anual de League of Legends que celebra o campeonato mundial?",
        respostas: [
            "All-Star",
            "Mid-Season Invitational",
            "Worlds",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do jogo que serviu de inspiração para o desenvolvimento de League of Legends?",
        respostas: [
            "World of Warcraft",
            "DotA: Defense of the Ancients",
            "StarCraft",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o objetivo do modo de jogo 'ARAM'?",
        respostas: [
            "Destruir a base inimiga",
            "Matar o Barão Nashor",
            "Combater em uma única rota sem volta à base",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do dragão que concede buffs de resistência elemental para a equipe que o mata?",
        respostas: [
            "Dragão Ancião",
            "Dragão da Montanha",
            "Dragão Elemental",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o objetivo do modo de jogo 'Teamfight Tactics'?",
        respostas: [
            "Destruir a base inimiga",
            "Combater em um mapa com múltiplas rotas",
            "Construir um time e competir em batalhas automáticas",
        ],
        correta: 2
    },
];



const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostarTotal = document.querySelector('#acertos span')
mostarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            mostarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}