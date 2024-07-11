// DESAFIO D.I.O
// OBJETIVO - > Crie uma variável para armazenar o nome e a quantidade de experiencia (xp) de um herói, depois utiliza uma estrutura de decisão para apresentar alguma das mensagens abaixo
let nomeDoHeroi = "Stark"
let xp = 10.502

let nivelDoHeroi;

if (xp < 1.000) {
    nivelDoHeroi = "Ferro";
} else if (xp <= 2.000) {
    nivelDoHeroi = "Bronze";
} else if (xp <= 5.000) {
    nivelDoHeroi = "Prata";
} else if (xp <= 7.000) {
    nivelDoHeroi = "Ouro";
} else if (xp <= 8.000) {
    nivelDoHeroi = "Platina Diamante";
} else if (xp <= 9.000) {
    nivelDoHeroi = "Ascendente";
} else if (xp <= 1.0000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

console.log("O herói de nome: " + nomeDoHeroi + " está no nível de " + nivelDoHeroi) 