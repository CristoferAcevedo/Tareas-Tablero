let contador=1;
function agregarTarea() {
    let input = document.getElementById("ingresarTarea");
    let valor=document.getElementById("valor1");
    let valor2=document.getElementById("valor2");
    let tarea = input.value; 
    if (tarea === "") { 
        alert("Por favor ingrese una tarea."); 
        return; 
    }
    if(valor.checked){
        let lista = document.getElementById("listaTareas"); 
        let nuevoElemento = document.createElement("li"); 
        nuevoElemento.innerHTML = tarea + ` <input type="checkbox" value="${contador}" id="checkbox${contador}" onclick="cambiarEstado(this)"><span id="status${contador}">No Completada</span> <button class="botonEliminar" onclick="borrarTarea(this)">Eliminar</button>`; 
        lista.appendChild(nuevoElemento); 
        input.value = "";
        contador++;
    }else if(valor2.checked){
        let lista2 = document.getElementById("listaTareas2"); 
        let nuevoElemento2 = document.createElement("li"); 
        nuevoElemento2.innerHTML = tarea + ` <input type="checkbox" value="${contador}" id="checkbox${contador}" onclick="cambiarEstado(this)"><span id="status${contador}">No Completada</span> <button class="botonEliminar" onclick="borrarTarea(this)">Eliminar</button>`; 
        lista2.appendChild(nuevoElemento2); 
        input.value = ""; 
        contador++;    
    }else {
        alert("seleccione un valor");
    };
    const desvalor=document.getElementById("valor1");
    desvalor.checked=false;
    const desvalor2=document.getElementById("valor2");
    desvalor2.checked=false;
};
function cambiarEstado(checkbox) { 
    let statusId = "status" + checkbox.value; 
    let statusElement = document.getElementById(statusId); 
    if (checkbox.checked) { 
        statusElement.textContent = "Completada"; 
    } else { 
        statusElement.textContent = "No Completada"; 
    } 
}
function borrarTarea(boton) { 
    let tarea = boton.parentElement; 
    tarea.remove(); 
}