import { useState } from "react";
import { useEffect } from "react";
import { obtenerDirectorios } from "../storage.js";

export const useDir = () => {

    const [directorios, setDirectorios] = useState([]);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(_=> {

        console.log("USE_EFFECT USEDIR")
        obtenerDirectorios()
        .then(res => {
            const carpetas = res.prefixes.map(e => e.name);
            setDirectorios(carpetas);
        })
        .catch(erro => setError({error: erro}))
        .finally(_=> setLoader(!loader));
    }, []);

    return {directorios, error, loader};

};