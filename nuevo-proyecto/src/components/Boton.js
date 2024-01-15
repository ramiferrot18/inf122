import React from 'react';
import '../style/Boton.css'
function Boton({texto, esBotonCLick, funcionClick}){
    return(
        <button className={esBotonCLick ? "boton-click" : "boton-reinciar"}
        onClick={funcionClick}>
            {texto}
        </button>
    )
}
export default Boton;