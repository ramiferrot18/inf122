import React from 'react';

function Registro(){
    return(
        <div className='main-container'>
            <div className='Registro'>
                <p>Nombre</p>
                <input type="text" id="Nombre"/>
                <p>Apellido</p>
                <input type="text" id="Apellido"/>
                <p>Contraseña</p>
                <input type="text" id="contraseña"/>
            </div>
            <div className='boton'>
                <button onclick="Registrar()">Registrar</button>
            </div>
        </div>
    )
}
export default Registro;