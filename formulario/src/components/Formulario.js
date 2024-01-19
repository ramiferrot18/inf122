import React from 'react';

function Formulario(){
    return(
        <div className='main-container'>
            <div className='usuario'>
                <p>usuario</p>
                <input type="text" id="nuevo-usuario"/>
                <p>Contraseña</p>
                <input type="text" id="nueva-contraseña"/>
            </div>
            <div className='boton'>
                <button onclick="Registrar()">Registrar</button>
                <button onclick="Ingresar()">Ingresar</button>
            </div>

        </div>
    )
}
export default Formulario;