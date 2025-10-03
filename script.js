const nome = "Parcival"
const xp = 10001
let nivel

if (xp <= 1000) {
    nivel = "Ferro"
    console.log(`O herói ${nome} está no nível de: ${nivel}`)
} else if(xp <= 2000) {
    nivel = "Bronze"
    console.log(`O herói ${nome} está no nível de: ${nivel}`)
}   else if(xp <= 5000) {
    nivel = "Prata"
    console.log(`O herói ${nome} está no nível de: ${nivel}`)
} else if(xp <= 7000) {
    nivel = "Ouro"
    console.log(`O herói ${nome} está no nível de: ${nivel}`)
} else if(xp <= 8000) {
    nivel = "Platina"
    console.log(`O herói ${nome} está no nível de: ${nivel}`)
} else if(xp <= 9000) {
    nivel = "Diamante"
    console.log(`O herói ${nome} está no nível de: ${nivel}`)
} else if (xp <= 10000) {
    nivel = "Imortal"
    console.log(`O herói ${nome} está no nível de: ${nivel}`)
} else {
    nivel = "Radiante"
    console.log(`O herói ${nome} está no nível de: ${nivel}`)
}