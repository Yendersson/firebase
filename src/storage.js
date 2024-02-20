import {initializeApp} from 'firebase/app'
import {getDownloadURL, getStorage, ref, uploadString} from 'firebase/storage'

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

export function uploadFile(file) { 

    const refStorage = ref(storge, "images/"+file.nombre);

    uploadString(refStorage, file.contenido, 'base64')
    .then((snapshop) => console.log(snapshop))
    .catch(err => console.error(err));
}

export function getImages(){
    return getDownloadURL(ref(storge, "images/redux.png"));
}






