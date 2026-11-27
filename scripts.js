
const elements = document.querySelectorAll('.desenvolvedores, .mvv')

const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }

    })

})

    elements.forEach((element) => {
    myObserver.observe(element)
})


const equipe1 = [

    {

        nome: "Guilherme Lineker",
        cargo: "Desenvolvedor Back-end",
        fotos: "./img/desenvolvedores/Lineker.jpeg",

        desc: "Guilherme Lineker Freitas Lima, é um desenvolvedor especializado em Back-End. Ele atua como líder de projetos e um dos fundadores da Star Level, muito capacidado, incluindo em suas refêrencias de formação. Técnico em desenvolvimento de sistemas pela Etec Professor Basilidades de Godoy.",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/5511986111437",
        instagram: "https://www.instagram.com/_Lineksz_/",
        github: "https://github.com/Lineker280",
        linkedin: "https://linkedin.com/Guilherme_Lineker_Freitas_LimaL"
        }

    },


    {

        nome: "Débora Lopes",
        cargo: "Desenvolvedora Full Stack",
        fotos: "./img/desenvolvedores/Debora.jpeg",

        desc: "Débora Lopes de Souza, desenvolvedora especializada em Back-End e desenvolvimento FullStack. É atuante como vice lider em projetos da empresa Star Level, possuindo técnico em desenvolvimento de sistemas pela Etec Professor Basilidades de Godoy em sua formação.",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/5511912819579",
        instagram: "https://www.instagram.com/me.lopesz",
        github: "https://github.com/therabite",
        linkedin: "https://www.linkedin.com/in/débora-lopes-2b5a93320/"
        }

    },

     {

        nome: "Ana Julia",
        cargo: "Gerente de Projeto",
        fotos: "./img/desenvolvedores/Ana.jpeg",

        desc: " Ana Julia Marques do Prado, é uma desenvolvedora especializada em gerenciamento de projetos. Ela atua como gerente e é um dos fundadores da Star Level, tendo  suas formações  que incluem o Colégio Etec Basilides de Godoy.",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/5511982479406",
        instagram: "https://www.instagram.com/Juh.tsk",
        github: "https://github.com/Anajuxgit23",
        linkedin: "https://www.linkedin.com/in/ana-julia-marques-do-prado-336986321?"
        }

    },


    {

        nome: "Thiago Silva",
        cargo: " Administrador de Banco",
        fotos: "./img/desenvolvedores/thiago.jpeg",

        desc: " Thiago Ferreira Silva é um desenvolvedor focado em análise e modelagem de banco de dados. Sua atuação se dá na construção da base lógica e conceitual das informações a serem utilizadas pelo sistema.",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/5511986111437",
        instagram: "https://www.instagram.com/__thigasss__/",
        github: "https://github.com/ThiagoFerreiraSil",
        linkedin: "https://linkedin.com/"
        }

    },

   

    {

        nome: "Leonardo Oliveira",
        cargo: "Desenvolvedor Front-end",
        fotos: "./img/desenvolvedores/Leonardo.jpeg",

        desc: " Leonardo de Oliveira Alves Bezerra é um analista especializado em banco de dados. Tal então, ajuda com o desenvolvimento do sistema de banco de dados dos sites produzidos, e se encarrega de funções fundamentais para o avanço da equipe, tendo uma de suas formações na Etec basilides de Godoy",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/5511953565689",
        instagram: "https://www.instagram.com/ln.alvezz/",
        github: "https://github.com/LeonardoOAB",
        linkedin: "https://linkedin.com/Leonardo Bezerra"
        }

    }

]










