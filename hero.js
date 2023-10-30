const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu nome: ", function(inputNome) {
    nome = inputNome; 

    rl.question("Digite seu XP: ", function(inputXP) {
        const xp = parseInt(inputXP);

        let nivel;

        if (xp <= 1000) {
            nivel = "Ferro";
        } else if (xp <= 2000) {
            nivel = "Bronze";
        } else if (xp <= 5000) {
            nivel = "Prata / Ouro";
        } else if (xp <= 8000) {
            nivel = "Platina / Diamante";
        } else if (xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp <= 10000) {
            nivel = "Imortal";
        } else if (xp > 10001) {
            nivel = "Radiante";
        }

        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

        rl.close();
    });
});
