import { Link } from "react-router-dom";
import { useCollage } from "../hooks/useCollage"

const CollageContainer = ({reference}) => {
    

    const {items, loader} = useCollage(reference);
    return (
        <div>
            {!loader && 
                
                <p>container {items}</p>
            }
        </div>

    )
}

export default CollageContainer;