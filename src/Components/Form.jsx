import React, { useEffect, useState } from "react";
import { handleFileSelect } from "../utils";
import { getImages, listFiles, listarFotos, uploadFile } from "../storage";

const Form = () => {

    const [photo, setPhoto] = useState('');

    useEffect(_=> {

    },[photo])

    function submitForm(e){
        e.preventDefault();
        
        handleFileSelect(e.target.image.files[0], ({err, content}) => {
            if (err) throw err;
            uploadFile(content.archivo);
        });

    }

    function obtenerArchivos(){
        listarFotos();
    }

    function obtenerImagen(){
        getImages()
        .then(url => {
            setPhoto(url);
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)} action="" method="get" encType="multipart/form-data">
                <input type="file" name="image" id="image" />
                <button >Subir Archivo</button>
            </form>

            <img src={photo} alt="" />

            <button onClick={obtenerImagen}>Obtener Imagen</button>

            <button onClick={obtenerArchivos}>Listar todos los archivos</button>
        </div>
    )
}

export default Form;