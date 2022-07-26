// Como podemos melhorar o esse código usando TS? 

type Pessoa = {
    nome: string,
    idade: number,
    profissao: string
};

let pessoa1 = {} as Pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {} as Pessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa5 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa6 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}