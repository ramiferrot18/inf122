function AgregarTarea(){
    var tarea = document.getElementById("nueva-tarea").value; 
    var nuevoItem=createElement("li");
    nuevoItem.textContent=tarea;
    document.getElementById("tarea-lista").appendChild(nuevoItem);
    document.getElementById("nueva-tarea").value="";
}