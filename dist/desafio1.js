// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";
// Solução 1 - forma simples, sem tipagem
var employee1 = {
    code: 10,
    name: "John"
};
// solução 2 - tipando os parâmetros na criação do objeto
var employee2 = {
    code: 10,
    name: "John"
};
var employee3 = {
    code: 10,
    name: "John"
};
var employee4 = {};
employee1.code = 10;
employee1.name = "John";
var employee5 = {
    code: 10,
    name: "John"
};
