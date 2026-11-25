
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


const desenvolvedores = [

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
        whatsapp: "https://wa.me/11986111437",
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

        }

    },


    {

        nome: "Thiago Silva",
        cargo: " Administrador de Banco",
        fotos: "./img/desenvolvedores/thiago.jpeg",

        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, mauris sit amet consectetur adipiscing elit.Suspendisse semp",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/11986111437",
        instagram: "https://www.instagram.com/_Lineksz_/",
        github: "https://github.com/Lineker280",
        linkedin: "https://linkedin.com/Guilherme_Lineker_Freitas_LimaL"
        }

    },

   

    {

        nome: "Leonardo Oliveira",
        cargo: "Desenvolvedor Front-end",
        fotos: "./img/desenvolvedores/Leonardo.jpeg",

        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, mauris sit amet consectetur adipiscing elit.Suspendisse semp",

        formacao: [
            "Técnico em desenvolvimento de Sistemas",
            "Análise e Desenvolvimento de Sistemas"
        ],

        redes: {
        whatsapp: "https://wa.me/11986111437",
        instagram: "https://www.instagram.com/_Lineksz_/",
        github: "https://github.com/Lineker280",
        linkedin: "https://linkedin.com/Guilherme_Lineker_Freitas_LimaL"
        }

    }

];

const nome = document.querySelector("#nome");
const foto = document.querySelector("#fotos");
const cargo = document.querySelector("#cargo");
const desc = document.querySelector("#desc");
const formacao = document.querySelector("#formacao");


const botoes = document.querySelectorAll(".indicadores button");

const whatsapp = document.querySelector("#whatts");
const instagram = document.querySelector("#insta");
const github = document.querySelector("#git");
const linkedin = document.querySelector("#linkedin");



// revisa aq: //



function trocarDesenvolvedor(index) {

   
    const dev = desenvolvedores[index];

    
    nome.textContent = dev.nome;
    foto.src = dev.fotos;
    cargo.textContent = dev.cargo;
    desc.textContent = dev.desc;

    whatsapp.href = dev.redes.whatsapp;
    instagram.href = dev.redes.instagram;
    github.href = dev.redes.github;
    linkedin.href = dev.redes.linkedin;

    
    formacao.innerHTML = "";

    dev.formacao.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        formacao.appendChild(li);

    });

   
    botoes.forEach(botao => {

    const indice = Number(botao.dataset.index);

    botao.classList.toggle("ativo", indice === index);

});

}



    botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const index = Number(botao.dataset.index);

        trocarDesenvolvedor(index);

    });

});

trocarDesenvolvedor(0);
