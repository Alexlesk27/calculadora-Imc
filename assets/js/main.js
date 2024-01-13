const form = document.querySelector(".form")
const button = document.querySelector(".button")

oncreated()

function oncreated() {
    calcula();
}


function calcula() {
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const inputPeso = evento.target.querySelector(".peso");
        const inputAltura=evento.target.querySelector(".altura"); 

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        const getImc = calculaImc(peso, altura).toFixed(1);


        if(!peso && !altura){
            setResultado("Peso e altura invalido",false)
            return
        }

        if(!peso){
            setResultado("Peso invalido",false)
            return
        }

        if(!altura){
            setResultado("Altura invalida",false)
            return
        }

        console.log(peso/(altura*altura))

    
        if (getImc < 18.5) {
            setResultado( "a baixo do peso",true);
        } else if (getImc >= 18.5 && getImc <= 24.9) {
            setResultado("Peso normal", true)
        } else if (getImc >= 25 && getImc <= 29.9) {
            setResultado("Sobrepeso",true)
        } else if (getImc >= 30 && getImc <= 34.9) {
            setResultado(" Obesidade grau 1",true)
        } else if (getImc >= 35 && getImc <= 39.9) {
            setResultado(" Obesidade grau 2",true)
        } else if (getImc == 40) {
            setResultado(" Obesidade grau 3",true)
        } else {
            setResultado(" Nem um resultado encontrado",true)
    
        }
    })

}

function calculaImc(peso, altura){
 return peso/(altura*altura)
}


function setResultado(msg, isValid){
    const result = document.querySelector('.result')
    result.innerHTML= msg

    if(!isValid){
        result.style.backgroundColor = "#9b0d0d";
        result.style.color = "#FFF"
    }

    if(isValid){
        result.style.backgroundColor = "#009000";  
    }
     mostrarToast(msg, isValid)
}
function mostrarToast(texto, isValid) {
    if(isValid){
        var toast = document.createElement('div');
        toast.id = 'toast';
        toast.innerText = texto;
        document.body.appendChild(toast);
        toast.style.display = 'block';
        toast.style.backgroundColor= "#009000";
        setTimeout(function () {
            toast.style.display = 'none';
            document.body.removeChild(toast);
        }, 2500);
        return
    }

    if(!isValid){
        var toast = document.createElement('div');
        toast.id = 'toast';
        toast.innerText = texto;
        document.body.appendChild(toast);
        toast.style.display = 'block';
        setTimeout(function () {
            toast.style.display = 'none';
            document.body.removeChild(toast);
        }, 2500);
        return
    }
    
}

