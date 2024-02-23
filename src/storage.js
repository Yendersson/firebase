import {initializeApp} from 'firebase/app'
import {getDownloadURL, getStorage, ref, uploadString, listAll, list} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD7zqnc2t3DfS3SwGLIg0u92gpVEuSrmzc",
    authDomain: "collage-67139.firebaseapp.com",
    projectId: "collage-67139",
    storageBucket: "collage-67139.appspot.com",
    messagingSenderId: "764642983581",
    appId: "1:764642983581:web:d45315b04a5e5b04899e74"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const storge = getStorage();
//const refImages = ref(storge, "images");


export function obtenerDirectorios() {
    return listAll(ref(storge, "collage"));    
}

export function obtenerUnaFoto(e){
    return list(ref(storge, `collage/${e}`), {maxResults:1});
}

export function obtenerFotosTodas(e, n){
    return list(ref(storge, `collage/${e}`), {maxResults:n});
}


export function listarFotos() {
    listAll(ref(storge, "collage"))
    .then(res => {
        // Map para obtener un array de promesas que representan la lista de archivos para cada carpeta
        const folderPromises = res.prefixes.map(e => {
            console.log(e.fullPath);
            return list(e, { maxResults: 100 })
                .then(file => file.items.map(item => item.fullPath));
        });

        // Utiliza Promise.all para esperar a que todas las promesas se resuelvan antes de continuar
        return Promise.all(folderPromises);
    })
    .then(fileLists => {
        // Itera sobre la lista de listas de archivos y muestra cada archivo
        fileLists.forEach(files => {
            files.forEach(file => console.log(file));
        });
    })
    .catch(err => console.error(err));
}

export function uploadFile(file) { 

    const refStorage = ref(storge, "images/"+file.nombre);

    uploadString(refStorage, file.contenido, 'base64')
    .then((snapshop) => console.log(snapshop))
    .catch(err => console.error(err));
}

export function getImages(){
    return getDownloadURL(ref(storge, "collage/madrid/logo.png"));
}






