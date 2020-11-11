let dado = 0
// Inicializa la variable cat_lluvia en cero
let cant_lluvia = 0
// Establecer el conteo de días menores o iguales a 2mm de precipitación
let num_veces = 0
// Se establece el ciclo de repetición
for (let index = 0; index < 1825; index++) {
    dado = randint(0, 10)
    // Suma la cantidad del dado a la cantidad existente en cant_lluvia
    cant_lluvia = cant_lluvia + dado
    if (dado < 2 || dado == 2) {
        // Se incrementa la variable en 1, cada vez que la condición sea cierta
        num_veces += 1
    }
}
// Establecemos los parámetros de la variable
let promedio = cant_lluvia / 1825
basic.showString("PROMEDIO")
basic.showNumber(promedio)
basic.pause(200)
basic.showString("DIAS <= 2MM")
basic.showNumber(num_veces)
