"use client"

import style from "./Foto.module.css";
import React from "react";

function Foto (){
    const [perrito, setPerrito] = useState("/vercel.svg");
    const [estado, setEstado] = useState("/vercel.svg");

    const url = "https://dog.ceo/api/breeds/image/random"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPerrito(data.message)
                setPerrito(data.sprites.front_default),
                setEstado(data.species.name)
            })
    }, [])
    return(
        <div className={style.box}>
            <h1>perrito</h1>
            <Image src={perrito} alt="dog" width={250} height={250}  />
        </div>
    )
}
export default Foto;