const form = document.querySelector(".form");
const button = document.querySelector(".button");

oncreated()

function oncreated() {
    calcula();
}

function calculaImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function setResultado(msg, isValid) {
    const result = document.querySelector('.result');
    result.innerHTML = ' ';

    if (!isValid) {
        mostrarToast(msg, isValid);
    }

    if (isValid) {
        result.innerHTML = msg;
        result.style.backgroundColor = "#009000";
        result.style.color = "#FFF"
    }
}

function mostrarToast(texto, isValid) {
    if (isValid) {
        var toast = document.createElement('div');
        toast.id = 'toast';
        toast.innerText = texto;
        document.body.appendChild(toast);
        toast.style.display = 'block';
        toast.style.backgroundColor = "#009000";
        setTimeout(function () {
            toast.style.display = 'none';
            document.body.removeChild(toast);
        }, 2500);
        return;
    }

    if (!isValid) {
        var toast = document.createElement('div');
        toast.id = 'toast';
        toast.innerText = texto;
        document.body.appendChild(toast);
        toast.style.display = 'block';
        setTimeout(function () {
            toast.style.display = 'none';
            document.body.removeChild(toast);
        }, 2500);
        return;
    }

}


function calcula() {
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const inputPeso = evento.target.querySelector(".peso");
        const inputAltura = evento.target.querySelector(".altura");

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        const getImc = calculaImc(peso, altura);


        if (!peso && !altura) {
            setResultado("Peso e altura invalido", false);
            return;
        }

        if (!peso) {
            setResultado("Peso invalido", false);
            return;
        }

        if (!altura) {
            setResultado("Altura invalida", false);
            return;
        }

        console.log(peso / (altura * altura));
       const nivelImc = getNivelImc(getImc)

        const msg =  `Seu IMC é ${getImc}, (${nivelImc}). `;
        setResultado(msg, true);
})
}

function getNivelImc(imc){
   const nivel = ["a baixo do peso", "Peso normal", "Sobrepeso", " Obesidade grau 1", " Obesidade grau 2", " Obesidade grau 3", " Nem um resultado encontrado"]

   if(imc >= 39.9) return nivel[5]
   if(imc >= 34.9) return nivel[4]
   if(imc >= 29.9) return nivel[3]
   if(imc >= 24.9) return nivel[2]
   if(imc >= 18.5) return nivel[1]
   if(imc < 18.5) return nivel[0]
}
