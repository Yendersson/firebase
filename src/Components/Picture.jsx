import { useState } from "react";
import PictureZoom from "./PictureZoom";

const Picture = ({photo}) => {

    const [show, setShow] = useState(false);


    function showImageZoom(){
        setShow(!show);
    }

    return(
        <>
            <div className="column">
                <img onClick={showImageZoom} src={`https://firebasestorage.googleapis.com/v0/b/collage-67139.appspot.com/o/${photo.replaceAll("/", "%2F")}?alt=media&token=983e1099-7822-4a9f-beca-6f5a7c4a8653`} alt="" />
            </div>
            <PictureZoom 
                display={show}
                src={`https://firebasestorage.googleapis.com/v0/b/collage-67139.appspot.com/o/${photo.replaceAll("/", "%2F")}?alt=media&token=983e1099-7822-4a9f-beca-6f5a7c4a8653`}
                close={showImageZoom}                
                />
        </>
    )
    
}

export default Picture;