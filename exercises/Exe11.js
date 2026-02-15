// Escribe una función que simula el juego piedra, papel y tijera.
// Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string.
// La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola
// ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso
// de perder uno de derrota.

function gameRPS(userOption = "") {
    const validOptions = ["piedra", "papel", "tijera"]
    const result = {
        machineOption: "",
        userOption,
        winner: ","
    }
}
if (!validOptions.includes (userOption.tolowerCase))
    result.winner = "InvalidOptions";
    return result

const i = Math.floor (Math.random()*3)
result.machineOption = ValidOptions [i];

//Posibilidades:
//machine ----- user ------ result

//piedra 0 - piedra - 0 empate
//piedra 0 - papel  - 1 papel (user)
//piedra 0 - tijeras - 2 piedra (machine) 

//papel 1 - piedra - 0 papel (machine)
//papel 1 - papel - 1 empate
//papel 1 - tijeras - 2 (user)

//tijeras 2 - piedra - 0 piedra (user)
//tijeras 2 - papel - 1 tijeras (machine)
//tijeras 2 - tijeras - 2 empate 

//Comparativa:

const allResult = [
    ["empate", "user", "machines"],
    ["machine", "empate", "user"],
    ["user", "machine", "empate"],
]

const user = validOptions.findIndex((option)=> option === userOption)
result.winner = allResult [i][user];
return result;

//Test

console.log (gameRPS("patata"))
console.log (gameRPS("piedra"))
console.log (gameRPS("papel"))
console.log (gameRPS("tijeras"))
