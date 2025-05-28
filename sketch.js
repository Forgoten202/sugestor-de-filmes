let filmes = {
  livre: [
    "Toy Story",
    "Procurando Nemo",
    "Frozen",
    "Os Incríveis",
    "Zootopia",
    "Moana",
    "Coco",
    "O Rei Leão",
    "Wall-E",
    "Ratatouille"
  ],
  dez: [
    "Harry Potter e a Pedra Filosofal",
    "Percy Jackson",
    "Matilda",
    "Jumanji (1995)",
    "A Fantástica Fábrica de Chocolate",
    "O Pequeno Príncipe",
    "Karatê Kid",
    "O Espanta Tubarões",
    "Hotel Transilvânia",
    "Meu Malvado Favorito"
  ],
  doze: [
    "Homem-Aranha: No Aranhaverso",
    "Star Wars: Episódio IV",
    "Jurassic Park",
    "Os Goonies",
    "De Volta para o Futuro",
    "Coraline",
    "O Lar das Crianças Peculiares",
    "O Menino do Pijama Listrado",
    "A Viagem de Chihiro",
    "O Grande Herói"
  ],
  dezesseis: [
    "Oppenheimer",
    "Duna",
    "Interestelar",
    "O Lobo de Wall Street",
    "Coringa",
    "A Origem",
    "O Iluminado",
    "Clube da Luta",
    "Blade Runner 2049",
    "Mad Max: Estrada da Fúria"
  ],
  dezoito: [
    "Pulp Fiction",
    "Taxi Driver",
    "O Irlandês",
    "Bastardos Inglórios",
    "Laranja Mecânica",
    "O Silêncio dos Inocentes",
    "Scarface",
    "Oldboy",
    "Trainspotting",
    "Requiem for a Dream"
  ]
};

let recomendacao = "";
let categoriaSelecionada = "";

function setup() {
  createCanvas(600, 400);
  background(240);
  textAlign(CENTER, CENTER);
  textSize(20);
  
  // Botões para cada categoria
  criarBotao("Livre", 100, 100, 100, 50, () => recomendarFilme("livre"));
  criarBotao("10+", 250, 100, 100, 50, () => recomendarFilme("dez"));
  criarBotao("12+", 400, 100, 100, 50, () => recomendarFilme("doze"));
  criarBotao("16+", 100, 200, 100, 50, () => recomendarFilme("dezesseis"));
  criarBotao("18+", 250, 200, 100, 50, () => recomendarFilme("dezoito"));
}

function draw() {
  background(240);
  textSize(24);
  fill(0);
  text("Recomendador de Filmes", width / 2, 50);
  
  textSize(18);
  text("Selecione a faixa etária:", width / 2, 80);
  
  if (recomendacao) {
    textSize(20);
    fill(50, 100, 200);
    text(`Categoria: ${categoriaSelecionada}`, width / 2, 300);
    text(`Recomendação: ${recomendacao}`, width / 2, 330);
  }
}

function criarBotao(label, x, y, w, h, acao) {
  let botao = createButton(label);
  botao.position(x, y);
  botao.size(w, h);
  botao.mousePressed(acao);
}

function recomendarFilme(categoria) {
  let lista = filmes[categoria];
  recomendacao = random(lista);
  
  // Traduz a categoria para exibição
  switch (categoria) {
    case "livre": categoriaSelecionada = "Livre"; break;
    case "dez": categoriaSelecionada = "10+"; break;
    case "doze": categoriaSelecionada = "12+"; break;
    case "dezesseis": categoriaSelecionada = "16+"; break;
    case "dezoito": categoriaSelecionada = "18+"; break;
  }
}