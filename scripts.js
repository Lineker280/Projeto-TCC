
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
        cargo: "Desenvolvedor Front-end",
        fotos: "./img/desenvolvedores/Lineker.jpeg",

        desc: "Guilherme Lineker Freitas Lima, é um desenvolvedor especializado em Front-End. Ele atua como líder de projetos e um dos fundadores da Star Level, muito capacidado com suas refêrencias de formação inclui o Colégio Etec Basilides de Godoy.",

        formacao: [
            "- Técnico em desenvolvimento de Sistemas",
            "- Análise e Desenvolvimento de Sistemas"
        ]

    },


    {

        nome: "Débora Lopes",
        cargo: "Desenvolvedor Back-end",
        fotos: "./img/desenvolvedores/Debora.jpeg",

        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, mauris sit amet consectetur adipiscing elit.Suspendisse semp",

        formacao: [
            "- Técnico em desenvolvimento de Sistemas",
            "- Análise e Desenvolvimento de Sistemas"
        ]

    },


    {

        nome: "Thiago Silva",
        cargo: "Chupador de Piroca",
        fotos: "./img/desenvolvedores/thiago.jpeg",

        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, mauris sit amet consectetur adipiscing elit.Suspendisse semp",

        formacao: [
            "- Técnico em desenvolvimento de Sistemas",
            "- Análise e Desenvolvimento de Sistemas"
        ]

    },

    {

        nome: "Ana Julia",
        cargo: "Japônesa",
        fotos: "./img/desenvolvedores/Ana.jpeg",

        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, mauris sit amet consectetur adipiscing elit.Suspendisse semp",

        formacao: [
            "- Técnico em desenvolvimento de Sistemas",
            "- Análise e Desenvolvimento de Sistemas"
        ]

    },

    {

        nome: "Leonardo Oliveira",
        cargo: "Chupador de Piroca",
        fotos: "./img/desenvolvedores/Leonardo.jpeg",

        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, mauris sit amet consectetur adipiscing elit.Suspendisse semp",

        formacao: [
            "- Técnico em desenvolvimento de Sistemas",
            "- Análise e Desenvolvimento de Sistemas"
        ]

    }

];

const nome = document.querySelector("#nome");
const foto = document.querySelector("#fotos");
const cargo = document.querySelector("#cargo");
const desc = document.querySelector("#desc");
const formacao = document.querySelector("#formacao");

const botoes = document.querySelectorAll(".indicadores button");




// revisa aq: //



function trocarDesenvolvedor(index) {

   
    const dev = desenvolvedores[index];

    
    nome.textContent = dev.nome;
    foto.src = dev.fotos;
    cargo.textContent = dev.cargo;
    desc.textContent = dev.desc;

    
    formacao.innerHTML = "";

    dev.formacao.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        formacao.appendChild(li);

    });

   
    botoes.forEach(botao => {
        botao.classList.remove("ativo");
    });

    botoes[index].classList.add("ativo");

}


botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const index = Number(botao.dataset.index);

        trocarDesenvolvedor(index);

    });

});

