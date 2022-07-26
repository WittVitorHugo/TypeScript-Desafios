// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

// Solução 1 - forma simples, sem tipagem

const employee1 = {
    code: 10,
    name: "John"
}

// solução 2 - tipando os parâmetros na criação do objeto

const employee2: {code: number, name: string} = {
    code: 10,
    name: "John"
}

// solução 3 - utilizando type 

type EmployeeType = {
    code: number,
    name: string
}

let employee3: EmployeeType = {
    code: 10,
    name: "John"
}


// solução 4

interface EmployeeInterface {
    code: number,
    name: string
}

const employee4 = {} as EmployeeInterface;
employee4.code = 10;
employee4.name = "John";

const employee5: EmployeeInterface = {
    code: 10,
    name: "John"
}