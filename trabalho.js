const ListaPessoas = [];
let nome;
let cidade;
let idade;
let idAlterar;
let idDeletar;
dadosValidos = false

function validarNome(nome){
    let regexNome = /^[a-zA-ZÀ-Á-Í-Ó-Ú-à-á-í-ó-ú\s]+$/; 
    if (typeof nome !== "string" || !regexNome.test(nome)) {
      alert("Nome inválido. Digite apenas letras e espaços."); 
    }
    
}
function validarIdade(idade){
    if (isNaN(idade)) {
        alert("Idade inválida. Digite apenas números inteiros.");
        return;
         }
}
function ValidarCidade(cidade){
  let regexCidade = /^[a-zA-ZÀ-Á-Í-Ó-Ú-à-á-í-ó-ú\s]+$/; 
  if (typeof cidade !== "string" || !regexCidade.test(cidade)) {
    alert("Cidade inválida. Digite apenas letras e espaços.");
    return; 
  }
}



function CadastrarPessoa() { 
    while (dadosValidos === false) {
        let nome = prompt("Nome: ");
        ValidName = nome
        let regexNome = /^[a-zA-ZÀ-Á-Í-Ó-Ú-à-á-í-ó-ú\s]+$/;
        if (typeof nome !== "string" || !regexNome.test(nome)) {
          alert("Nome inválido. Digite apenas letras e espaços.");
        } else {
          dadosValidos = true; // Nome válido, interrompe o loop
        }
      }
      console.log("passou nome")

    dadosValidos= false;
    let ValidIdade;

    while (dadosValidos === false){ 
        let idade = prompt("Idade: ")
        ValidIdade = idade
        if (isNaN(idade)) {
            alert("Idade inválida. Digite apenas números inteiros.");
         } else {
            dadosValidos = true;
         }
    }

    dadosValidos = false;
    while (dadosValidos === false) {
        let cidade = prompt("Cidade: ");
        ValidCity = cidade
        let regexCidade = /^[a-zA-ZÀ-Á-Í-Ó-Ú-à-á-í-ó-ú\s]+$/;
        if (typeof cidade !== "string" || !regexCidade.test(cidade)) {
          alert("Nome inválido. Digite apenas letras e espaços.");
        } else {
          dadosValidos = true; // Nome válido, interrompe o loop
        }
      }


    let pessoa = ("ID: "+ ID() + " Nome: "+ ValidName+" Idade: " + ValidIdade + " Cidade: " + ValidCity + "\n");
    ListaPessoas.push(pessoa);
}


function atualizar(idAlterar, campoAlterar) {
    for (i in ListaPessoas) {
        if (idAlterar == ListaPessoas[i].ID) {
            if (campoAlterar == 1) {
                ListaPessoas[i].nome = prompt("Digite o novo nome: ");
            } else if (campoAlterar == "idade") {
                ListaPessoas[i].idade = prompt("Digite a nova idade: ");
            } else if (campoAlterar == "cidade") {
                ListaPessoas[i].cidade = prompt("Digite a nova cidade: ");
            } else {
                alert("O campo para alterar é inválido!");
            }

        } 
}
}

function deletar() {
  // Implementar a lógica para deletar um cadastro (ainda não implementada)
  for (i in ListaPessoas) {
    if (idDeletar == ListaPessoas[i].ID) {
        ListaPessoas.splice(i,1);
    }
}
}

function listar() {
  alert(ListaPessoas); 
  return ListaPessoas; 
}

function ID() {
  return Math.floor(Math.random() * 1000); // Gera o ID entre 0 e 999
}

let saida = false;

while (saida === false) {
  let opcao = prompt("Digite uma opção:\n\n1 - Criar Cadastro\n2 - Atualizar Cadastro\n3 - Deletar Cadastro\n4 - Listar Cadastrados\n0 - Sair\n");

  switch (opcao) {
    case "1":
      CadastrarPessoa(nome, idade, cidade);
      break;

    case "2":
        let idAlterar= prompt("Digite o Id pra alternar: ")
        let campoAlterar = prompt("Digite o campo a alterar (nome, idade, cidade): ")
      atualizar(idAlterar, campoAlterar);
      break;

    case "3":
        let idDeletar= prompt("Digite o Id para deletar")
      deletar(idDeletar); 
      break;

    case "4":
      listar(); 
      break;

    case "0":
      saida = true; // Sair do loop
      break;
 
    default:
      alert("Opção inválida!");
  }
}
