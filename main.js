//funcion para calcular el promedio
function calcularPromedio(lista){
    let suma = 0;
    let promedio = 0;

    lista.forEach((elemento)=>{
        suma += elemento;
    })

    promedio = suma / lista.length;

    //to fixed redondea al numero de decimales
    return parseFloat(promedio.toFixed(1)) 
}

//funcion para validar datos
function validarDato(dato){
    let esValido;
    if(isNaN(dato) === true || dato < 1 || dato > 10){
        esValido = false;
    }else{
        esValido = true;
    }
    return esValido;
}

function agregarAlista(lista){
    //traer el dato del input
    const nota = document.getElementById("nota").value;
    //validar el dato
    if(validarDato(nota)){
        lista.push(parseFloat(nota));
        console.log(lista);
    }
    //si es valido los agrega
}

function mostrarResultado(promedio){
    let aprobo;

    if(promedio >= 6.0){
        aprobo = true;
    }else{
        aprobo = false;
    }

    return aprobo;
}

function reiniciarLista(lista){
    //eliminar el ultimo elemento de la lista
    lista.splice(0, lista.length);
}

function reiniciarInput(input){
    //pone el valor del input nuevamente en blanco 
    input.value = "";
}

//carga toda la pagina HTML (el dom) antes de ejecutar el js
document.addEventListener("DOMContentLoaded", function(){
    //lista de notas
    const listaNotas = []

    //traer el input
    const input = document.getElementById("nota");
    //traer el boton de agregar y calcular
    const btnAgregar = document.getElementById("btnAgregar");
    const btnCalcular = document.getElementById("btnCalcular");

    //traer donde se va mostrar el restultado
    const contResultado = document.getElementById("contResultado");

    //boton agregar notas
    btnAgregar.addEventListener("click", ()=>{

        agregarAlista(listaNotas);
        reiniciarInput(input);
    }) 

    //boton que calcula el promedio
    btnCalcular.addEventListener("click", ()=>{
        //si la lista esta vacia retorne 1
        if(listaNotas.length === 0){
            return 1;
        }

        //trae el valor de los inputs nombre y ID
        const nombre = document.getElementById("nombre");
        const id = document.getElementById("id");

        let promedio = calcularPromedio(listaNotas);
        let resultado;

        if(mostrarResultado(promedio)){
            resultado = "Aprobo";
        }else{
            resultado = "No aprobo";
        }

        //guarda el mensaje a mostrar
        let mensaje = `Nombre estudiante: ${nombre.value} \n ID: ${id.value} \n ${resultado}`; 
        let textoHTML = mensaje.replace(/\n/g, "<br>");
        contResultado.innerHTML = textoHTML;
        

        //elimina todos los datos de la lista para calcular un nuevo promedio
        reiniciarLista(listaNotas); 
        //limpia los inputs nombre y id
        reiniciarInput(nombre);
        reiniciarInput(id);

    })
})