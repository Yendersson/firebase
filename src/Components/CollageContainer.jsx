import { Link } from "react-router-dom";
import { useCollage } from "../hooks/useCollage"
import Picture from "./Picture";

const CollageContainer = ({reference}) => {
    

    const {items, loader} = useCollage(reference);
    return (
        <>
            {loader &&
                <p>Loading..</p>
            }
            {!loader && 
                <Link to={reference}>
                    <Picture photo={items} />
                </Link>
            }
        </>
        

    )
}

export default CollageContainer;