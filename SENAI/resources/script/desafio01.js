function verificarMaior() {
            let num1 = Number(document.getElementById("numero1").value);
            let num2 = Number(document.getElementById("numero2").value);

            let resultado = document.getElementById("resultado");

            if (num1 > num2) {
                resultado.innerHTML = "O maior número é: " + num1;
            } 
            else if (num2 > num1) {
                resultado.innerHTML = "O maior número é: " + num2;
            } 
            else {
                resultado.innerHTML = "Os dois números são iguais!";

                }
        }