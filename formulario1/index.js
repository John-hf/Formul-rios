// INSERIR DADOS PELO TERMINAL.
// CADASTRO INICIAL.
const prompt = require('prompt-sync')();
const dados = {}

dados.nome = (prompt('Digite seu nome: '));
dados.idade = (prompt('Digite sua idade: '));
dados.logradouro = (prompt('Digite seu endereço: '));
dados.email = (prompt('Digite seu email: '));
dados.telefone = (prompt('Digite seu telefone: '));

console.log('\nSeus Dados cadastrados: ');
console.log('\n', dados);

// ALTERAR DADO INSERIDO.
const campo = (prompt('Qual informação você deseja alterar? '));

dados[campo] = (prompt('Digite o novo valor: '));

console.log('Dados Alterados com Sucesso: ');
console.log('\n', dados);




