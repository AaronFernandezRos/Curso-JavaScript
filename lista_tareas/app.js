
let button = document.getElementById("add");
let lista = document.querySelector("ul");
let inputTexto = document.getElementById("texto")

function addTask(){
    if (inputTexto.value !== ""){
        let nuevoItem=document.createElement("li");
        nuevoItem.textContent = inputTexto.value; //Valor escrito en el input
        nuevoItem.setAttribute("class","my-3");
        lista.appendChild(nuevoItem);
        addButtonBorrar(nuevoItem);
    }
};

function addButtonBorrar(nuevoItem){
    let buttonborrar= document.createElement("button");
    buttonborrar.textContent = "Borrar";
    buttonborrar.setAttribute("class","mx-3 float-start btn btn-primary");
    nuevoItem.appendChild(buttonborrar);
    buttonborrar.addEventListener("click", function(){
    nuevoItem.remove();
    });
}

button.addEventListener("click", function() {
    addTask();
});

inputTexto.addEventListener('keypress', function(e) {
    if (e.key === 'Enter'){
        addTask();
    }
});
