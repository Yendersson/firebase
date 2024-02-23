import { useParams } from "react-router-dom"
import { useCollageAll } from "../hooks/useCollage"
import Picture from "./Picture";

const Collage = () => {

    const {ref} = useParams();
    const {items, error, loader} = useCollageAll(ref);

    return (
        <div> 
            <h1>fotos de google</h1>
            {(!loader) && 
                items.map((item,index) => (
                    <div key={index}>
                        <Picture photo={item}/>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Collage;