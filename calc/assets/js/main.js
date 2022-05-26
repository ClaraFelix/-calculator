function criaCalculadora() {
  return {
    //Atributos
    //O seletor vai armazenar o que for passado dentro da classe "display" no html
    display: document.querySelector(".display"),

    //Métodos
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("Keyup", (e) => {
        if (e.KeyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta inválida");
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      //O tamanho da string -1
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      // this -> calculadora
      //addEventListener => método anexa um manipulador de eventos a um documento
      document.addEventListener("click", (e) => {
        // Target => É uma referência ao objeto que enviou o evento. Por exemplo, se você possui uma lista de botões, e todos estes botões possuem uma mesma ação, pode ser conveniente registrar um único manipulador de eventos para estes botões, reduzindo assim a quantidade de manipuladores individuais sobre todos estes elementos.
        const el = e.target;
        //Btn-num -> são os operadore
        //classList => classList é uma propriedade somente leitura que retorna uma coleção DOMTokenList (en-US) ativa dos atributos de classe do elemento. Usar classList é uma alternativa conveniente para acessar a lista de classes de um elemento como uma seqüência delimitada por espaço através de element
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }
        //Se o botão clicado for o btn clear
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }
        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
        this.display.focus();
      });
    },
    //Pegar os valores do display e guardar
    btnParaDisplay(valor) {
      this.display.valor += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
