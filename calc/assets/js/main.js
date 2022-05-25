function criaCalculadora() {
  return {
    //Atributos
    //O seletor vai armazenar o que for passado dentro da classe "display" no html
    display: document.querySelector(".display"),

    //Métodos
    inicia() {
      alert("oi, iniciei");
    },
    cliqueBotoes() {
      // this -> calculadora
      //addEventListener => método anexa um manipulador de eventos a um documento
      document.addEventListener(
        "click",
        function (e) {
          // Target => É uma referência ao objeto que enviou o evento. Por exemplo, se você possui uma lista de botões, e todos estes botões possuem uma mesma ação, pode ser conveniente registrar um único manipulador de eventos para estes botões, reduzindo assim a quantidade de manipuladores individuais sobre todos estes elementos.
          const el = e.target;
          //Btn-num -> são os operadore
          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }
        }.bind(this)
      );
    },
    //Pegar os valores do display e guardar
    btnParaDisplay(valor) {
      this.display.valor += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
