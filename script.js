function calcularInversa() {
    // Obtener el valor de la matriz desde el textarea
    var matrizTexto = document.getElementById("matrix").value;

    // Convertir el texto de la matriz a una matriz numérica
    var matriz = matrizTexto.split(';').map(row => row.split(',').map(Number));

    // Verificar si la matriz es de 2x2
    if (matriz.length !== 2 || matriz[0].length !== 2 || matriz[1].length !== 2) {
        document.getElementById("resultado").innerText = "La matriz ingresada no es de 2x2.";
        return;
    }

    // Calcular el determinante
    var determinante = matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
    // Formatear la matriz original
    var matrizFormateada = matriz.map(row => '[' + row.join(', ') + ']').join('\n');

    // Verificar si el determinante es diferente de cero
    if (determinante !== 0) {
        // Calcular la matriz inversa
        var inversa = [
            [matriz[1][1] / determinante, -matriz[0][1] / determinante],
            [-matriz[1][0] / determinante, matriz[0][0] / determinante]
        ];

        // Formatear la matriz inversa
        var inversaFormateada = inversa.map(row => '[' + row.join(', ') + ']').join('\n');

        // Construir la cadena de resultado
        var resultadoCadena = "La matriz tiene inversa. \n"+"Matriz Original: \n" + matrizFormateada + "\n\n";
        resultadoCadena += "Matriz Inversa: \n" + inversaFormateada;
        document.getElementById("resultado").innerText = resultadoCadena;
    } else {
        document.getElementById("resultado").innerText = "La matriz \n"+matrizFormateada + "\n\n"+" no tiene inversa (determinante igual a cero).";
    }
}