const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let clientes = [];
let destinos = [];

function cadastrarCliente(clientes) {
  let cliente = {
    nome: '',
    idade: 0,
    telefone: ''
  };

  console.log("Cadastro de Cliente");
  rl.question("Nome do cliente: ", (nome) => {
    cliente.nome = nome;
    rl.question("Idade do cliente: ", (idade) => {
      cliente.idade = parseInt(idade);
      rl.question("Telefone do cliente: ", (telefone) => {
        cliente.telefone = telefone;
        clientes.push(cliente);
        console.log("Cliente cadastrado com sucesso!");
        exibirMenu();
      });
    });
  });
}

function cadastrarDestino(destinos) {
  let destino = {
    cidade: '',
    pais: '',
    preco: 0.0
  };

  console.log("Cadastro de Destino");
  rl.question("Cidade do destino: ", (cidade) => {
    destino.cidade = cidade;
    rl.question("País do destino: ", (pais) => {
      destino.pais = pais;
      rl.question("Preço do destino: ", (preco) => {
        destino.preco = parseFloat(preco);
        destinos.push(destino);
        console.log("Destino cadastrado com sucesso!");
        exibirMenu();
      });
    });
  });
}

function consultarClientes(clientes) {
  console.log("Lista de Clientes");
  for (let cliente of clientes) {
    console.log(`Nome: ${cliente.nome} | Idade: ${cliente.idade} | Telefone: ${cliente.telefone}`);
  }
  exibirMenu();
}

function consultarDestinos(destinos) {
  console.log("Lista de Destinos");
  for (let destino of destinos) {
    console.log(`Cidade: ${destino.cidade} | País: ${destino.pais} | Preço: ${destino.preco}`);
  }
  exibirMenu();
}

function exibirMenu() {
  console.log("Menu de Opções:");
  console.log("1 - Cadastrar Cliente");
  console.log("2 - Cadastrar Destino");
  console.log("3 - Consultar Clientes");
  console.log("4 - Consultar Destinos");
  console.log("5 - Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case '1':
        cadastrarCliente(clientes);
        break;
      case '2':
        cadastrarDestino(destinos);
        break;
      case '3':
        consultarClientes(clientes);
        break;
      case '4':
        consultarDestinos(destinos);
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        exibirMenu();
    }
  });
}

exibirMenu();
