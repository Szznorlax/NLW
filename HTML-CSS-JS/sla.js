const perguntas = [
    {
        pergunta: "Qual é o nome do mapa principal em League of Legends?",
        respostas: [
            "Summoner's Rift",
            "Howling Abyss",
            "Twisted Treeline",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a rota padrão para o jungler em Summoner's Rift?",
        respostas: [
            "Top lane",
            "Mid lane",
            "Jungle",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o objetivo do jogo em League of Legends?",
        respostas: [
            "Destruir as torres inimigas",
            "Matar o dragão",
            "Destruir o Nexus inimigo",
        ],
        correta: 2
    },
    {
        pergunta: "Quanto tempo leva para o Barão Nashor renascer após ser derrotado?",
        respostas: [
            "5 minutos",
            "7 minutos",
            "10 minutos",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do suporte na equipe?",
        respostas: [
            "Dar o maior dano possível",
            "Curar os aliados",
            "Fornecer utilidade e proteção para a equipe",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a classificação mais alta no sistema de ranqueamento?",
        respostas: [
            "Ouro",
            "Diamante",
            "Mestre",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do recurso utilizado para desbloquear habilidades dos campeões?",
        respostas: [
            "Ouro",
            "Experiência",
            "Essência Azul",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do Dragão Ancião?",
        respostas: [
            "Conceder bônus de dano aos campeões",
            "Dar visão do mapa",
            "Amplificar os bônus elementares",
        ],
        correta: 2
    },
    {
        pergunta: "Quantos jogadores compõem uma equipe padrão em League of Legends?",
        respostas: [
            "3",
            "5",
            "7",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o campeão com maior mobilidade em League of Legends?",
        respostas: [
            "Darius",
            "Yasuo",
            "Zed",
        ],
        correta: 1
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