const equipe2 = [

    {

        nome: "Miguel Fauzi",
        cargo: "Game Designer",
        fotos: "./img/desenvolvedores/Miguel.jpeg",

        desc: "Atua na criação de conceitos, desenvolvimento das narrativas e elaboração das fases dos jogos, contribuindo para a construção da experiência e da identidade dos projetos.",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/5511976488452",
        instagram: "https://www.instagram.com/jogosujo",
        github: "https://github.com/MiguelFauzi10",
        linkedin: "https://linkedin.com/kelvin-pereira-3a693b428"
        }

    },


    {

        nome: "Kelvin Pereira",
        cargo: "Artista 3D",
        fotos: "./img/desenvolvedores/Kelvin.jpeg",

        desc: "Trabalha na concepção dos jogos, desenvolvimento de narrativas, criação de modelos tridimensionais e programação de aplicações mobile.",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/5511976488452",
        instagram: "https://www.instagram.com/jogosujo",
        github: "https://github.com/k3llts",
        linkedin: "https://www.linkedin.com/in/kelvin-pereira-3a693b428"
        }

    },

     {

        nome: "Henrique de Morais",
        cargo: "Level Designer.",
        fotos: "./img/desenvolvedores/Henrique.jpeg",

        desc: "Atua na criação de elementos visuais tridimensionais e na elaboração dos ambientes e estruturas das fases, contribuindo para a composição visual e a experiência dos jogadores.",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/5511976488452",
        instagram: "https://www.instagram.com/jogosujo",
        github: "https://github.com/HenriqueTomazini3333",
        linkedin: "https://www.linkedin.com/in/kelvin-pereira-3a693b428"
        }

    },


    {

        nome: "Victor Mollo",
        cargo: "Sound Designer.",
        fotos: "./img/desenvolvedores/Victor.jpeg",

        desc: "Responsável pela criação de elementos visuais tridimensionais e pelo desenvolvimento dos aspectos sonoros dos jogos, contribuindo para a ambientação e imersão dos projetos",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/5511976488452",
        instagram: "https://www.instagram.com/jogosujo",
        github: "https://github.com/dunguinhas",
        linkedin: "https://linkedin.com/victor-mollo-cabral-01712a428/"
        }

    },

   

    {

        nome: "Daniel de Souza",
        cargo: "Programador Unity.",
        fotos: "./img/desenvolvedores/Daniel.jpeg",

        desc: "Atua no desenvolvimento e na implementação dos sistemas dos jogos utilizando a Unity, trabalhando na programação das mecânicas e funcionalidades necessárias para o funcionamento dos projetos",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/5511976488452",
        instagram: "https://www.instagram.com/jogosujo",
        github: "https://github.com/DenilsonAlve",
        linkedin: "https://linkedin.com/victor-mollo-cabral-01712a428/"
        }

    }

]




const nome = document.querySelector("#nome");
const foto = document.querySelector("#fotos");
const cargo = document.querySelector("#cargo");
const desc = document.querySelector("#desc");
const formacao = document.querySelector("#formacao");

const indicadores = document.querySelector("#indicadores");
const botaoEquipe = document.querySelector("#trocar-equipe");

const whatsapp = document.querySelector("#whatts");
const instagram = document.querySelector("#insta");
const github = document.querySelector("#git");
const linkedin = document.querySelector("#linkedin");

const tituloEquipe = document.querySelector("#titulo-equipe");





// Todas as equipes
const equipes = [equipe1, equipe2];

// Controle da equipe atual
let equipeAtual = 0;
let desenvolvedores = equipes[equipeAtual];

// Atualiza os links das redes sociais
function atualizarRede(elemento, link) {

    if (link) {
        elemento.href = link;
        elemento.style.display = "";
        elemento.target = "_blank";
    } else {
        elemento.removeAttribute("href");
        elemento.style.display = "none";
    }

}

// Cria os indicadores automaticamente
function criarIndicadores() {

    indicadores.innerHTML = "";

    desenvolvedores.forEach((dev, index) => {

        const botao = document.createElement("button");

        botao.dataset.index = index;

        botao.addEventListener("click", () => {
            trocarDesenvolvedor(index);
        });

        indicadores.appendChild(botao);

    });

}

// Troca as informações do desenvolvedor
function trocarDesenvolvedor(index) {

    const dev = desenvolvedores[index];

    if (!dev) return;

    nome.textContent = dev.nome;
    foto.src = dev.fotos;
    cargo.textContent = dev.cargo;
    desc.textContent = dev.desc;

    atualizarRede(whatsapp, dev.redes.whatsapp);
    atualizarRede(instagram, dev.redes.instagram);
    atualizarRede(github, dev.redes.github);
    atualizarRede(linkedin, dev.redes.linkedin);

    // Atualiza as formações
    formacao.innerHTML = "";

    dev.formacao.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        formacao.appendChild(li);

    });

    // Atualiza os indicadores
    const botoes = indicadores.querySelectorAll("button");

    botoes.forEach((botao, i) => {

        botao.classList.toggle("ativo", i === index);

    });

}

// Alterna entre as equipes
function trocarEquipe() {

    
    const proximaEquipe = (equipeAtual + 1) % equipes.length;

    // Verifica se a próxima equipe possui integrantes
    if (equipes[proximaEquipe].length === 0) {

        alert("Essa equipe ainda não possui integrantes cadastrados!");

        return;
    }

    equipeAtual = proximaEquipe;

    desenvolvedores = equipes[equipeAtual];

   

    // Recria os indicadores
    criarIndicadores();

    // Começa pelo primeiro integrante
    trocarDesenvolvedor(0);

}

// Evento do botão de troca
botaoEquipe.addEventListener("click", trocarEquipe);

// Inicialização
criarIndicadores();
trocarDesenvolvedor(0);
