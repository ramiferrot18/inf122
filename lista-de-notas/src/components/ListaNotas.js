import React, {useState} from "react";
import NotaBasic from "./NotaBasic";
function ListaNotas(){
    const [notas,setNotas]=useState([])  
    const addNota = () =>{
        console.log("Agregar Nota");
    };
    const onDelete = () =>{
        console.log("Eliminar");
    }
    const onEdit = () =>{
        console.log("Editar");
    }
}