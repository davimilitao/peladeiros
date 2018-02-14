timeColors = ["Red", "Blue"];
var botaoAdicionar = document.querySelector("#botaoAdicionarJogador");

botaoAdicionar.addEventListener("click", function() {

  geraListaJogadoresPresentes = function() {
      // busca lista no JSON
      var joga = JSON.parse(jogadores);
      // adiciona um "espaço" na lista pl=palyers
      document.querySelector("#pl").innerHTML = " ";
      if (joga.length > 0) {
          // Cria uma variavel para listar de jogadores pl=players
          var pl = "Lista de Jogadores: <br />";
          // cria um loop para cada jogador da lista
          for (i = 0; i < joga.length; i++) {
              //cria a lista com checkbox
              pl += '<input type="checkbox" id="myCheck" name="jogador" value="Adiciona">' + joga[i].nome + '<br /> ';
          }
      }
      //coloca alista no HTML com innerHTML
      document.querySelector("#pl").innerHTML = pl.split(", ,")[0];

  };

  geraListaJogadoresPresentes();

});

geraListaJogadores = function() {
    // busca lista no JSON
    var joga = JSON.parse(jogadores);
    // adiciona um "espaço" no time Vermelho
    document.querySelector("#red").innerHTML = " ";
    // adiciona um "espaço" no time Azul
    document.querySelector("#blue").innerHTML = " ";
    // se lista de jogadores.quantidade for maior que zero = true
    if (joga.length > 0) {
        // cria um loop para cada jogador da lista
        for (i = 0; i < joga.length; i++) {
            // cria uma variavel para adicionar o jogador no caso cria uma DIV
            ne = document.createElement("div");
            // adiciona um ID ao jogador
            // Estou passando o proprio nome mas poderia passar um ID se no JSON tivesse um ID
            ne.id = joga[i].nome;
            // adiciona uma CLASSE ao jogador pli+ a cor do time
            ne.className = "pli " + timeColors[i];
            // innerHTML adiciona um texto na div no caso o nome do jogador e coloco um btn pra apagar o jogador
            ne.innerHTML = joga[i].nome + '<input type="button" id="dp" onClick="delPlayer(' + "'" + joga[i] + "'" + ')" value="Delete" />';
            // verifica se existe o time vermelho ou azul se existir insere dentro a div criada acima
            if (timeColors[i] === "red" || timeColors[i] === "blue") {
                  document.querySelector("#" + timeColors[i]).appendChild(ne);
            }
        }
    }
    // Aparentemente esta funçao verfica se existe jogadores no json
    // posso usa-la para controlar a quantidade de jogadores por time
    // if (timeColors.length < 1) {
        // ne = document.createElement("div");
        // ne.className = "pli";
        // if (joga.length > 0) {
        //     ne.innerHTML = 'No teams yet!';
        // } else {
        //     ne.innerHTML = 'No players yet!';
        // }
        // document.querySelector("#red").appendChild(ne);
        //
        // ne = document.createElement("div");
        // ne.className = "pli";
        // if (joga.length > 0) {
        //     ne.innerHTML = 'Click "Generate Teams"!';
        // } else {
        //     ne.innerHTML = 'Add Some Players!';
        // }
        // document.querySelector("#blue").appendChild(ne);
    // }
    // if (joga.length > 0) {
    //     // pl += ",";
    //     pl += " ";
    // } else {
    //     pl = "No players in the player list!\nType a name in the text box below and hit enter to add some!";
    // }
    //emailTeams();
};

geraListaJogadores();

var botaoSotear = document.querySelector("#botaoSorteiaJogo");
botaoSotear.addEventListener("click", function() {

  var joga = JSON.parse(jogadores);

  function sorteioJogo(){
    timeColors = [];

    function colorGen() {
        rand = Math.floor(Math.random() * 2);
        if (rand > 0 && red > 0) {
            red--;
            return "red";
        } else if (blue > 0) {
            blue--;
            return "blue";
        } else {
            return "red";
        }
    }

    red = Math.round(joga.length / 2);
    blue = red;

    for (i = 0; i < joga.length; i++) {
        timeColors.push(colorGen());
    }
    geraListaJogadores();
  }
  sorteioJogo();
});

function adicionaJogador(jogador) {
   var jogadorTr = montaTr(jogador);
   var tabela = document.querySelector("#tabela-Jogador");
   tabela.appendChild(jogadorTr);
}

// criando o objeto jogador
function obtemJogador(form) {

   var jogador = {
      foto: form.foto.value,
      nome: form.nome.value
   }

   return jogador;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(jogador) {
    //Cria TR
    var jogadorTr = document.createElement("tr");
    jogadorTr.classList.add("jogador");
    //Cria as TD's e a adiciona dentro da TR
    jogadorTr.appendChild(montaTd(jogador.foto, "info-foto"));
    jogadorTr.appendChild(montaTd(jogador.nome, "info-nome"));
    // retorna a TR
    return jogadorTr;
}
