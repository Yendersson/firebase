import { useParams } from "react-router-dom"
import { useCollageAll } from "../hooks/useCollage"
import Picture from "./Picture";
import PlaceholderComponent from "./PlaceholderComponent";

const Collage = () => {

    const {ref} = useParams();
    const {items, error, loader} = useCollageAll(ref);

    return (
        <div className="content"> 
            <h1>fotos de {ref.replaceAll("_"," ")}</h1>
            <div className="row">
            {(loader) &&
            <>
                <PlaceholderComponent />
                <PlaceholderComponent />
                <PlaceholderComponent />
                <PlaceholderComponent />
            </>
            }
            {(!loader) && 
                items.map((item,index) => (
                    <Picture photo={item} key={index}/>
                )
                )
            }
            </div>
        </div>
    )
}

export default Collage;